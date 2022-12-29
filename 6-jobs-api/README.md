#### Setup

```bash
npm install && npm start
```

#### Database Connection

1. Import connect.js
2. Invoke in start()
3. Setup .env in the root
4. Add MONGO_URI with correct value

#### Routers

- auth.js
- jobs.js

#### User Model

Email Validation Regex

```regex
/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
```

#### Register User

- Validate - name, email, password - with Mongoose
- Hash Password (with bcryptjs)
- Save User
- Generate Token
- Send Response with Token

#### Login User

- Validate - email, password - in controller
- If email or password is missing, throw BadRequestError
- Find User
- Compare Passwords
- If no user or password does not match, throw UnauthenticatedError
- If correct, generate Token
- Send Response with Token

#### Mongoose Errors

- Validation Errors
- Duplicate (Email)
- Cast Error

#### Security

- helmet
  => By setting various security-related HTTP headers, such as Content-Security-Policy, X-Frame-Options, and X-XSS-Protection., you can help protect your web application from common attacks such as cross-site scripting (XSS), clickjacking, and content injection.
- cors
  => if you dont have cors, you will only be able to access api from the same domain
- xss-clean
  => XSS-clean (cross-site scripting clean) is a security measure that is used to prevent cross-site scripting (XSS) attacks. XSS attacks involve injecting malicious JavaScript code into a web page, which can be executed by the browser of anyone who views the page.
- express-rate-limit
  => used to limit the number of requests that a client can make to an Express.js-based web application. It is designed to help protect your server from being overwhelmed by excessive requests,

Swagger UI

```yaml
/jobs/{id}:
  parameters:
    - in: path
      name: id
      schema:
        type: string
      required: true
      description: the job id
```
