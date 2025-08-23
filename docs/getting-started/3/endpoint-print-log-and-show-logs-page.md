---
sidebar_position: 4
title: Print logs
slug: /getting-started/endpoint-print-log-and-show-logs-page
---

## How logs help us?

When we working with complex logic and something not going as we expected, printing some data out at a point help us to see what went wrong.

## How to use log?

1. Create new endpoint or using the existing one then update the code to

```typescript
import { Request, Response } from "gamedrive";

export default async function (request: Request, response: Response) {
  try {
    const playerId = request.playerId;

    console.log("playerId is: " + playerId);
    console.log("message1", "message2");

    response.send("hello from an endpoint");
  } catch (error) {
    response.sendError(error);
  }
}
```



2. Press Request button to send test request.
   Then go to logs page and you will see the log messages show up.

![Log message show up](\img\docs\getting-started\3\0-logs-message-show-up.png)
