---
sidebar_position: 2
title: gamedrive-room
---
# members
  - [onCreate()](#onCreate)
  - [onJoin()](#onJoin)
  - [onMessage()](#onMessage)
  - [onLeave()](#onLeave)
  - [onDispose()](#onDispose)
  - [broadcast()](#broadcast)
  - [onCreateEvent](#onCreateEvent)
  - [onJoinEvent](#onJoinEvent)
  - [onMessageEmitter](#onMessageEmitter)
  - [onDisconnectEvent(client)](#onDisconnectEvent)
  - [onReconnectEvent(client)](#onReconnectEvent)
  - [clients](#clients)
  - [clientManager](#clientManager)
  - [setMaxClients()](#setMaxClients)
  - [lock()](#lock)
  - [unlock()](#unlock)
  - [setAllowReconnect ()](#setAllowReconnect)
     true, false
  - [rejectReconnect(sessionId)](#rejectReconnect)
  - [setPassword()](#setPassword)
  - [setMetadata()](#setPassword)
    if set password not null or empty, room will be also set to private. 
    if set password to null or empty, room will be set to not private
  - [state](#state)
  - [schemaManager](#schemaManager)

  onLeave = onLeave(client, consennted = true)
  onDisconnect will equal onLeave(client, consennted = true)
  onReconnect(client)

  if setAllowReconnect = true, need to rejectReconnect() to force leave the connection 

  if leave ready disconnected client, it will throw exception

  if set setAllowReconnect back to false , it will reject all disconnected clients

  when onDispose() is call, update() will stop working.