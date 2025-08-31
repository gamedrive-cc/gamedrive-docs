---
sidebar_position: 8
title: Connect Custom WebSocket Room via Unity Engine
slug: /getting-started/connect-custom-websocket-room-via-unity-engine
---

## What is GameDrive's Room?

GameDrive's room built on top of [Colyseus 0.14.23](https://www.npmjs.com/package/colyseus/v/0.14.23). It's coming with Nodes and Components based game engine which allow you to use fimilar game client coding style to fully control the room states and events on backend. Also, you can call Custom Data, Virtual Goods and other gamedrive module apis inside the room cycle.

## How to create a Room?

1. Go to Rooms menu on sidebar and click on New Room button on top righ

![Room list](\img\docs\getting-started\8\01-go-to-room-list.png)

2. Input room name and click Create button

![New Room](\img\docs\getting-started\8\02-new-room.png)

3. Input room name and click Create button

![New Room Exist](\img\docs\getting-started\8\03-new-room-created-list.png)

## How to define the room's state?

Room's state is an object that will be sync to all clients connecting to the room. GameDrive's room state use .json file to define schema of room state. Tt base on [Colyseus's room](https://0-14-x.docs.colyseus.io/colyseus/server/room/#setstate-object) state definitions.

1. Go to the Room Detail page of the created room and click on Open in Code Editor link.

![Room Detail](\img\docs\getting-started\8\04-room-created-page.png)

It will bring you to Code Editor of the room.

![Room Code Editor](\img\docs\getting-started\8\05-room-code-editor.png)

2. Open up `rooms/cool-game-room/schemas/DefaultMainState.json` file and you will see the MainState schema definition contain default schema like this.

![DefaultMainState on Code Editor](\img\docs\getting-started\8\06-room-schema-json-main-state.png)

```json
{
  "name": "MainState",
  "fields": [
    {
      "name": "defaultField",
      "type": "string"
    }
  ]
}
```

Edit the `rooms/cool-game-room/schemas/DefaultMainState.json` content to this

```json
{
  "name": "MainState",
  "fields": [
    {
      "name": "timer",
      "type": "float32"
    },
    {
      "name": "players",
      "type": "Player",
      "collection": "ArraySchema"
    },
    {
      "name": "itemMap",
      "type": "Item",
      "collection": "MapSchema"
    }
  ]
}
```

And create 2 more schema files

Create `rooms/cool-game-room/schemas/Player.json` content to this

```json
{
  "name": "Player",
  "fields": [
    {
      "name": "id",
      "type": "string"
    },
    {
      "name": "name",
      "type": "string"
    },
    {
      "name": "positionX",
      "type": "int8"
    },
    {
      "name": "positionY",
      "type": "int8"
    },
    {
      "name": "connected",
      "type": "boolean",
      "default": true
    }
  ]
}
```

Create `rooms/cool-game-room/schemas/Item.json` content to this

```json
{
  "name": "Item",
  "fields": [
    {
      "name": "name",
      "type": "string"
    },
    {
      "name": "level",
      "type": "uint8"
    }
  ]
}
```

The result should look like this

![States on Code Editor](\img\docs\getting-started\8\06-2-room-schema-json-main-state.png)

As you can see, the MainState contains 3 fields.

- timer, as a float
- players as an array
- items as a map

Now schema of the room is ready to use.

## Generate C# state's schema classes to use in Unity's sdk

On previous step, we defined 3 schema files. We will convert those schema into C# schema classes.

Go to cool-game-room detail page.

![ROom detail generate schema](\img\docs\getting-started\8\09-generate-room-schema-class.png)

Then click on 'Generate' Button.

After finish load it will show 'Open In Code Editor' link. Click on it and it will bring you to the C# scripts result

![Generate Schema result](\img\docs\getting-started\8\09-generate-room-schema-class-result.png)

Now we have C# schema classes to use on Unity engine sdk on next steps.

## How to handle room events and state?

Handling events and state of rooms is complicated and hard show the components file by file here. So let's use GameDrive's import feature to import the pre-made project that contain the handling logic.

### Download sample exported project.json file

<a href="\files\getting-started\8\project-68a045fbde13c2fd71aa8f5f-export-file.json" download>📥 Download </a>

### Import the file to the existing project.

Go to Tools tab in sidebar menu

![To go tools import](\img\docs\getting-started\8\07-go-to-tools-import.png)

Click on Choose file button, select the file then click Import button.

### Check the imported rooms components.

![Check room components](\img\docs\getting-started\8\08-check-the-room-components.png)

It contains following systems

- chat
- connection
- items
- message
- players
- state

To start explore the components, start with `rooms/cool-game-room/main.ts` file. This file is the entrypoint of the room which will load other manager components.

### Create new snapshot

After imported, it's good to create new snapshot to avoid losing changes. And if you want to test the room on LIVE stage in next topic, do not forget to ppublish the snapshot to live.

## How to connect to the room via Unity Engine?

### Install GameDrive's Unity SDK.

Check [previous topic](/getting-started/connect-to-gamedrive-from-unity-engine#how-to-install-gamedrives-unity-sdk) to see how.

### Open room sameple scene.

Open scene at `Assets/Scenes/GameDriveSampleRoomScene`. This scene allow us to use 3 clients to create room, join the room, sync the same state object msend and receive message to each other.

At first, check the file `Assets/Domains/Room/Clients/MainState.cs`. This file contain generated classes from [generate C# state classes](/getting-started/connect-custom-websocket-room-via-unity-engine#generate-c-state-classes-to-use-in-unitys-sdk).

### Login and Join room.

Press Play to run the scene. we will see welcome UI. Press 'Start 3 Clients Room' button and it switch to Client Console ui.
![Welcome UI](\img\docs\getting-started\8\10-01-play-room-welcome.png)

Press 'Login' button for Client1.
![Client 1 login](\img\docs\getting-started\8\10-02-client1.png)

then press 'Join Or Create Room' button
![Client 1 Join Room](\img\docs\getting-started\8\10-03-client1-login.png)

Here is C# code example to join or create a room

```csharp title="Join Or Create Room Example"
var roomClient = new RoomClient<MainState>("cool-game-room", Client);

//define room options
var options = new Dictionary<string, object>();
roomClient.JoinOrCreate(options, (colyseusRoom) =>
{
    //hadle join room success
}, (error) =>
{
  //handle error
});
```

Then we will see the state of room showing up.
![Client 1 See state](\img\docs\getting-started\8\10-04-client1-join-room.png)

Switch to Client2 by top right dropdown.

Then press 'Login' button then press 'Join Or Create Room' button. We will see the state section panel having 2 players on both Client1 and Client2 ui console.
![State 2 player](\img\docs\getting-started\8\10-05-client2-join-room.png)

We can do login and join room for the Client3 aswell but in this page we will use only 2 clients.

This is how we handle state when new client join the room on backend.

Receive on join event by this code.

```typescript title="rooms/cool-game-room/players/PlayersManager.ts"

 onJoinListener(client: Client, options: any) {
    const playerId = client.userData.playerId
    const player = this.playersStateManager.getPlayerById(playerId)
    if (!player) {
      this.playersStateManager.addNewPlayer(playerId, 0, 0, true)
    } else {
      console.error("player already exist")
    }
  }

```

Then add new player to room state by this code.

```typescript title="rooms/cool-game-room/state/PlayersStateManager.ts"

  public addNewPlayer(playerId: string, positionX: number, positionY: number, connected: boolean): PlayerSchema {
    const PlayerSchemaClass = schemaManager.getClass('Player')
    const newPlayer = new PlayerSchemaClass()
    newPlayer.id = playerId
    newPlayer.positionX = positionX;
    newPlayer.positionY = positionY;
    newPlayer.connected = connected;
    state.players.push(newPlayer)
    return newPlayer
  }

```

### Send message from cleint to manage room state.

Client2 send move message and state of player position update
![Client 2 Move](\img\docs\getting-started\8\10-06-client2-move.png)

Client2 send add item message and state of item update
![Client 2 Add Item](\img\docs\getting-started\8\10-07-client2-add-item.png)

Switch back to Client1 and we will see all state is sync to the same value of Client2's state
![Client 2 Add Item](\img\docs\getting-started\8\10-08-client1-see-changes.png)

This code show example of send message from client

```csharp title="send message from client"
  public class MovePlayerMessage
  {
      public int x;
      public int y;
  }

  public void SendMovePlayerMessage(){
    try
    {
        //Define message type
        string messageType = "MOVE_PLAYER";

        var messageObj = new MovePlayerMessage();
        messageObj.x = 2
        messageObj.y = 2
        await colyseusRoom.Send(messageType, messageObj);
    }
    catch (System.Exception err)
    {
        Debug.LogError(err.ToString());
    }
  }
```

### Send chat message between clients.

Client 1 send broadcase message to all clients
![Client 1 Send Broadcase message](\img\docs\getting-started\8\10-09-client1-bc.png)

Client 1 send direct message to client2. We use playerId of the Client2 as parameter in message body.
![Client 1 Send DB message to client2](\img\docs\getting-started\8\10-10-client1-dm.png)

Client2 will receive all messages from Cleint1
![Client 2 receive message](\img\docs\getting-started\8\10-11-client2-see-messages.png)

This code show how to handle message from backend side.

How to receive and send Broadcast messages

```typescript title="rooms/cool-game-room/chat/BroadcastManager.ts"
export class BroadcastManager extends Component {
  onEnable() {
    onMessageEmitter.on(MESSAGE_CHAT_BC, this.receiveMessage, this);
  }

  onDisable() {
    onMessageEmitter.off(MESSAGE_CHAT_BC, this.receiveMessage);
  }

  private receiveMessage(client: Client, message: string) {
    this.sendBroadcase(client.userData.playerId, message);
  }

  private sendBroadcase(fromPlayerId: string, message: string) {
    const messageObj: MessageObj = {
      fromPlayerId: fromPlayerId,
      message: message,
    };
    broadcast(MESSAGE_CHAT_BC, messageObj);
  }
}
```

How to receive and send DM message

```typescript title="rooms/cool-game-room/chat/DirectMessageManager.ts"
type ChatDM = {
  toPlayerId: string;
  message: string;
};
export class DirectMessageManager extends Component {
  onEnable() {
    onMessageEmitter.on(MESSAGE_CHAT_DM, this.receiveMessage, this);
  }

  onDisable() {
    onMessageEmitter.off(MESSAGE_CHAT_DM, this.receiveMessage);
  }

  private receiveMessage(client: Client, message: ChatDM) {
    this.sendMessageTo(
      client.userData.playerId,
      message.toPlayerId,
      message.message
    );
  }

  private sendMessageTo(
    fromPlayerId: string,
    toPlayerId: string,
    message: string
  ) {
    const client = clientManager.getClientByPlayerId(toPlayerId);
    if (!client) {
      return;
    }
    const messageObj: MessageObj = {
      fromPlayerId: fromPlayerId,
      message: message,
    };
    client.send(MESSAGE_CHAT_DM, messageObj);
  }
}
```

### Disconnect, reconnect and leave room.

Press 'Disconnect' button on Client2 and switch to see Client1, you will see connected value of player2 = False
![Client1 see client2 disconnected](\img\docs\getting-started\8\10-12-client1-see-client2-connection.png)

But if press 'Leave' button on Client2, Client1 will not see state of Player2 in the player array anymore
![Client1 see client2 leave](\img\docs\getting-started\8\10-13-client1-see-client2-leave.png)
