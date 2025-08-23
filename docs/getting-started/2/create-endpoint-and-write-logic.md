---
sidebar_position: 3
title: Endpoint Introduction
slug: /getting-started/create-endpoint-and-write-logic
---

## What is Endpoints?

Endpoint will handle response and response from your game client.
You can defind paramers and write custom logic for endpoints.

## Create and use Endpoint

1. Select Endpoint on the sidebar menu on the left.

![Endpoint](\img\docs\getting-started\1\01-endpoint-list0.png)
Then click on New endpoint button on the top right.


2. Input the endpoint name and description then click Create button

![New endpoint](\img\docs\getting-started\1\02-new-endpoint.png)


3. You will see endpoint on the endpoint list

![Endpoint list](\img\docs\getting-started\1\03-endpoint-list1.png)


4. Setup endpoint by add 2 paramers

| Name | Type |
|----------|--------|
| `action` | number |
| `message`| string |

![Endpoint Params](\img\docs\getting-started\1\04-endpoint-params2.png)
Click save to finish the changes.


5. Let's write some code. Click on Open in Code Editor link.

![Open Code editor](\img\docs\getting-started\1\05-open-in-code-editor.png)

It will bring you the Code Editor tab and open a folder linked to the endpoint.

![Endpoint Code editor](\img\docs\getting-started\1\06-endpoint-code-editor-fresh.png)


6. Edit the file to following code

```typescript
import { Request, Response } from "gamedrive";

export default async function (request: Request, response: Response) {
  try {
    const action = request.args.action;
    if (action == 1) {
      const resultObject = {
        incomingMessage: request.args.message,
        fromPlayerId: request.playerId,
      };
      response.send(resultObject);
    } else if (action == 0) {
      response.sendError({
        code: "ERROR_BY_ACTION",
        message: request.args.message,
      });
    } else {
      throw "don'tknow how to handle action :" + action;
    }
  } catch (error) {
    response.sendError(error);
  }
}
```

Save by using shortkey Crtl + S or Choose top menu File->Save

![Save code editor](\img\docs\getting-started\1\07-endpoint-code-editor-edit-and-save.png)

Our endpoint logic is now ready to be tested. Since endpoints are for your game players to call. We need a player id to send test request.


7. Go to Players menu on sidebar

![Save code editor](\img\docs\getting-started\1\08-player-page2.png)
Press the Query button and you will see test player data appear.

**Copy the \_id field of the player** to use on next step


8. Go back to the endpoint page.
We will test the endpoint by using test section.

Paste the player id to test Request as ... field.
input 1 to action field.
input "hello from a player" to message field

| Name         | Value               |
| ------------ | ------------------- |
| `action`     | 1                   |
| `message`    | hello from a player |
| `Request as` | [copied player id from step 7.]  |

![Input test fields](\img\docs\getting-started\1\09-input-test-fields.png)


9. After input all required data, press the Request button

![Response data](\img\docs\getting-started\1\10-endpoint-request-result.png)
You will see the response made from your game logic


10. Now let change the action field to 0 or other value you will get error response from the endpoint

![Response error](\img\docs\getting-started\1\11-endpoint-request-result-error.png)
