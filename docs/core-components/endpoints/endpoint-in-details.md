---
sidebar_position: 2
title: Endpoints in details
---

## How to create and use Endpoints?

Check this [Endpoint getting started](/getting-started/create-endpoint-and-write-logic)

### Limitation

- Arguments max size is 1MB.
- Request will response Timeout error if no response in 10 seconds

## Exposed Endpoints

To allow external send request to endpoint without required to login first, you can create endpoint with name '**exposed-**' as prefix. For example.

- "exposed-get-new-update"
- "exposed-verify-ads"

### Calling Exposed Endpoint example

If you project id is 1111111222222aaaaaabbbbbb you can call exposed-verify-ads endpoint by following url

`https://southeast-asia.gamedrive.cc/player-gateway/endpoints/exposed/1111111222222aaaaaabbbbbb/LIVE/exposed-verify-ads?query1=xxxyyy`

### Get query and body from request

Exposed endpoints allow you to pass query string via url by GET method or sending body by POST method.

```typescript title="exposed-endpoint1"
import { Request, Response } from "gamedrive";

export default async function (request: Request, response: Response) {
  try {
    const body = request.body;
    console.log("body is:", body);

    const query = request.query;
    console.log("query is:", query);

    response.send("OK");
  } catch (error) {
    response.sendError(error);
  }
}
```

### Set reponse http status inside exposed-endpoint

use function setStatusCode() to set status code.

```typescript
import { Request, Response } from "gamedrive";

export default async function (request: Request, response: Response) {
  try {
    response.setStatusCode(400);
    response.send("NOT OK");
  } catch (error) {
    response.sendError(error);
  }
}
```

Notice

- setStatusCode() works only in exposed endpoints.
- request.playerId will be null since not player logged in
- default statusCode is 200.
- if call response.sendError() or any error, status code will be override to 400\
- status code will change only when you set value > 0.

### Use cases

- server-side verification ads (SSV)
- news update
- check minimun game client version required by game backend server.
