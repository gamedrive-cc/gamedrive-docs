---
sidebar_position: 2
title: "Custom Data in details"
---

## How to create and use basic Custom Data?

Check this [Custom Data getting started](/getting-started/storing-data-via-custom-data)

## Custom Data's Schema

Custom Data's schema is based on [mongoose 6.1.3](https://mongoosejs.com/docs/guide.html)'s schema but convert way define it from javascript to json string. It design to have feature rich, reuseable and extensible.

Schema Features

- define fields
- define options
- define indexes
- extends other custom data and inherit index

### Basic schema

Define Custom Data name 'contact'. The schema contain 2 fields and one option

```js title="Custom Data : contact"
{
    "definitions": {
        "email": {
            "type": "objectId"
        },
        "phoneNumber": {
            "type": "number"
        }
    },
    "options": {
        "_id": false
    },
    "indexes": [],
    "extends": "",
    "inheritOptions": {}
}

```

New Custom Data name 'player' that using 'contact' as field type

```js title="Custom Data : player"
{
    "definitions": {
        "playerId": {
            "type": "objectId",
            "unique": true
        },
        "zone": {
            "type": "string"
        },
        "health": {
            "type": "number",
            "default": 50
        },
        "mana": {
            "type": "number",
            "default": 50
        },
        "contact":{
            "type": "contact"
        },
        "contactArray":{
            "type": ["contact"]
        }
    },
    "options": {
        "timestamps": {
            "createdAt": true,
            "updatedAt": false
        }
    },
    "indexes": [
        {
        "fields": {
            "zone": 1,
            "contact": {
                "email": 1
            }
        }
        }
    ],
    "extends": "",
    "inheritOptions": {}
}
```

It's posible to use other Custom Data as field's type and allow to assign as array for example

```js
//Single
{
    "type":"contact"
}
// Array
{
    "type":["contact"]
}
```

To use custom data type, in Custom Data detail page we need to add Custom Data 'contact' to requires field of Custom Data 'player'
![Add Requires Custom Data](\img\docs\core-components\custom-data\01-add-other-custom-data-to-require-field.png)

In Custom Data 'contact' we do
- have option `"_id": false` this will prevent auto creation of field \_id of the 'contact' type inside 'player'

In Custom Data 'player' we do

- set default value for health and mana fields
- use type 'contact' as fields
- set playerId as unique index key
- add timestamps option to create createdAt field but not updatedAt field 
```js
"options": {
    "timestamps": {
        "createdAt": true,
        "updatedAt": false
    }
}
```

For the timestamps option, if we want both createdAt and udpatedAt field, we can use
```js
"options": {
    "timestamps": true
}
```

### Indexing schema

#### Why we need to index field?
To get infomation, go to [Mongodb Index](https://www.mongodb.com/docs/manual/indexes/)

#### Compound indexes

It possible to make 2 fields as a compound index with unique constraint by

```js
"indexes": [
    {
        "fields": {
            "createdAt": 1
        }
    },
    {
        "fields": {
            "zone": 1,
            "contact": {
                "email": 1
            }
        },
        "options": {
            "unique": true
        }
    },
]
```

This will make player.playerId and player.contact.email as an unique key

#### Expires index

It also posible to make player document expires after created 60 seconds by this index

```js
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
```

### Extends schema

We will create another Custom Data name 'playerUpper' that will extends CUstom Data 'player'.

```js title="Custom Data : playerUpper"
{
    "definitions": {
        "playerUpperId":{
            "type": "objectId",
            "unique":true
        },
        "upperType": {
            "type": "string"
        },
        "upperNumber": {
            "type": "number"
        },
        "createdAt2":{
            "type": "Date",
            "default": "Date.now"
        }
    },
    "options": {},
    "indexes": [],
    "extends": "player",
    "inheritOptions": {
        "overrideIndexes": true
    }
}

```

It need to add Custom Data 'player' to the field requires of 'playerUpper' before usinag extends.

What Custom Data 'playerUpper' will have?

- all fields from 'player' and the new 4 fields.
- playerUpperId as an quniue index
- playerId as an index from extending 'player'
- NOT have 'zone' and 'contact.email' as an unique index. Since set inheritOptions.overrideIndexes = true, this flag will override indexes field of the base Custom Data

### Additional

#### Supported field types

```js
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

```

#### Schema's Options
- If set default value as string "Date.now", it will be converted to function Date.now
