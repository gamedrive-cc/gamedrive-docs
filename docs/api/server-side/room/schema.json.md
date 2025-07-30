{
      "name": "MainState",
      "fields": [
          {
              "name": "roomId",
              "type": "string"
          },
          {
              "name": "sessionIdPlayerIdMap",
              "type": "string",
              "collection": "MapSchema"
          },
          {
              "name": "players",
              "type": "Player",
              "collection": "ArraySchema"
          }
      ]
  }


{
    "name": "Player",
    "fields": [
        {
            "name": "name",
            "type": "string"
        },
        {
            "name": "playerId",
            "type": "string"
        },
        {
            "name": "sessionId",
            "type": "string"
        }
    ]
  }


  -- can use extends
{
    "name": "Player2",
    "extends" : "Player",
    "fields": [
        {
            "name": "name2",
            "type": "string"
        },
    ]
  }

