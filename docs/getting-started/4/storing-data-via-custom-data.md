---
sidebar_position: 5
title: Storing data via Custom Data
slug: /getting-started/storing-data-via-custom-data
---

## What is Custom Data?

A CustomerData is built on top of a [Mongodb](https://www.mongodb.com/)'s collection and based on [Mongoose](https://mongoosejs.com/docs/) schema and apis. We can define our schnema which including indexing via JSON. We can insert or find data in the collection via Typescript api.

## How to use Custom Data?

1. Create Custom Data by go to Custom Data menu on sidebar and click on New custom data button on top righ

![Custom Data list](\img\docs\getting-started\4\01-custom-data-list.png)


2. Input Custom Data name "playerAssets" and description

![New Custom Data](\img\docs\getting-started\4\02-new-custom-data.png)



3. From Custom Data list, click on the new Custom Data "playerAssets" you just created

![Custom Data list](\img\docs\getting-started\4\03-custom-data-list.png)

It will bring you to Custom Data detail page
![Custom Data Detail](\img\docs\getting-started\4\04-custom-data-detail.png)


4. Edit Schema to following json

```json
{
  "definitions": {
    "playerId": {
      "type": "ObjectId",
      "unique": true
    },
    "status": {
      "type": "String"
    },
    "coin": {
      "type": "Number",
      "default": 99
    }
  },
  "options": {},
  "indexes": [],
  "extends": "",
  "inheritOptions": {}
}
```

![Defined Schema and index](\img\docs\getting-started\4\05-custom-data-fix-schema.png)
Then click Save.

Since we set unique index to playerId field, so we need to press Create Index button
![Create index index](\img\docs\getting-started\4\05-custom-data-create-index.png)
You will see playerId show up as index

Now the Custom Data is ready to use



5. Write Endpoint to create data to the Custom Data.

Create endpoint with following parameter in the picture below

![create endpoint to test](\img\docs\getting-started\4\06-create-player-asset-endpoint.png)

Edit endpoint script to following code

```typescript
import { Request, Response, customData } from "gamedrive";

export default async function (request: Request, response: Response) {
  try {
    const playerId = request.playerId;
    const status = request.args.status;
    const coin = request.args.coin;
    const findResult = await customData.findOne("playerAssets", {
      playerId: playerId,
    });

    if (!findResult) {
      const createResult = await customData.create("playerAssets", {
        playerId: playerId,
        status: status,
        coin: coin,
      });
      createResult["created"] = true
      response.send(createResult);
    } else {
      const updateResult = await customData.updateOne("playerAssets", {
        playerId: playerId,

      }, {
        status: status,
        coin: coin,
      });

      findResult.status = status
      findResult.coin = coin
      findResult["updated"] = true
      response.send(findResult);
    }
  } catch (error) {
    response.sendError(error);
  }
}
```

![edit endpoint code to test](\img\docs\getting-started\4\07-update-endpoint-test-custom-data-code.png)

Go back to the endpoint detail page. Then send test request to see the result created

![Send test create custom data](\img\docs\getting-started\4\08-send-create-custom-data-test.png)

Send test request again with different value you will see different result updated

![Send test create custom data](\img\docs\getting-started\4\08-send-create-custom-data-test2.png)

Notice the created and updated flag of the response

 

6. Browse you Custom Data's data via web ui.

Go to "playerAssets" Custom Data detail page and click on Browse button on the top right

![Go to browse](\img\docs\getting-started\4\09-go-to-browse-custom-data.png)

then click on Query button

![click browse to see data](\img\docs\getting-started\4\10-click-on-browse-button-will-see-the-data.png)
You will see your data that just updated by the endpoint
 

7. Write another Endpoint to find data, note that they need to set index for the fields

![Create get player asset](\img\docs\getting-started\4\11-create-get-player-asset-endpoint.png)

Edit the endpoint code to following

```typescript
import { Request, Response, customData } from "gamedrive";

export default async function (request: Request, response: Response) {
  try {
    const playerId = request.playerId;
    const playerAssetData = await customData.findOne("playerAssets", {
      playerId: playerId,
    });
    response.send(playerAssetData);
  } catch (error) {
    response.sendError(error);
  }
}
```

![edit get player asset code](\img\docs\getting-started\4\12-edit-get-player-asset-endpoint-code.png)

Go back to the endpoint. Then send test reques to see the result

![send get player asset test request](\img\docs\getting-started\4\13-sed-get-player-asset-endpoint-test-request.png)
