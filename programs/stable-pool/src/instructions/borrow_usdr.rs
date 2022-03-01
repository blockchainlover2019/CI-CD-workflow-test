// libraries
use anchor_lang::prelude::*;
use anchor_spl::{
    associated_token::{self, AssociatedToken},
    token::{self, Mint, Token, TokenAccount},
};
// local
use crate::{
    constants::*,
    states::{global_state::GlobalState, Trove, Vault},
};
// BorrowUsdr

pub fn handle(ctx: Context<BorrowUsdr>, borrow_amount: u64) -> Result<()> {
    Ok(())
}

/// Borrowing usdr is based on the sum of all borrowed amounts from all troves
/// This is still in progress. In this iteration, we are just setting the
/// LP price to 1 LP = 1USDC + 1USDT = 2USDr
/// 
/// This will change to: query balance in Trove (to be named to Vault)
/// THIS IS NOT COMPLETE
#[derive(Accounts)]
pub struct BorrowUsdr<'info> {
    #[account(mut)]
    pub authority: Signer<'info>,
    #[account(
        mut,
        seeds = [GLOBAL_STATE_SEED.as_ref()],
        bump = global_state.bump
    )]
    pub global_state: Account<'info, GlobalState>,
    #[account(
        mut,
        seeds=[VAULT_SEED.as_ref(), vault.mint.as_ref()],
        bump=vault.bump,
        constraint = vault.mint.as_ref() == trove.mint.as_ref(),
    )]
    pub vault: Box<Account<'info, Vault>>,
    #[account(
        mut,
        seeds=[
            TROVE_SEED.as_ref(),
            trove.mint.as_ref(),
            authority.key().as_ref(),
        ],
        bump=trove.bump,
        constraint = vault.mint.as_ref() == trove.mint.as_ref(),
    )]
    pub trove: Box<Account<'info, Trove>>,
    #[account(
        seeds=[MINT_USDR_SEED],
        bump,
        constraint=mint_usdr.key() == global_state.mint_usdr,
    )]
    pub mint_usdr: Box<Account<'info, Mint>>,
    #[account(
        init,
        payer=authority,
        associated_token::mint = mint_usdr.as_ref(),
        associated_token::authority = authority.as_ref(),
        seeds=[USER_USDR_SEED, authority.key().as_ref(), mint_usdr.key().as_ref()],
        bump,
    )]
    pub ata_usdr: Box<Account<'info, TokenAccount>>,
    #[account(address = associated_token::ID)]
    pub associated_token_program: Program<'info, AssociatedToken>,
    pub token_program: Program<'info, Token>,
    pub system_program: Program<'info, System>,
    pub rent: Sysvar<'info, Rent>,
}
