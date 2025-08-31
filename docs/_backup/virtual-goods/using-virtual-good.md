---
sidebar_position: 3
title: "Using VirtualGood"
---

## VirtualGood get(), set() and add() example

You have to create new VirtualGood name `diamond` before run following endpoint script

```ts title="endpoint: getSetAddVirtualGood"
import { virtualGood, Request, Response } from 'gamedrive';

// need to be async function
export default async function (request : Request, response : Response) {
  try{
    const responseData = {}

    const setDiamond = await virtualGood.set("diamond", request.playerId, 999)
    const addDiamond = await virtualGood.add("diamond", request.playerId, 1)
    const getDiamond = await virtualGood.get("diamond", request.playerId)

    responseData.diamondName = getDiamond.name// = "diamond"
    responseData.diamondValue = getDiamond.value// = 1000
    response.send(responseData)
  } catch(error) {
    response.sendError(error)
  }
}
```