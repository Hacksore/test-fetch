# cloudflare worker redirect bug

1. `npm i`
1. `npm start`
1. Run this in chrome
```
await fetch("http://localhost:8000", {
 headers: { "Authorization": "ligma" }   
})
```

Now in server 2 you will see the `Authorization` header was dropped because the origin.
