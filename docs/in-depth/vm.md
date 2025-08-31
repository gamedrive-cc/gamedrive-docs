
# VM
## Limitation

When call endpoints, a vm will be created inside nodejs. It will throw timeout error if you script run more than 10 seconds. And it will throw error if the vm allocate momoery more than 20MB.