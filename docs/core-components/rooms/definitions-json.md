---
sidebar_position: 2
title: Room's definitions.json
---

## What is definitions.json?

We can create definitions.json in side rooms folder for example /rooms/myRoom/definitions.json. This file store defintion options of the room.
This definitions are based on [Colyseus's room definition options](https://0-14-x.docs.colyseus.io/colyseus/server/api/#room-definition-options)

Here is example of definitions.json

```json title="definitions.json"
{
  "filterBy": ["mode"],
  "sortBy": { "clients": -1 }
}
```

### Using options when join room on game client api example

```csharp
var options = new Dictionary<string, object>();
options["mode"] = "duo";
roomClient.JoinOrCreate(options, (colyseusRoom) =>
{
    //hadle join room success
}, (error) =>
{
  //handle error
});
```
