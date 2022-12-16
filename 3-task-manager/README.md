# task-manager

## REST API

https://meetup.toast.com/posts/92

REST API 설계 시 가장 중요한 항목은 다음의 2가지로 요약할 수 있습니다.

첫 번째, URI는 정보의 자원을 표현해야 한다. (resources)
두 번째, 자원에 대한 행위는 HTTP Method(GET, POST, PUT, DELETE)로 표현한다. (verbs)

```md
GET /members/show/1 (x);
GET /members/1 (o);
```

```md
GET /members/insert/2 (x) - GET 메서드는 리소스 생성에 맞지 않습니다.
POST /members/2 (o)
```

## MongoDB

https://www.mongodb.com/docs/atlas/getting-started/

- noSQL, non relational DB
- store JSON
- easy to get started
- free cloud hosting - ATLAS

## ENV VARS
