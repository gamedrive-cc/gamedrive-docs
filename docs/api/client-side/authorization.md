---
sidebar_position: 3
---

# Authorization

After logged in, client will receive 2 type of tokens. Both them will save as persistent data. 

## Refresh Token

This token has 3 days of lifetime

## Access Token

This token has 6 hours of lifetime

## VerifyRefreshToken

```js title=""
Authorization.VerifyRefreshToken()
```

This method will verify current refresh token. If success, new refresh token and new access token will be sent to client. You can use this method to instead of do login again.

## Logout

When call `Authentication.Logout()`, both tokens will be set to `null`
