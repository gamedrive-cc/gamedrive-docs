---
sidebar_position: 2
title: "Create CustomData"
---

# Create a Custom Data

Create a Custom Data via Game Drive Console by select **Custom Data** -> **New Custom Data**

## Schema

Create CustomData's schema by follow mongoose's schema but convert to json string. For example

```js title="schema : playerStatus"
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
  },
  "currentDate":{
    "type": "Date",
    "default": "Date.now"
  }
}
```

If set default value as string "Date.now", it will be converted to function Date.now

Avaliable field types

<!-- ```js title="availableTypes"
{
{
  "array": Array,
  "buffer": Buffer,
  "boolean": Boolean,
  "date": Date,
  "mixed": mongoose.Schema.Types.Mixed,
  "number": Number,
  "objectid": mongoose.Types.ObjectId,
  "string": String
}
}

also can assign custom array by ["customData"] -->

```

## SchemaOptions

Schema's default options you can NOT change
{
autoIndex: false,
versionKey: false
}

Schema's default options you can change
{
timestamps?: boolean | SchemaTimestampsConfig;
minimize?: boolean
\_id?: boolean
}

## Indexes

If you updated indexes, you need to do sync indexes manually on the web console.

## Require other customData

- Can reference other customSchema to use as Subdocument
- Can not have circular require
- indexes will work only the customData that being called.
- schemaOptions working
- we can use schemaOptions { \_id : false} on Subdocument to tell mongoose to not create \_id field on the document

## extends

You need to add child Custom Data to requires before extends

definitions, indexes and options will merge with child CustomData. If same keys exist, child keys will replace parent keys.

if you want to ignore parent indexes and use only child indexes, you can set inheritOptions.overrideIndexes = true

{
"definitions": {
"dicesResult": {
"type": "ShakeRecord.DiceResult"
},
"shakeSettings": {
"type": "ShakeRecord.ShakeSettingsData"
}
},
"options": {
"timestamps": true
},
"indexes": [
{
"fields": {
"createdAt": 1
},
"options": {
"expireAfterSeconds": 60
}
}
]
}

option for only createdField
"options": {
"timestamps": {
"createdAt": true
}
},

set nested object as index
"fields": {
"nestedObject": {
"field1":1
}
}
