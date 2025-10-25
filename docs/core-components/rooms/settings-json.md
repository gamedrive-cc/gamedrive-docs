---
sidebar_position: 2
title: Room's settings.json
---

## What is settings.json?

We can create settings.json in side rooms folder for example /rooms/myRoom/settings.json. THis file store settings value of the room.

Here is default module.json

```json title="settings.json"
{
  "onUpdateDelay": 33.2
}
```

### settings meaning

- onUpdateDelay : The interval duration (in milliseconds) between consecutive calls to the update() method in the component class. Setting this to 16.6 ms results in an update rate of approximately 60 frames per second (FPS).
