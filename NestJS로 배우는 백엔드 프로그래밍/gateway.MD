# Gateways

- 게이트웨이는 @WebSocketGateway()데코레이터로 주석이 달린 클래스
- 게이트웨이는 기본적으로 socket.io 패키지를 사용하지만 기본 웹 소켓 구현을 포함하여 광범위한 다른 라이브러리와의 호환성을 제공

warning, 주의 할 점

> - 게이트웨이는 단순한 공급자와 동일하게 작동하므로 생성자를 통해 손쉽게 종속성을 주입 가능

- 또한 게이트웨이는 다른 클래스 (공급자 및 컨트롤러)에 의해 주입 될 수도 있음

#### Installation

- 먼저 필요한 패키지를 설치

```js
@@filename()
$ npm i --save @nestjs/websockets @nestjs/platform-socket.io
$ npm i --save-dev @types/socket.io
@@switch
$ npm i --save @nestjs/websockets @nestjs/platform-socket.io
```
