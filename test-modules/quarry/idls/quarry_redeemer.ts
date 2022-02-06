export type QuarryRedeemerIDL =
{
  "version": "0.0.0",
  "name": "quarry_redeemer",
  "instructions": [
    {
      "name": "createRedeemer",
      "accounts": [
        {
          "name": "redeemer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "iouMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "redemptionMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "redeemTokens",
      "accounts": [
        {
          "name": "redeemer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sourceAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "iouMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "iouSource",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "redemptionVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "redemptionDestination",
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
      "name": "redeemAllTokens",
      "accounts": [
        {
          "name": "redeemer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sourceAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "iouMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "iouSource",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "redemptionVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "redemptionDestination",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "Redeemer",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "iouMint",
            "type": "publicKey"
          },
          {
            "name": "redemptionMint",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "totalTokensRedeemed",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "RedeemTokensEvent",
      "fields": [
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "iouMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "redemptionMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        },
        {
          "name": "timestamp",
          "type": "i64",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 300,
      "name": "Unauthorized",
      "msg": "Unauthorized."
    }
  ]
}
;
export const UquarryUredeemerJSON: QuarryRedeemerIDL =
{
  "version": "0.0.0",
  "name": "quarry_redeemer",
  "instructions": [
    {
      "name": "createRedeemer",
      "accounts": [
        {
          "name": "redeemer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "iouMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "redemptionMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "redeemTokens",
      "accounts": [
        {
          "name": "redeemer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sourceAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "iouMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "iouSource",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "redemptionVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "redemptionDestination",
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
      "name": "redeemAllTokens",
      "accounts": [
        {
          "name": "redeemer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sourceAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "iouMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "iouSource",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "redemptionVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "redemptionDestination",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "Redeemer",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "iouMint",
            "type": "publicKey"
          },
          {
            "name": "redemptionMint",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "totalTokensRedeemed",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "RedeemTokensEvent",
      "fields": [
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "iouMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "redemptionMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        },
        {
          "name": "timestamp",
          "type": "i64",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 300,
      "name": "Unauthorized",
      "msg": "Unauthorized."
    }
  ]
}
;
import { generateErrorMap } from '@saberhq/anchor-contrib';
export const UquarryUredeemerErrors = generateErrorMap(UquarryUredeemerJSON);
