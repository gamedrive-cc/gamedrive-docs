---
sidebar_position: 6
title: Storing data via Virtual Good and create a leaderboard
slug: /getting-started/use-virtual-good-and-create-leaderboard
---

## What is VirtualGood?

VirtualGood is a simplest way to store single value of each player.
One VirtualGood can collect number values of many players. One player can have one value in one VirtualGood. It also have apis to help you ranking players to make leaderboard which Custom Data do not have api for this.

## How to use Virtual Good?

1. Create a Virtual Good by go to Virtual Goods menu on sidebar and click on New virtual good button on top righ

![Virtual Good list](\img\docs\getting-started\5\01-virtual-good-list.png)

Input virtual good detail by following infomation
| Name | Type |
|----------|--------|
| `name` | score |
| `description`| player score |
| `Start Value`| 20 |

![Create Virtual Good](\img\docs\getting-started\5\02-new-virtual-good.png)
Then click Create

It will bring you back to Virtual Good list page
![Virtual Good list exist](\img\docs\getting-started\5\03-virtual-good-list-exist.png)


2. Create new Endpoint to get data from virtual good

![Get Score endpoint create](\img\docs\getting-started\5\04-get-score-endpoint-create.png)

Edit endpoint script to following code

```typescript
import { Request, Response, virtualGood } from "gamedrive";

export default async function (request: Request, response: Response) {
  try {
    const scoreResult = await virtualGood.getValue("score", request.playerId);
    response.send(scoreResult);
  } catch (error) {
    response.sendError(error);
  }
}
```

![Get Score endpoint code](\img\docs\getting-started\5\05-endpoint-code-get-virtual-good.png)

Send test quest to see the result

![Get Score endpoint result](\img\docs\getting-started\5\06-endpoint-get-score-test.png)
You can see it return value = 20 as we set default value for the virtual good when create

## How to create leaderboard via virtual good?

1. Create new Endpoint to set score value

![Create get score endpoint](\img\docs\getting-started\5\07-create-set-score-endpoint.png)

Edit endpoint script to following code

```typescript
import { Request, Response, virtualGood } from "gamedrive";

export default async function (request: Request, response: Response) {
  try {
    const playerId = request.playerId;
    const score = request.args.score;
    const result = await virtualGood.setValue("score", playerId, score);
    response.send(result);
  } catch (error) {
    response.sendError(error);
  }
}
```

![Update get score endpoint code](\img\docs\getting-started\5\08-create-set-score-endpoint-update-code.png)

2. Create data for 2 players and use 2 player to send request

Go to Players menu on sidebar and click on New Preview Player on top right

![players page](\img\docs\getting-started\5\09-create-new-test-player1.png)

Insert new player and and click Create

![Create new player](\img\docs\getting-started\5\10-create-new-test-player2.png)

It will bring back to Players page. Then click Query button you will see 2 players appear

![Query for players](\img\docs\getting-started\5\11-create-new-test-player-see-2-players.png)

Copy both player \_id to be used

Call setScore endpoint for both of player by different scoe value
| Player | Score |
|----------|--------|
| `player1` | 99 |
| `player2`| 100 |

Player1's result
![Set player 1 score](\img\docs\getting-started\5\12-call-set-score-player1.png)

Player2's result
![Set player 2 score](\img\docs\getting-started\5\13-call-set-score-player2.png)


3. Create new endpoint name "getScoreLeaderboard" and write logic to create leaderboard

Set endpoint parameters to following data
| Name | Type |
|----------|--------|
| `limit` | number |
| `skip`| string |

![getScoreLeaderboard endpoint params](\img\docs\getting-started\5\14-create-get-score-leaderboard.png)

Edit script to following code

```typescript
import { Request, Response, virtualGood } from "gamedrive";

export default async function (request: Request, response: Response) {
  try {
    const incomingPlayerId = request.playerId;
    const limit = request.args.limit;
    const skip = request.args.skip;

    const virtualGoodScore = "score";
    const playerRank = await virtualGood.getPlayerRank(
      virtualGoodScore,
      incomingPlayerId
    );
    const topPlayers = await virtualGood.findTopRankPlayers(
      virtualGoodScore,
      limit,
      skip,
      -1
    );

    const data = {
      playerRank,
      topPlayers,
    };

    response.send(data);
  } catch (error) {
    response.sendError(error);
  }
}
```

![Edit Endpoint Code](\img\docs\getting-started\5\15-create-get-score-leaderboard-code.png)

Send test request by Player2's \_id and you will see similar result to following picture

![Send test request getScoreLeaderboard](\img\docs\getting-started\5\16-send-get-score-leaderboard-test-request.png)

To get players name and profilePictureUrl you can checkout gamedrive's player module in core-component.

Example script

```typescript
const gamedrivePlayers = await player.find({
  _id: {
    $in: playerIds,
  },
});
```
