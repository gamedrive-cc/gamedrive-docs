---
sidebar_position: 4
title: "Using transactions"
---

## Why we need tramsactions?

Check this [Mongodb Transactions](https://www.mongodb.com/docs/manual/core/transactions/)

## Basic using of transaction in GameDrive's api

GameDrive support using of mongodb's transactions. 

### Example of using transactions

The following code demonstrates how to use a transaction to ensure that transferring coins from one player to another is performed atomically — meaning it will either succeed entirely or fail without any partial updates.

```typescript title="Send data from player to player by using transaction"
import { Request, Response, customData } from "gamedrive";

export default async function (request: Request, response: Response) {
  const customDataName = "playerCoin";
  const session = await customData.startSessionWithTransaction();

  try {
    const coin = request.args.coin;
    const player1Id = request.args.player1Id;
    const player2Id = request.args.player2Id;

    // find both players in the same transaction session
    const player1 = await customData.findOne(
      customDataName,
      { playerId: player1Id },
      {},
      { session }
    );

    const player2 = await customData.findOne(
      customDataName,
      { playerId: player2Id },
      {},
      { session }
    );

    if (!player1 || !player2) {
      throw new Error("One or both players not found");
    }

    if (player1.coin < coin) {
      throw new Error("Insufficient balance");
    }

    // update both documents atomically
    await customData.updateOne(
      customDataName,
      { playerId: player1Id },
      { $inc: { coin: -coin } },
      { session }
    );

    await customData.updateOne(
      customDataName,
      { playerId: player2Id },
      { $inc: { coin: coin } },
      { session }
    );

    // commit the transaction
    await customData.commitTransactionAndEndSession(session);

    response.send({
      success: true,
      message: `${coin} coins transferred from ${player1Id} to ${player2Id}`,
    });
  } catch (error) {
    //about transaction if an error occur
    await customData.abortTransactionAndEndSession(session);
    response.sendError(error);
  }
}
```

### Support

We can use transactions for both customData and virtualGood's api
