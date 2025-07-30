---
sidebar_position: 0
title: gamedrive
---

# members
  - [virtualGood](#virtualgood)
    - [get()](#virtualgood_get)
    - [set()](#virtualgood_set)
    - [add()](#virtualgood_add)
  - [customData](#customdata)
    - [query functions](#customdata_functions)
  - [player](#player)
    - [findById()](#player_findById)
    - [findByNumberId()](#player_findNumberId)
    - [findAccountById()](#player_findAccountById)
  - [Request](#request)
    - [playerId](#Request_playerId)
    - [args](#Request_args)
  - [Response](#response)
    - [send()](#Response_send)
    - [sendError()](#Response_sendError)
  - [iap](#iap)
    - [google](#iap_google)
      - [products](#iap_google_products)
        - [get()](#iap_google_products_get)
        - [acknowledge()](#iap_google_products_get)
  - [room](#response)
  - [dns](#response)

## virtualGood
### get(){#virtualgood_get}
#### parameters
  - name : string - virtualGood's name
  - playerId : string 
  
#### return
  - Promise[any]

```ts title="virtualGood.get()"
import { virtualGood } from 'gamedrive';

const playerId = "5d6ede6a0ba62570afcedd3a"
virtualGood.get("name", playerId).then(data => {

    const virtualGoodValue = {
      name = data.name,
      value = data.value,
    } 
    
    console.log(virtualGoodValue)
}).catch( error =>{
    //handle error
})

```
### set(){#virtualgood_set}
#### parameters
  - name : string - virtualGood's name
  - playerId : string 
  - value : number - value to set
#### return
  - Promise[any]

```ts title="virtualGood.set()"
import { virtualGood } from 'gamedrive';

const playerId = "5d6ede6a0ba62570afcedd3a"
virtualGood.set("name", playerId, 999).then(data => {

    const virtualGoodValue = {
      name = data.name,
      value = data.value,
    } 
    
    console.log(virtualGoodValue)
}).catch( error =>{
    //handle error
})

```
### add(){#virtualgood_add}
#### parameters
  - name : string - virtualGood's name
  - playerId : string
  - value : number - value to add
#### return
  - Promise[any]

```ts title="virtualGood.add()"
import { virtualGood } from 'gamedrive';

const playerId = "5d6ede6a0ba62570afcedd3a"
virtualGood.add("name", playerId, 1).then(data => {

    const virtualGoodValue = {
      name = data.name,
      value = data.value,
    } 
    
    console.log(virtualGoodValue)
}).catch( error =>{
    //handle error
})

```

## customData
Pass customData's name to first parameter of query functions and pass other paremeters by follow mongoose's Model apis (https://mongoosejs.com/docs/api/model.html).

```ts title="Usage"
import { customData } from 'gamedrive';

/* playerStatus's schema
{
  "playerId": {
    "type": "objectId",
    "unique": true
  },
  "health": {
    "type": "number",
    "default": 50
  },
  "mana": {
    "type": "number",
    "default": 50
  }
}
*/

customData.create("playerStatus", {
        playerId: "5d6ede6a0ba62570afcedd3a",
        health: 100,
        mana: 100
}).then(data =>   {
  //handle data
}).catch(error => {
  //handle error
})
```

### query functions{#customdata_functions}
```ts title="create"
create(name: string, docs: any, options: any): Promise<any>
```
```ts title="findOne"
findOne(name: string, conditions: any, projection: any, options: any): Promise<any> 
```
```ts title="insertMany"
insertMany(name: string, docs: any[], options: any): Promise<any[]> 
```
```ts title="updateOne"
updateOne(name: string, filter: any, update: any, options: any): Promise<MongooseUpdateResult>
```
```ts title="updateMany"
updateMany(name: string, filter: any, update: any, options: any): Promise<MongooseUpdateResult>
```
```ts title="find"
//max 200 row
find(name: string, filter: any, projection: any, options: any): Promise<any[]> 
```
```ts title="findOneAndUpdate"
findOneAndUpdate(name: string, conditions: any, update: any, options: any): Promise<any>
```
```ts title="findOneAndDelete"
findOneAndDelete(name: string, conditions: any, options: any): Promise<any>
```
```ts title="findById"
findById(name: string, _id: any, projection: any, options: any): Promise<any>
```
```ts title="findByIdAndUpdate"
findByIdAndUpdate(name: string, _id: any, update: any, options: any): Promise<any>
```
```ts title="findByIdAndDelete"
findByIdAndDelete(name: string, _id: any, options: any): Promise<any>
```
```ts title="countDocuments"
countDocuments(name: string, filter: any): Promise<number>
```
```ts title="estimatedDocumentCount"
estimatedDocumentCount(name: string, options: any): Promise<number> 
```
```ts title="deleteMany"
deleteMany(name: string, conditions: any, options: any): Promise<any>
```
## player
### findById(){#player_findById}
#### parameters
  - playerId : string 
  
#### return
  - Promise[any]

```ts title="player.findById()"
import { player } from 'gamedrive';

const playerId = "5d6ede6a0ba62570afcedd3a"
player.findById(playerId).then(data => {
  //handle data

  /*
  {
    _id,
    name,
    numberId,
    profilePictureUrl
  }
  */
}).catch( error =>{
    //handle error
})

```

### findByNumberId(){#player_findNumberId}
#### parameters
  - numberId : number 
#### return
  - Promise[any]

```ts title="player.findByNumberId()"
import { player } from 'gamedrive';

const playerNumberId = 0000000001
player.findByNumberId(playerNumberId).then(data => {
  //handle data

  /*
  {
    _id,
    name,
    numberId,
    profilePictureUrl
  }
  */
}).catch( error =>{
    //handle error
})

```
### findAccountById(){#player_findAccountById}
#### parameters
  - playerId : string 
#### return
  - Promise[any]

```ts title="player.findAccountById()"
import { player } from 'gamedrive';

const playerId = "5d6ede6a0ba62570afcedd3a"
player.findAccountById(playerId).then(data => {
  //handle data

  /*
  {
    devices,
    socialAccounts
  }
  */
}).catch( error =>{
    //handle error
})

```

## Request
Class of first argument of endpoint which storing data of the request send from client
### playerId{#Request_playerId}
Id of player who send the request

```js title="endpoint: Example"
import { Request, Response } from 'gamedrive';

export default function (request: Request, response: Response) {
  const playerId = request.playerId//some value like "5d6ede6a0ba62570afcedd3a"
  console.log("playerId:", playerId)
}
```
### args{#Request_args}
Array of argument passed to the endpoint

```js title="endpoint: Example"
import { Request, Response } from 'gamedrive';

export default function (request: Request, response: Response) {
  const args : any[] = request.args//some value like "5d6ede6a0ba62570afcedd3a"
  //request.args.length will equal 0 if no argument passed
  console.log("args:", args)
}
```

## Response
Class of second argument of endpoint which storing functions to send response to client
### send(){#Response_send}
Send response back to client

```js title="endpoint: Example"
import { Request, Response } from 'gamedrive';

export default function (request: Request, response: Response) {
  const args : any[] = request.args//some value like "5d6ede6a0ba62570afcedd3a"
  //request.args.length will equal 0 if no argument passed
  response.send({message: "Hello world"})
}
```

### sendError(){#Response_sendError}
Send error response back to client

```js title="endpoint: Example"
import { Request, Response } from 'gamedrive';

export default function (request: Request, response: Response) {
  //you can call sendError in 2 forms
  response.sendError("message")
  response.sendError("CODE", "message")//send CODE and message
}
```

## webRequest
Class of second argument of endpoint which storing functions to send response to client
https://github.com/axios/axios
"axios": "^0.27.2"

webReqest.get(url[, config])
webReqest.delete(url[, config])
webReqest.head(url[, config])
webReqest.options(url[, config])
webReqest.post(url[, data[, config]])
webReqest.put(url[, data[, config]])
webReqest.patch(url[, data[, config]]) 

### get(){#Response_send}
Send response back to client

```js title="endpoint: Example"
import { Request, Response } from 'gamedrive';

export default function (request: Request, response: Response) {
  const args : any[] = request.args//some value like "5d6ede6a0ba62570afcedd3a"
  //request.args.length will equal 0 if no argument passed
  response.send({message: "Hello world"})
}
```

### sendError(){#Response_sendError}
Send error response back to client

```js title="endpoint: Example"
import { Request, Response } from 'gamedrive';

export default function (request: Request, response: Response) {
  //you can call sendError in 2 forms
  response.sendError("message")
  response.sendError("CODE", "message")//send CODE and message
}
```