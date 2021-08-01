# WebSocket 을 활용한 실시간 캐치마인드 게임 만들기

## 1. 실행방법
모듈을 설치하고 서버를 실행한다.
```javascript
npm install
npm run dev:server
```

서로 다른 두 브라우저에서 서버(localhost:4000) 에 접속하고 이름을 입력해 입장한다.

![guess-mine-1](https://user-images.githubusercontent.com/13375810/127777214-a5b7da61-80a3-49c8-8a5f-4ab03377f6b5.png)


## 2. 사용법
- 입장한 사람 중 한 명이 painter 가 되고 안내된 주제어에 맞는 그림을 그린다.
- 그림은 모든 사용자들에게 공유된다.
- 채팅창에 주제어를 맞추면 맞춘 사용자의 점수가 올라간다.
- 시간이 초과하거나 정답을 맞춘 경우 다른 사용자가 painter 가 되고 게임이 다시 진행된다.

![Hnet-image (2)](https://user-images.githubusercontent.com/13375810/127777289-79551656-2381-4d91-92ca-d74d554bd408.gif)