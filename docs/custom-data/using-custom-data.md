---
sidebar_position: 3
title: Using CustomData
---

## Using Custom Data
Pass customData's name to first parameter of query functions and pass other paremeters by follow mongoose's Model apis (https://mongoosejs.com/docs/api/model.html).

## create, update and find data example

```js title="endpoint: createAndFindCustomData"
import { Request, Response, customData } from 'gamedrive';

export default function (request: Request, response: Response) {

   try{
    const createPlayerStatusData = await customData.create("playerStatus", {
        playerId: request.playerId,
        health: 100,
        mana: 100
      })

    const updatePlayerStatusData = await customData.updateOne("playerStatus", {
        playerId: request.playerId,
      },{
        health: 50,
        mana: 50
      })

    const findOnePlayerStatusData = await customData.findOne("playerStatus", {
        playerId: request.playerId,
    })
   
    response.send(findOnePlayerStatusData)
  } catch(error) {
    response.sendError(error)
  }
}
```


use  option "_id": false inside nested customdata to avoid create _id in nested schema

  "options": {
        "_id": false
    },

# Example of using customdata
```json

{
    "definitions": {
        "dicesFrameRecords": {
            "type": [
                "ShakeRecord.DicesFrameRecord"
            ]
        },
        "plateHealth": {
            "type": "number"
        },
        "dicesSetup": {
            "type": "ShakeRecord.DicesTransformRecord"
        }
    },
    "options": {
        "timestamps": {
            "createdAt": true,
            "updatedAt": false
        }
    },
    "indexes": [
        {
            "fields": {
                "dicesResult": {
                    "dices": 1
                }
            }
        },
        {
            "fields": {
                "createdAt": 1
            }
        }
    ],
    "extends": "ShakeRecord.ShakeRecordIdentifier",
    "inheritOptions": {
        "overrideIndexes": true
    }
}


{
    "definitions": {
        "ownerId": {
            "type": "objectid"
        },
        "playerId": {
            "type": "objectid"
        },
        "chip": {
            "type": "number"
        }
    },
    "indexes": [
        {
            "fields": {
                "ownerId": 1,
                "playerId": 1
            },
            "options": {
                "unique": true
            }
        },
        {
            "fields": {
                "chip": -1
            }
        }
    ],
    "extends": null,
    "inheritOptions": null
}

```
