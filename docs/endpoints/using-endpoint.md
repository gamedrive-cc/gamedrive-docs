---
sidebar_position: 3
title: Using Endpoint
---

## Sending request to endpoints
You can send request to endpoint with or without arguments.

## Basic
```js title="endpoint: Basic"
import { Request, Response } from 'gamedrive';

export default function (request: Request, response: Response) {

  const data {
    message: "hello from"
  }

  response.send(data)

  /* other properties
  request.args - access arguments array
  request.playerId - access player who send the request id

  response.send( {data: "xxx"} ) - send data to client
  response.sendError("message") - send error message to client
  response.sendError("CODE", "message") - send error with code and message to client
  */

}
```

return :
```jsx
{
  "data":{
      "message": "hello world"
  }
}
```
## Debugging 
You can use console.log() to print message to **Conole->Logs**
```js title="endpionts debugging"
console.log("debug message")
```

### Limitation
argument max size is 1mb 
endpoint request will Timeout error in 10 seconds

### Usig 'exposed-' prefix
 - url example : http://localhost:3010/endpoints/exposed/61b0c4993234d6b357638fd7/exposed-AUTO_GEN_TEST_EXPOSED?stage=PREVIEW&q1=q1&q2=q2

 - response.setStatusCode() works on exposed endpoints only 
 
 default statusCode value is 200 even return errors. the value will change only when you set value > 0 response.statusCode = 201, 400

 use setStatusCode()

 if use response.sendError() or any error, status code will be override to 400

  <!-- exposedEndpoint will not have {errors:{}, data:{}} format -->
 <!-- sendError("message") will return 
 {
  code: TEXT_ENDPOINT_SEND_ERROR
  message: "message"
 }

 send("message") will return 
  "message"
 - -->
