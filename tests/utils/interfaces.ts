// anchor/solana
import {
  Provider,
  utils,
  Wallet,
  web3,
  workspace,
  Program,
  IdlAccounts,
} from "@project-serum/anchor";
import {
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
} from "@solana/web3.js";
// local
import * as constants from "./constants";
import { StablePool } from "../../target/types/stable_pool";
import { airdropSol, getAssocTokenAcct } from "./fxns";
import { TestTokens } from "./types";
import { createAtaOnChain, deriveAndInitAta, mintToAta } from "../config/users";
import { mintTo, burn } from "@solana/spl-token";

// init
const programStablePool = workspace.StablePool as Program<StablePool>;

/**
 * Base Account
 * Just a public key
 * @property pubKey - PublicKey: Public Key for account
 */
export class Acct {
  pubKey: PublicKey;
  /**
   * Get system account info for this address
   * @returns Object
   */
  public async getAccountInfo(): Promise<web3.AccountInfo<Buffer>> {
    return await programStablePool.provider.connection.getAccountInfo(
      this.pubKey
    );
  }
}

/**
 * Program Derived Address
 * @property pubKey - PublicKey: Public Key for ATA
 * @property bump? - u8: Bump/nonce for ATA
 */
export class PDA extends Acct {
  bump: number;
}

/**
 * Associated Token Account
 * @property pubKey - PublicKey: Public Key for ATA
 * @property bump? - u8: Bump/nonce for ATA
 */
export class ATA extends Acct {
  bump?: number;

  constructor(authorityPubKey: PublicKey, mintPubKey: MintPubKey) {
    super();

    const [ataPubKey, ataBump] = getAssocTokenAcct(authorityPubKey, mintPubKey);
    this.pubKey = ataPubKey;
    this.bump = ataBump;
  }
  public async getBalance() {
    return await programStablePool.provider.connection.getTokenAccountBalance(
      this.pubKey
    );
  }
  public async mintToATA(
    mintAmount: number,
    mintAuth: User,
    mintPubKey: MintPubKey
  ) {
    await mintTo(
      mintAuth.provider.connection, // connection — Connection to use
      mintAuth.wallet.payer, // payer — Payer of the transaction fees
      mintPubKey, // mint — Mint for the account
      this.pubKey, // destination — Address of the account to mint to
      mintAuth.wallet.publicKey, // authority — Minting authority
      mintAmount // mintAmount — Amount to mint
    );
  }
  /**
   * after a test ends, it can be useful to burn tokens
   *  to reset the balance for the next test.
   *
   * Setting burn amount to -1 will burn all tokens
   */
  public async burnTokens(
    burnAmount: number,
    mintAuth: User,
    mintPubKey: MintPubKey,
    userWallet: Wallet
  ) {
    // check if -1, then get the total amount in account
    const amtToBurn = (
      burnAmount === -1 ? (await this.getBalance()).value.amount : burnAmount
    ) as number;
    if (amtToBurn === 0) return;

    // send burn txn
    await burn(
      mintAuth.provider.connection, // connection
      userWallet.payer, // payer
      this.pubKey, // account: acct to burn tokens from
      mintPubKey, // mint: the token mint
      userWallet.publicKey, // owner: Account owner
      amtToBurn // amount: Amt of token to burn
    );
  }
}

/**
 * User Token object
 * Contains an ATA and a Trove
 * @class ATA
 * @property pubKey - PublicKey: Public Key for ATA
 * @property bump? - u8: Bump/nonce for ATA
 * @class Trove
 * @property pubKey - PublicKey: Public Key for ATA
 * @property bump - u8: Bump/nonce for ATA
 * @property ATA
 * @method getAccountInfo
 */
export class UserToken {
  ata: ATA;
  trove: Trove;
  constructor(userWallet: Wallet, mintPubKey: MintPubKey) {
    this.ata = new ATA(userWallet.publicKey, mintPubKey);
    this.trove = new Trove(userWallet, mintPubKey);
  }
  public async initAta(
    userWallet: Wallet,
    mintPubKey: MintPubKey,
    userConnection: Connection
  ) {
    await createAtaOnChain(
      userWallet, // user wallet
      this.ata, // assoc token acct
      mintPubKey, // mint pub key
      userWallet.publicKey, // auth, can be different than payer
      userConnection // connection
    );
  }
}

export class MintPubKey extends PublicKey {}

export interface ITokenAccount {
  mint: MintPubKey;
  vault: Vault;
}

export class BaseAcct extends PDA {
  type: string;

  /**
   * Get account state for this address
   * @returns IdlAccounts<StablePool>["<type of account>"]
   */
  public async getAccount(): Promise<any> {
    return await programStablePool.account[this.type].fetch(this.pubKey);
  }

  constructor(constant: string, seedsArr: Buffer[]) {
    super();

    const [pubkey, bump] = utils.publicKey.findProgramAddressSync(
      [Buffer.from(constant), ...seedsArr],
      programStablePool.programId
    );
    this.pubKey = pubkey;
    this.bump = bump;
  }
}

/**
 * Trove
 * Just a public key
 * @property pubKey - PublicKey: Public Key for account
 * @property bump - u8: Bump/nonce
 * @method getAccountInfo - gets account state information on chain
 */
export class Trove extends BaseAcct {
  ata: ATA;

  constructor(userWallet: Wallet, mintPubKey: MintPubKey) {
    super(constants.TROVE_SEED, [
      mintPubKey.toBuffer(),
      userWallet.publicKey.toBuffer(),
    ]);
    this.type = "trove";

    // get ata info
    this.ata = new ATA(this.pubKey, mintPubKey);
  }
  // public async getAccount(): Promise<IdlAccounts<StablePool>["trove"]> {
  //   return await this.getAccount();
  // }
}

export class GlobalStateAcct extends BaseAcct {
  constructor() {
    super(constants.GLOBAL_STATE_SEED, []);
    this.type = "globalState";
  }
  // public async getAccount(): Promise<IdlAccounts<StablePool>["trove"]> {
  //   return await this.getAccount();
  // }
}
export class MintAcct extends BaseAcct {
  constructor() {
    super(constants.MINT_USDR_SEED, []);
    this.type = "mint";
  }
}

export class Vault extends BaseAcct {
  constructor(mintPubKey: MintPubKey) {
    super(constants.VAULT_SEED, [mintPubKey.toBuffer()]);
    this.type = "vault";
  }
  // public async getAccount(): Promise<IdlAccounts<StablePool>["vault"]> {
  //   return await this.getAccount();
  // }
}

export class User {
  wallet: Wallet;
  provider: Provider;
  tokens?: {
    usdr?: UserToken;
    lpSaber?: UserToken; // this doesnt get created until the pass case for trove
  };
  constructor(keypair: Keypair) {
    this.wallet = new Wallet(keypair);
    this.provider = new Provider(
      programStablePool.provider.connection,
      this.wallet,
      {
        skipPreflight: true,
        commitment: "confirmed",
        preflightCommitment: "confirmed",
      }
    );
    this.tokens = {};
  }
  public async init(mintPubKey: PublicKey) {
    await airdropSol(
      this.provider,
      this.wallet.publicKey,
      99999 * LAMPORTS_PER_SOL
    );
    // await this.addToken("base", mintPubKey, "lpSaber", 200_000_000);
  }
  public async addToken(
    mintPubKey: MintPubKey,
    tokenStr: TestTokens,
    amount: number = 200_000_000,
    mintAuth?: User
  ) {
    if (amount === 0) throw new Error("Please enter more than 0");
    this.tokens[tokenStr] = new UserToken(this.wallet, mintPubKey);

    // create ata
    await createAtaOnChain(
      this.wallet,
      this.tokens[tokenStr].ata,
      mintPubKey,
      this.wallet.publicKey,
      this.provider.connection
    );

    // mint
    if (mintAuth) {
      await mintToAta(
        tokenStr,
        mintPubKey,
        mintAuth,
        this.tokens[tokenStr],
        amount
      );
    }
  }
}