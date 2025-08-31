---
sidebar_position: 0
title: gamedrive-engine
---

## module: gamedrive-room

```typescript title="gamerive-room"
interface Client {
  sessionId: string
  userData:{
    playerId: string
  }
  send(type : number | string, message : any) : void
  leave(code?: number): void
  error(code: number, message: any): void
}

export const state: any
export const schemaManager = {
  getClass(className: string) : any
}

export function onCreate(callback: (options: any) => void): void
export const onCreateEvent = {
  addListener(callback: (options : any) => void, bind): void
  removeListener(callback: (options : any) => void) : void
}

export function onMessage(type: string | number, callback: (client: Client, message: any) => void) : void
export const onMessageEmitter = {
  on(type: string | number, callback: (client: Client, message: any) => void, bind): void
  off(type: string | number, callback: (client: Client, message: any) => void) : void
}

export function onJoin(callback: (client: Client: options : any) => void): void

export const onJoinEvent: {
  addListener(callback: (client: Client, options : any) => void, bind): void
  removeListener(callback: (client: Client, options : any) => void) : void
}

export function onLeave(callback: (client: Client) => Promise<void> | void): void
export const onLeaveEvent: {
  addListener(callback: (client: Client) => void, bind): void
  removeListener(callback: (client: Client) => void) : void
}

export function onDispose(callback: () => Promise<void>): void

export const onDisconnectEvent: {
  addListener(callback: (client: Client) => void, bind): void
  removeListener(callback: (client: Client) => void) : void
}

export const onReconnectEvent: {
  addListener(callback: (client: Client) => void, bind): void
  removeListener(callback: (client: Client) => void) : void
}

interface BroadcastOptions = {
  except: Client
  afterNextPatch: bool
}

export declare function broadcast(type: string | number, message: any, options : BroadcastOptions = null): void

export declare const clients: Client[]
export declare const clientManager = {
  getClientByPlayerId(playerId: string) : Client
  getClientBySessionId(sessionId : string) : Client
  getClients(): Client[]
}

export declare function setMaxClients(maxClient: number) : void
export declare function lock() : void
export declare function unlock() : void
export declare function setAllowReconnect(allow: boolean): void
export declare function rejectReconnect(sessionId: string): void
export declare function setPassword(password: string): void
export declare function setMetadata(metadata: any): void
```
