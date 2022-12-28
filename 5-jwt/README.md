## Big picture

https://jwt.io/introduction
![image](https://user-images.githubusercontent.com/102004753/209736895-53ba503e-abcf-4603-950e-fe2fba45dc6d.png)

### two types of routes

- public: accessible by anyone
- restricted: accessible with only correct signed JWT

HTTP is stateless

- server does not remember any previous request sent by the same client
- hence client must provide same token for every request

### http-status-code library

https://www.npmjs.com/package/http-status-codes
![image](https://user-images.githubusercontent.com/102004753/209755745-9e0bedc3-dcb5-40df-a071-ee97a9cbcf23.png)
