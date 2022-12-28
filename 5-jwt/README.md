## Big picture

https://jwt.io/introduction
![image](https://user-images.githubusercontent.com/102004753/209736895-53ba503e-abcf-4603-950e-fe2fba45dc6d.png)

### two types of routes

- public: accessible by anyone
- restricted: accessible with only correct signed JWT

HTTP is stateless

- server does not remember any previous request sent by the same client
- hence client must provide same token for every request
