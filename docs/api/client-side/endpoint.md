---
sidebar_position: 4
---

# Endpoint

## SendRequest

Send request to endpoint "increasePlayerHealth"

```js title=""
new Endpoint("increasePlayerHealth").SendRequest(args, callbackSuccess, callbackErrors)
```


## SendRequestStatic

Send static request to endpoint "checkServerStatus"

```js title=""
new Endpoint("checkServerStatus").SendRequestStatic(args, callbackSuccess, callbackErrors)
```

When using `SendRequestStatic()`, the request will not send along with accessToken. Which mean clients can use `SendRequestStatic()` before login.
This useful when you want to do something before login e.g. check server status or check minimum requirement of client version.

## C# Unity Example

```csharp title="claimDailyRewards"
using System;

[Serializable]
public class RewardsData{
    public int chipQuantity
    public int diamondQuantity
}

new Endpoint("claimDailyRewards").SendRequest(null, (RewardsData data) =>
            {
                
            },
            (errors) =>
            {
                Debug.Log("error " + errors[0].message);
            });
```