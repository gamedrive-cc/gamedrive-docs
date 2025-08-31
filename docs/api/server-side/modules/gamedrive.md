---
sidebar_position: 0
title: gamedrive
---

## module: gamedrive
```typescript title="gamedrive"
export declare interface Request {
  args: any,
  playerId: string,
  query: any,
  body: any,
  ip: string,
}

export declare interface ActionRequest {
  args: any,
  userId: string,
}

export declare interface Response {
  send(data: any): void,
  sendError(data: any): void,
  sendError(code: string, message: string),
  setStatusCode(statusCode: number),
}

//VirtualGood
declare type PlayerValue = {
  playerId: string
  value: number
}

declare type PlayerRank = {
  playerId: string
  rank: number
  value: number
}

declare type VirtualGoodResult = {
  name: string
  value: number
}

declare interface VirtualGood {
  getValue(name: string, playerId: string): Promise<VirtualGoodResult>
  setValue(name: string, playerId: string, value: number): Promise<VirtualGoodResult>;
  addValue(name: string, playerId: string, value: number): Promise<VirtualGoodResult>;
  getPlayerRank(name: string, playerId: string, sort: number = -1): Promise<PlayerRank>
  findTopRankPlayers(name: string, limit: number, skip: number, sort: number = -1): Promise<PlayerValue[]>
}

export const virtualGood: VirtualGood = {}

declare interface MongooseUpdateResult {
  matchedCount: number
  modifiedCount: number
  acknowledged: boolean
  upsertedId: number
  upsertedCount: number
}

declare interface MongooseDeleteResult {
  deletedCount: number
}

declare interface CustomData {
  create(name: string, docs: any, options?: any): Promise<any>
  findOne(name: string, conditions: any, projection?: any, options?: any): Promise<any>
  insertMany(name: string, docs: any[], options?: any): Promise<any[]>
  updateOne(name: string, filter: any, update?: any, options?: any): Promise<MongooseUpdateResult>
  updateMany(name: string, filter: any, update: any, options?: any): Promise<MongooseUpdateResult>
  find(name: string, filter: any, projection?: any, options?: any): Promise<any[]>
  findOneAndUpdate(name: string, conditions: any, update: any, options?: any): Promise<any>
  findOneAndDelete(name: string, conditions: any, options?: any): Promise<any>
  findById(name: string, _id: any, projection?: any, options?: any): Promise<any>
  findByIdAndUpdate(name: string, _id: any, update: any, options?: any): Promise<any>
  findByIdAndDelete(name: string, _id: any, options?: any): Promise<any>
  countDocuments(name: string, filter?: any): Promise<number>
  estimatedDocumentCount(name: string, options?: any): Promise<number>
  deleteMany(name: string, conditions?: any, options?: any): Promise<MongooseDeleteResult>
}


export declare const customData: CustomData = {
}

export type SignedPlayer = {
  playerId: string
  updatedAt: Date
}

declare interface Authorization {
  find(conditions: any, projection?: any, options?: any): Promise<SignedPlayer[]>
}

export declare const authorization: Authorization = {
}

declare interface Player {
  _id: string,
  numberId: number,
  name: string,
  profilePictureUrl: string,
}

export declare enum Stage {
  PREVIEW = "PREVIEW",
  LIVE = "LIVE"
}

declare interface Device {
  name: string,
  guid: string,
  platform: string,
}

declare interface SocialAccounts {
  facebookUserId: string,
  googleUserId: string,
}

declare interface PlayerAccount {
  socialAccounts: SocialAccounts,
  devices: Device[]
}

export declare const stage: Stage

export declare interface PlayerTools {
  findById(playerId: string): Promise<Player>
  findByNumberId(numberId: number): Promise<Player>
  deleteById(playerId: string): Promise<Player>
  findAccountById(playerId: string): Promise<PlayerAccount>
  find(condition: any = {}, projection: any = {}, options: any = {}): Promise<Player[]>
  countDocuments(filter: any = {}): Promise<number>
}

export declare const player: PlayerTools = {}

//webRequest
export declare interface WebRequestConfig {
  url?: string;
  method?: string;
  baseURL?: string;
  headers?: Record<string, string>;
  params?: any;
  data?: any;
  timeout?: number;
  withCredentials?: boolean;
  responseType?: string;
  responseEncoding?: string;
  xsrfCookieName?: string;
  xsrfHeaderName?: string;
  maxContentLength?: number;
  maxBodyLength?: number;
  maxRedirects?: number;
}

export declare interface WebRequestResonse {
  data: any;
  status: number;
  headers: any;
  statusText: any;
}

export declare interface WebRequestResonseError {
  code: string
  message: any
  response: WebRequestResonse
}

export declare interface WebRequest {
  get(url: string, config?: WebRequestConfig): Promise<WebRequestResonse>
  delete(url: string, config?: WebRequestConfig): Promise<WebRequestResonse>
  head(url: string, config?: WebRequestConfig): Promise<WebRequestResonse>;
  options(url: string, config?: WebRequestConfig): Promise<WebRequestResonse>;
  post(url: string, data?: any, config?: WebRequestConfig): Promise<WebRequestResonse>;
  put(url: string, data?: any, config?: WebRequestConfig): Promise<WebRequestResonse>;
  patch(url: string, data?: any, config?: WebRequestConfig): Promise<WebRequestResonse>;
}

export declare const webRequest: WebRequest = {}

export declare interface RoomSession {
  roomId: string
  sessionId: string
  roomServiceAddress: string
}

export declare interface RoomInfo {
  roomId: string
  processId: string
  maxClients: number
  clients: number
  locked: boolean
  private: boolean
  name: string
  metadata: any
}

export declare const room = {
  getPlayerRoomSession: function (playerId: string, roomName: string): Promise<RoomSession> { return },
  getRoomInfo: function (roomId: string, roomServiceAddress: string): Promise<RoomInfo> { return }
}

//iap
export declare namespace IAP {
  export declare namespace Google {
    export declare interface Auth {
      serviceAccountEmail: string
      privateKey: string
    }

    export declare interface Receipt {
      packageName: string
      productId: string
      purchaseToken: string
    }

    export declare interface ProductTransactionData {
      purchaseTimeMillis: string
      purchaseState: number
      consumptionState: number
      developerPayload: string
      orderId: string
      acknowledgementState: number
      kind: string
      regionCode: string

    }
  }
}

export declare const iap = {
  google: {
    products: {
      get: async function (auth: IAP.Google.Auth, receipt: IAP.Google.Receipt): Promise<ProductTransactionData> { return },
      acknowledge: async function (auth: IAP.Google.Auth, receipt: IAP.Google.Receipt): Promise<void> { return },
    }
  }
}

export declare const dns = {
  reverse: async function (ip: string): Promise<string[]> { return },
}
```
