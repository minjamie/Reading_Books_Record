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

#### Overview

- 일반적으로 앱이 웹 응용 프로그램이 아니거나 수동으로 포트를 변경하지 않은 경우 각 게이트웨이는 HTTP 서버가 실행되는 것과 동일한 포트를 수신
- @WebSocketGateway(80)데코레이터에 인수를 전달하여 이 동작을 변경, 여기서 80은 선택된 포트 번호
- 또한 다음 구성으로 이 게이트웨이에서 사용하는 namespace를 설정 가능

```js
@WebSocketGateway(80, { namespace: 'events' })
```
