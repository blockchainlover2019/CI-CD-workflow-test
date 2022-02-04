export type StablePool = {
  "version": "0.1.0",
  "name": "stable_pool",
  "instructions": [
    {
      "name": "createGlobalState",
      "accounts": [
        {
          "name": "superOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintUsd",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "globalStateNonce",
          "type": "u8"
        },
        {
          "name": "mintUsdNonce",
          "type": "u8"
        },
        {
          "name": "tvlLimit",
          "type": "u64"
        }
      ]
    },
    {
      "name": "createTokenVault",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintColl",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tokenVaultNonce",
          "type": "u8"
        },
        {
          "name": "riskLevel",
          "type": "u8"
        }
      ]
    },
    {
      "name": "createUserTrove",
      "accounts": [
        {
          "name": "troveOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userTrove",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenColl",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintColl",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "userTroveNonce",
          "type": "u8"
        },
        {
          "name": "tokenCollNonce",
          "type": "u8"
        }
      ]
    },
    {
      "name": "depositCollateral",
      "accounts": [
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTrove",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "poolTokenColl",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenColl",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintColl",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdrawCollateral",
      "accounts": [
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTrove",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "poolTokenColl",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenColl",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintColl",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "borrowUsd",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTrove",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintUsd",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenUsd",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintColl",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "userUsdTokenNonce",
          "type": "u8"
        }
      ]
    },
    {
      "name": "repayUsd",
      "accounts": [
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTrove",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintUsd",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenUsd",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintColl",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "depositRaydiumCollateral",
      "accounts": [
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userTrove",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolTokenColl",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenColl",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintColl",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "raydiumProgramId",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "raydiumPoolId",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "raydiumPoolAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userTroveAssociatedInfoAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "raydiumPoolLpAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userTroveRewardTokenAAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "raydiumPoolRewardTokenAAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userTroveRewardTokenBAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "raydiumPoolRewardTokenBAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userRewardTokenAAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userRewardTokenBAccount",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdrawRaydiumCollateral",
      "accounts": [
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userTrove",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolTokenColl",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenColl",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintColl",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "raydiumProgramId",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "raydiumPoolId",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "raydiumPoolAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userTroveAssociatedInfoAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "raydiumPoolLpAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userTroveRewardTokenAAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "raydiumPoolRewardTokenAAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userTroveRewardTokenBAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "raydiumPoolRewardTokenBAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userRewardTokenAAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userRewardTokenBAccount",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "createQuarryMiner",
      "accounts": [
        {
          "name": "tokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTrove",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "miner",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quarry",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewarder",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "minerVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quarryProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "minerBump",
          "type": "u8"
        },
        {
          "name": "minerVaultBump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "depositToSaber",
      "accounts": [
        {
          "name": "ratioStaker",
          "accounts": [
            {
              "name": "globalState",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "tokenVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "userTrove",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "owner",
              "isMut": false,
              "isSigner": true
            },
            {
              "name": "poolTokenColl",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "userTokenColl",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "mintColl",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "tokenProgram",
              "isMut": false,
              "isSigner": false
            }
          ]
        },
        {
          "name": "saberFarm",
          "accounts": [
            {
              "name": "quarry",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "miner",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "minerVault",
              "isMut": true,
              "isSigner": false
            }
          ]
        },
        {
          "name": "saberFarmRewarder",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "saberFarmProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdrawFromSaber",
      "accounts": [
        {
          "name": "ratioStaker",
          "accounts": [
            {
              "name": "globalState",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "tokenVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "userTrove",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "owner",
              "isMut": false,
              "isSigner": true
            },
            {
              "name": "poolTokenColl",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "userTokenColl",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "mintColl",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "tokenProgram",
              "isMut": false,
              "isSigner": false
            }
          ]
        },
        {
          "name": "saberFarm",
          "accounts": [
            {
              "name": "quarry",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "miner",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "minerVault",
              "isMut": true,
              "isSigner": false
            }
          ]
        },
        {
          "name": "saberFarmRewarder",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "saberFarmProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "harvestFromSaber",
      "accounts": [
        {
          "name": "ratioHarvester",
          "accounts": [
            {
              "name": "globalState",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "tokenVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "userTrove",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "authority",
              "isMut": false,
              "isSigner": true
            },
            {
              "name": "userTroveReward",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "userRewardToken",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "rewardFeeToken",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "collateralMint",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "systemProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "tokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "clock",
              "isMut": false,
              "isSigner": false
            }
          ]
        },
        {
          "name": "saberFarm",
          "accounts": [
            {
              "name": "quarry",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "miner",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "minerVault",
              "isMut": true,
              "isSigner": false
            }
          ]
        },
        {
          "name": "userTokenColl",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "saberFarmProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "saberFarmRewarder",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mintWrapper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintWrapperProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "minter",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardsTokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "claimFeeTokenAccount",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "globalState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "superOwner",
            "type": "publicKey"
          },
          {
            "name": "mintUsd",
            "type": "publicKey"
          },
          {
            "name": "globalStateNonce",
            "type": "u8"
          },
          {
            "name": "mintUsdNonce",
            "type": "u8"
          },
          {
            "name": "tvlLimit",
            "type": "u64"
          },
          {
            "name": "tvl",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "tokenVault",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mintColl",
            "type": "publicKey"
          },
          {
            "name": "rewardMint",
            "type": "publicKey"
          },
          {
            "name": "totalColl",
            "type": "u64"
          },
          {
            "name": "totalDebt",
            "type": "u64"
          },
          {
            "name": "riskLevel",
            "type": "u8"
          },
          {
            "name": "tokenVaultNonce",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "userTrove",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tokenColl",
            "type": "publicKey"
          },
          {
            "name": "rewardTokenA",
            "type": "publicKey"
          },
          {
            "name": "rewardTokenB",
            "type": "publicKey"
          },
          {
            "name": "lockedCollBalance",
            "type": "u64"
          },
          {
            "name": "debt",
            "type": "u64"
          },
          {
            "name": "lastMintTime",
            "type": "u64"
          },
          {
            "name": "userTroveNonce",
            "type": "u8"
          },
          {
            "name": "tokenCollNonce",
            "type": "u8"
          },
          {
            "name": "userUsdNonce",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "AccountType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Unknown"
          },
          {
            "name": "Mapping"
          },
          {
            "name": "Product"
          },
          {
            "name": "Price"
          }
        ]
      }
    },
    {
      "name": "PriceStatus",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Unknown"
          },
          {
            "name": "Trading"
          },
          {
            "name": "Halted"
          },
          {
            "name": "Auction"
          }
        ]
      }
    },
    {
      "name": "CorpAction",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "NoCorpAct"
          }
        ]
      }
    },
    {
      "name": "PriceType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Unknown"
          },
          {
            "name": "Price"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "Unauthorized",
      "msg": "You are not authorized to perform this action."
    },
    {
      "code": 6001,
      "name": "AlreadyInUse",
      "msg": "AlreadyInUse"
    },
    {
      "code": 6002,
      "name": "InvalidProgramAddress",
      "msg": "InvalidProgramAddress"
    },
    {
      "code": 6003,
      "name": "InvalidState",
      "msg": "InvalidState"
    },
    {
      "code": 6004,
      "name": "InvalidOwner",
      "msg": "InvalidOwner"
    },
    {
      "code": 6005,
      "name": "NotAllowed",
      "msg": "NotAllowed"
    },
    {
      "code": 6006,
      "name": "MathOverflow",
      "msg": "Math operation overflow"
    },
    {
      "code": 6007,
      "name": "InvalidOracleConfig",
      "msg": "InvalidOracleConfig"
    },
    {
      "code": 6008,
      "name": "InvalidAccountInput",
      "msg": "InvalidAccountInput"
    },
    {
      "code": 6009,
      "name": "InvalidCluster",
      "msg": "This function works on devnet only"
    },
    {
      "code": 6010,
      "name": "TVLExceeded",
      "msg": "TVL Exceeded"
    },
    {
      "code": 6011,
      "name": "InvalidTransferAmount",
      "msg": "Transfer amount is invalid"
    }
  ]
};

export const IDL: StablePool = {
  "version": "0.1.0",
  "name": "stable_pool",
  "instructions": [
    {
      "name": "createGlobalState",
      "accounts": [
        {
          "name": "superOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintUsd",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "globalStateNonce",
          "type": "u8"
        },
        {
          "name": "mintUsdNonce",
          "type": "u8"
        },
        {
          "name": "tvlLimit",
          "type": "u64"
        }
      ]
    },
    {
      "name": "createTokenVault",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintColl",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tokenVaultNonce",
          "type": "u8"
        },
        {
          "name": "riskLevel",
          "type": "u8"
        }
      ]
    },
    {
      "name": "createUserTrove",
      "accounts": [
        {
          "name": "troveOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userTrove",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenColl",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintColl",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "userTroveNonce",
          "type": "u8"
        },
        {
          "name": "tokenCollNonce",
          "type": "u8"
        }
      ]
    },
    {
      "name": "depositCollateral",
      "accounts": [
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTrove",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "poolTokenColl",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenColl",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintColl",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdrawCollateral",
      "accounts": [
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTrove",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "poolTokenColl",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenColl",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintColl",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "borrowUsd",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTrove",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintUsd",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenUsd",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintColl",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "userUsdTokenNonce",
          "type": "u8"
        }
      ]
    },
    {
      "name": "repayUsd",
      "accounts": [
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTrove",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintUsd",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenUsd",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintColl",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "depositRaydiumCollateral",
      "accounts": [
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userTrove",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolTokenColl",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenColl",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintColl",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "raydiumProgramId",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "raydiumPoolId",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "raydiumPoolAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userTroveAssociatedInfoAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "raydiumPoolLpAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userTroveRewardTokenAAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "raydiumPoolRewardTokenAAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userTroveRewardTokenBAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "raydiumPoolRewardTokenBAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userRewardTokenAAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userRewardTokenBAccount",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdrawRaydiumCollateral",
      "accounts": [
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userTrove",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolTokenColl",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenColl",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintColl",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "raydiumProgramId",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "raydiumPoolId",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "raydiumPoolAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userTroveAssociatedInfoAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "raydiumPoolLpAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userTroveRewardTokenAAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "raydiumPoolRewardTokenAAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userTroveRewardTokenBAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "raydiumPoolRewardTokenBAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userRewardTokenAAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userRewardTokenBAccount",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "createQuarryMiner",
      "accounts": [
        {
          "name": "tokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTrove",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "miner",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quarry",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewarder",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "minerVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quarryProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "minerBump",
          "type": "u8"
        },
        {
          "name": "minerVaultBump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "depositToSaber",
      "accounts": [
        {
          "name": "ratioStaker",
          "accounts": [
            {
              "name": "globalState",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "tokenVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "userTrove",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "owner",
              "isMut": false,
              "isSigner": true
            },
            {
              "name": "poolTokenColl",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "userTokenColl",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "mintColl",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "tokenProgram",
              "isMut": false,
              "isSigner": false
            }
          ]
        },
        {
          "name": "saberFarm",
          "accounts": [
            {
              "name": "quarry",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "miner",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "minerVault",
              "isMut": true,
              "isSigner": false
            }
          ]
        },
        {
          "name": "saberFarmRewarder",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "saberFarmProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdrawFromSaber",
      "accounts": [
        {
          "name": "ratioStaker",
          "accounts": [
            {
              "name": "globalState",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "tokenVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "userTrove",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "owner",
              "isMut": false,
              "isSigner": true
            },
            {
              "name": "poolTokenColl",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "userTokenColl",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "mintColl",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "tokenProgram",
              "isMut": false,
              "isSigner": false
            }
          ]
        },
        {
          "name": "saberFarm",
          "accounts": [
            {
              "name": "quarry",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "miner",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "minerVault",
              "isMut": true,
              "isSigner": false
            }
          ]
        },
        {
          "name": "saberFarmRewarder",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "saberFarmProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "harvestFromSaber",
      "accounts": [
        {
          "name": "ratioHarvester",
          "accounts": [
            {
              "name": "globalState",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "tokenVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "userTrove",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "authority",
              "isMut": false,
              "isSigner": true
            },
            {
              "name": "userTroveReward",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "userRewardToken",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "rewardFeeToken",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "collateralMint",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "systemProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "tokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "clock",
              "isMut": false,
              "isSigner": false
            }
          ]
        },
        {
          "name": "saberFarm",
          "accounts": [
            {
              "name": "quarry",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "miner",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "minerVault",
              "isMut": true,
              "isSigner": false
            }
          ]
        },
        {
          "name": "userTokenColl",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "saberFarmProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "saberFarmRewarder",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mintWrapper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintWrapperProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "minter",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardsTokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "claimFeeTokenAccount",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "globalState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "superOwner",
            "type": "publicKey"
          },
          {
            "name": "mintUsd",
            "type": "publicKey"
          },
          {
            "name": "globalStateNonce",
            "type": "u8"
          },
          {
            "name": "mintUsdNonce",
            "type": "u8"
          },
          {
            "name": "tvlLimit",
            "type": "u64"
          },
          {
            "name": "tvl",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "tokenVault",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mintColl",
            "type": "publicKey"
          },
          {
            "name": "rewardMint",
            "type": "publicKey"
          },
          {
            "name": "totalColl",
            "type": "u64"
          },
          {
            "name": "totalDebt",
            "type": "u64"
          },
          {
            "name": "riskLevel",
            "type": "u8"
          },
          {
            "name": "tokenVaultNonce",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "userTrove",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tokenColl",
            "type": "publicKey"
          },
          {
            "name": "rewardTokenA",
            "type": "publicKey"
          },
          {
            "name": "rewardTokenB",
            "type": "publicKey"
          },
          {
            "name": "lockedCollBalance",
            "type": "u64"
          },
          {
            "name": "debt",
            "type": "u64"
          },
          {
            "name": "lastMintTime",
            "type": "u64"
          },
          {
            "name": "userTroveNonce",
            "type": "u8"
          },
          {
            "name": "tokenCollNonce",
            "type": "u8"
          },
          {
            "name": "userUsdNonce",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "AccountType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Unknown"
          },
          {
            "name": "Mapping"
          },
          {
            "name": "Product"
          },
          {
            "name": "Price"
          }
        ]
      }
    },
    {
      "name": "PriceStatus",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Unknown"
          },
          {
            "name": "Trading"
          },
          {
            "name": "Halted"
          },
          {
            "name": "Auction"
          }
        ]
      }
    },
    {
      "name": "CorpAction",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "NoCorpAct"
          }
        ]
      }
    },
    {
      "name": "PriceType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Unknown"
          },
          {
            "name": "Price"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "Unauthorized",
      "msg": "You are not authorized to perform this action."
    },
    {
      "code": 6001,
      "name": "AlreadyInUse",
      "msg": "AlreadyInUse"
    },
    {
      "code": 6002,
      "name": "InvalidProgramAddress",
      "msg": "InvalidProgramAddress"
    },
    {
      "code": 6003,
      "name": "InvalidState",
      "msg": "InvalidState"
    },
    {
      "code": 6004,
      "name": "InvalidOwner",
      "msg": "InvalidOwner"
    },
    {
      "code": 6005,
      "name": "NotAllowed",
      "msg": "NotAllowed"
    },
    {
      "code": 6006,
      "name": "MathOverflow",
      "msg": "Math operation overflow"
    },
    {
      "code": 6007,
      "name": "InvalidOracleConfig",
      "msg": "InvalidOracleConfig"
    },
    {
      "code": 6008,
      "name": "InvalidAccountInput",
      "msg": "InvalidAccountInput"
    },
    {
      "code": 6009,
      "name": "InvalidCluster",
      "msg": "This function works on devnet only"
    },
    {
      "code": 6010,
      "name": "TVLExceeded",
      "msg": "TVL Exceeded"
    },
    {
      "code": 6011,
      "name": "InvalidTransferAmount",
      "msg": "Transfer amount is invalid"
    }
  ]
};
