---
sidebar_position: 0
title: gamedrive-engine
---

## module: gamedrive-engine

```typescript title="gamedrive-engine"
type Constructor<T> = new (...args: any[]) => T;

declare class Instance {
  getInstanceId(): number
}

export declare class Node extends Instance {
  static findOneByTag(tag: string): Node
  static findAllByTag(tag: string): Node[]

  public readonly children: Node[]
  get parent(): Node
  set parent(node: Node)
  public readonly activeSelf: boolean
  public readonly activeInHierarchy: boolean

  name: string
  tag: string
  setActive(active: boolean) : void
  setParent(parent: Node): void
  addComponent<T extends Component>(componentType: Constructor<T>): T
  getComponent<T extends Component>(componentType: Constructor<T>): T

  getAllComponents(): Component[]
  getComponents<T extends Component>(componentType: Constructor<T>): T[]

  //events
  on(eventName: string, listener, bind = null): void
  off(eventName: string, listener) : void
  emit(eventName: string, ...args): boolean
  emitUpwards(eventName: string, ...args): void
  emitDownwards(eventName: string, ...args) : void
}

//inter Delay
export declare class Component extends Instance {

  enabled : boolean

  public readonly node: Node

  awake(): void

  onEnable(): void

  start(): void

  update(delta: number) : void

  onDisable() : void

  onDestory() : void

  /** delay will work only when the Component is enabled */
  delay(callback, second: number): any
  stopDelay(delayCallback: any)
}

export function destroy(object: Node | Component)
export function isDestroyed (object: Node | Component): boolean
```
