## Schema.JSON file
all json file under path /rooms/[roomName]/schemas/ and all subdirectories will be load and convert to schema

### Schema Example
<!-- {
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
 -->
