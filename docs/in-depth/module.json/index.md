---
sidebar_position: 1
title: "module.json"
---

## What is module.json?

You can create module.json to enable additional modules or disable not use modules. Allowing more modules will increate load time when start up the vm.

place module.json in the root directory of inside a room folder to override the root module.json so you can control which modules can use in side the realtime room

Here is default module.json

```json
{
  "gamedrive": {
    "customData": true,
    "virtualGood": true,
    "player": true,
    "room": false,
    "dns": false,
    "iap": {
      "google": false
    },
    "webRequest": false
  }
}
```

## How to use module.json?

Create in root directory

Create inside each room

## Good to know
module.json will not works when call action