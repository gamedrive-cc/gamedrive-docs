---
sidebar_position: 1
title: "module.json"
---

## What is Action

Actions are similar to endpoints, but they don't require a playerId parameter in the request object. This is because actions can be invoked by the project owner, not just players, and possibly through the web console. We can use actions to perform operations on game data, such as removing game data or setting up game events by season.

### Good to know about Actions

- When invoke actions, it will enable all modules in [module.json](/in-depth/module.json).
- Have longer execute timeout duration than endpoints.
