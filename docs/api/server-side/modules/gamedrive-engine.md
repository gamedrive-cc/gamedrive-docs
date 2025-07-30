---
sidebar_position: 1
title: gamedrive-engine
---
# members
  - [Node](#Node)
    - [activeSelf](#Node_activeSelf)
    - [activeInHierarchy](#Node_activeInHierarchy)
    - [parent](#Node_activeInHierarchy)
    - [setActive()](#Node_setActive)
    - [setParent()](#Node_setParent)
    - [addComponent(T)](#Node_addComponent)
    - [getComponent(T)](#Node_getComponent)
    - [getComponents(T)](#Node_getComponents)
    - [getAllComponents()](#Node_getAllComponents)
    - [on()](#Node_on)
    - [off()](#Node_off)
    - [emit()](#Node_emit)
    - [emitUpward()](#Node_emitUpward)
    - [emitDownward()](#Node_emitDownward)
  - [Component](#Component)
    - [enabled](#Component_enabled)
    - [node](#Component_node)
    - [awake()](#Component_awake)
    - [onEnable()](#Component_onEnable)
    - [onDisable()](#Component_onDisable)
    - [start()](#Component_start)
    - [update()](#Component_update)
    - [onDestory()](#Component_onDestory)
    - [delay()](#Component_delay)
    - [stopDelay()](#Component_stopDelay)
  - [destroy()](#destroy)
  - [isDestroyed()](#isDestroyed)

## Node
### activeSelf{#Node_activeSelf}
#### return
  - boolean
### activeInHierarchy{#Node_activeInHierarchy}
#### return
  - boolean
### parent{#Node_activeInHierarchy}
#### parameters
  - parent : Node
#### return
  - Node
### setActive(){#Node_setActive}
#### parameters
  - active : boolean
  
### setParent(){#Node_setParent}
#### parameters
  - parent : Node
  
### addComponent(){#Node_addComponent}
#### parameters
  - componentClass : T, T extends Component
#### return
  - T, T extends Component
  
### getComponent(){#Node_getComponent}
#### parameters
  - componentClass : T, T extends Component
#### return
  - T, T extends Component
  
### getComponents(){#Node_getComponents}
#### parameters
  - componentClass : T, T extends Component
#### return
  - T[], T extends Component
### getAllComponents(){#Node_getAllComponents}
#### return
  - Component[]
### on(){#Node_on}
### off(){#Node_off}
### emit(){#Node_emit}
### emitUpward(){#Node_emitUpward}
### emitDownward(){#Node_emitDownward}

## Component
### enabled{#Component_enabled}
### node{#Component_node}
### awake(){#Component_awake}
### onEnable(){#Component_onEnable}
### onDisable(){#Component_onDisable}
### start(){#Component_start}
### update(){#Component_update}
### onDestory(){#Component_onDestory}
### delay(){#Component_delay}
### stopDelay(){#Component_stopDelay}
  
## destroy(){#destroy}
## isDestroyed(){#isDestroyed}

