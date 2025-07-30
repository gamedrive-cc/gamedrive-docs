---
sidebar_position: 2
---

# Authentication

## LoginWithDevice

```csharp title="LoginWithDevice"
Authentication.LoginWithDevice((LoggedInPlayer loggedInPlayer) =>
    {
        callbackSuccess.Invoke();
    }, (errors) =>
    {
        callbackFailed(Error.New(errors));
    });
```

This function will automatic create device identifier and send it to Game Drive server to login.
You need to pass a callback function as parameter.

## LoginWithFacebook

```js title=""
Authentication.LoginWithFacebook()
```
`name` and `profilePictureUrl` of the facebook account will be set to player

## LoginWithGoogle

```js title="module: sendVirtualGoods"
Authentication.LoginWithGoogle()
```
`name` and `profilePictureUrl` of the google account will be set to player

## Logout

Logout players

```js title=""
Authentication.Logout()
```

## Authentication's mechanism

player accounts can have many device identifiers stored as an array.

`LoginWithDevice()` using **device1** : create new **player1**, insert **device1** to `player1.devices`.

`LoginWithDevice()` using **device1** : return **player1**.

`LoginWithFacebook()` using **device1** : the facebook id will be set to `player1.socialAccounts.facebookId`.

`LoginWithGoogle()` using **device1** : **device1** will be removed from `player1.devices`, create new **player2**, insert **device1** to `player2.devices` and set the google id to `player2.socialAccounts.googleId`

`LoginWithDevice()` using **device1** : return **player2**.

`LoginWithFacebook()` using **device1** with same facebook account : **device1** will be removed from `player2.devices`, insert **device1** to `player1.devices`

`LoginWithDevice()` using **device1** : return **player1**.

## Set your own device identifier

 You can use your own device identifier by use following method.

```js title=""
DeviceManager.Instance().SetDevice()
```
