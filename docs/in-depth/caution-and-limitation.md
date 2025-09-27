# Limitation and Caution

## Database

If insert or update data more than 5 MB in 5 minutes, the project will be deactived by system

## Cpu time

If run code with frequent timeout error, the project will be deactived by system.

So, please avoid run "danger code" like infinite loop.


```typescript title="danger code example"
function dangerFunction() {
  while (true) {
    console.log("danger code");
  }
}
```
