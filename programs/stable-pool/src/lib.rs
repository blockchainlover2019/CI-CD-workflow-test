// libraries  
use anchor_lang::prelude::*;
// local imports
pub mod constants;
pub mod enums;
pub mod errors;
pub mod instructions;
pub mod states;
pub mod utils;

use crate::instructions::*;
use crate::utils::is_global_state_paused;

declare_id!("FvTjLbwbHY4v8Gfv18JKuPCJG2Hj87CG8kPNHqGeHAR4");

#[program]
pub mod stable_pool {
    use super::*;

    pub fn create_global_state(
        ctx: Context<CreateGlobalState>,
        global_state_bump: u8,
        mint_usdr_bump: u8,
        tvl_limit: u64,
        debt_ceiling: u64,
    ) -> Result<()> {
        create_global_state::handle(
            ctx,
            global_state_bump,
            mint_usdr_bump,
            tvl_limit,
            debt_ceiling,
        )
    }

    pub fn create_vault(
        ctx: Context<CreateVault>,
        vault_bump: u8,
        risk_level: u8,
        is_dual: u8,
        debt_ceiling: u64,
        platform_type: u8,
    ) -> Result<()> {
        create_vault::handle(
            ctx,
            vault_bump,
            risk_level,
            is_dual,
            debt_ceiling,
            platform_type,
        )
    }

    pub fn create_trove(
        ctx: Context<CreateTrove>,
        trove_bump: u8,
        ata_trove_bump: u8,
        ceiling: u64,
    ) -> Result<()> {
        create_trove::handle(ctx, trove_bump, ata_trove_bump, ceiling)
    }

    pub fn deposit_collateral(ctx: Context<DepositCollateral>, deposit_amount: u64) -> Result<()> {
        deposit_collateral::handle(ctx, deposit_amount)
    }
    pub fn withdraw_collateral(
        ctx: Context<WithdrawCollateral>,
        withdraw_amount: u64,
    ) -> Result<()> {
        withdraw_collateral::handle(ctx, withdraw_amount)
    }

    /// THIS IS NOT COMPLETE, please see note on the contract fxn (search `BorrowUsdr<'info>`)
    #[access_control(is_global_state_paused(&ctx.accounts.global_state))]
    pub fn borrow_usdr(
        ctx: Context<BorrowUsdr>,
        borrow_amount: u64,
    ) -> Result<()> {
        borrow_usdr::handle(ctx, borrow_amount)
    }
}
