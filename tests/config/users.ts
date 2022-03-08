// libraries
import {
  Program,
  Provider,
  web3,
  workspace,
  Wallet,
} from "@project-serum/anchor";
import {
  PublicKey,
  LAMPORTS_PER_SOL,
  Transaction,
  Connection,
} from "@solana/web3.js";
import {
  createAssociatedTokenAccountInstruction,
  mintTo,
} from "@solana/spl-token";
// local
// import superKeyArr from "../../.config/testUser-super-keypair.json";
import baseKeyArr from "../../.config/testUser-base-keypair.json";
import testKeyArr from "../../.config/testUser-test-keypair.json";
import { StablePool } from "../../target/types/stable_pool";
import * as constants from "../utils/constants";
import {
  airdropSol,
  getAcctBalance,
  getAssocTokenAcct,
  getPda,
  handleTxn,
} from "../utils/fxns";
import { ATA, MintPubKey, User, UserToken, Vault } from "../utils/interfaces";
import { TestTokens, TestUsers } from "../utils/types";

const programStablePool = workspace.StablePool as Program<StablePool>;

// will repeat what was done for super, for user
const userBaseKeypair: web3.Keypair = web3.Keypair.fromSecretKey(
  new Uint8Array(baseKeyArr as any[])
);
const userTestKeypair: web3.Keypair = web3.Keypair.fromSecretKey(
  new Uint8Array(testKeyArr as any[])
);

export const createAtaOnChain = async (
  userWallet: Wallet,
  ata: ATA,
  mintPubKey: MintPubKey,
  auth?: PublicKey,
  userConnection: Connection = null
) => {
  const txn = new Transaction().add(
    createAssociatedTokenAccountInstruction(
      userWallet.publicKey, // payer: web3.PublicKey,
      ata.pubKey, // associatedToken: web3.PublicKey,
      auth || userWallet.publicKey, // owner: web3.PublicKey,
      mintPubKey // mint: web3.PublicKey,
    )
  );
  userConnection && (await handleTxn(txn, userConnection, userWallet));
};

/**
 * Create an associated token account (ATA) for a given user-auth account.
 *
 * 1. Derive the ATA.
 * 2. Create the ATA on chain
 * 3. Mint token to the ATA
 *
 * @param userWallet
 * @param userConnection
 * @param mintPubKey - the mint pub key
 * @param authorityPubKey - the authority
 */
export const deriveAndInitAta = async (
  userWallet: Wallet,
  userConnection: Connection,
  mintPubKey: PublicKey,
  authorityPubKey?: PublicKey
): Promise<[PublicKey, number]> => {
  const auth = authorityPubKey || userWallet.publicKey;
  // 1) get token acct for user
  const [ataPubKey, bump] = getAssocTokenAcct(auth, mintPubKey);

  // create instruction & add to transaction
  const txn = new Transaction().add(
    createAssociatedTokenAccountInstruction(
      userWallet.publicKey, // payer: web3.PublicKey,
      ataPubKey, // associatedToken: web3.PublicKey,
      auth, // owner: web3.PublicKey,
      mintPubKey // mint: web3.PublicKey,
    )
  );

  // sign and send
  await handleTxn(txn, userConnection, userWallet);
  return [ataPubKey, bump];
};

export const mintToAta = async (
  mintTokenStr: TestTokens,
  mintPubKey: PublicKey,
  mintAuth: User,
  dest: UserToken,
  amount: number = 200_000_000 // 0.2 units of token
) => {
  // mint to newly created ata
  const ataBalanceOrig = Number((await getAcctBalance(dest.ata.pubKey)).amount);
  console.log(`minting ${mintTokenStr} to ata, balance: ${ataBalanceOrig}`);
  try {
    await mintTo(
      mintAuth.provider.connection, // connection — Connection to use
      mintAuth.wallet.payer, // payer — Payer of the transaction fees
      mintPubKey, // mint — Mint for the account
      dest.ata.pubKey, // destination — Address of the account to mint to
      mintAuth.wallet.publicKey, // authority — Minting authority
      amount // amount — Amount to mint
    );
  } catch (error) {
    throw error;
  }
  const ataBalanceNew = Number((await getAcctBalance(dest.ata.pubKey)).amount);
  const diff = ataBalanceNew - ataBalanceOrig;
  console.log(`ata balance: ${ataBalanceOrig} -> ${ataBalanceNew}  ∆=${diff}`);
};

export class Users {
  public base: User;
  public test: User;
  public super: User;

  constructor() {
    this.base = new User(userBaseKeypair);
    this.test = new User(userTestKeypair);
    this.super = {
      wallet: programStablePool.provider.wallet as Wallet,
      provider: programStablePool.provider,
      // createTrove: null,
      init: null,
      addToken: null,
    };
  }
  public async init(mintPubKey: PublicKey) {
    await this.base.init(mintPubKey);
    await this.base.addToken(mintPubKey, "lpSaber", 200_000_000);
    await this.test.init(mintPubKey);
    await this.test.addToken(mintPubKey, "lpSaber", 200_000_000);
  }
}

/**
 * create usdr and assign to state var
 * @param mintPubKey
 * @param user
 */
export const deriveUsdrAcct = async (mintPubKey: PublicKey, user: User) => {
  const [userUsdrKey, userUsdrBump] = getAssocTokenAcct(
    user.wallet.publicKey,
    mintPubKey
  );
  // add to state
  // user.tokens.usdr.ata = { pubKey: userUsdrKey, bump: userUsdrBump };
};
