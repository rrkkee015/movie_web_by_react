# movie_web_by_react
```javascript
npx create-react-app movie_app
```

React JS Fundamentals Course

- 2개의 서버
  - Local => 본인 컴퓨터
  - 192... => wi-fi 공유기 (노트북으로 서버 돌리고 휴대폰 확인 사용 가능)

- react는 우리가 쓰는 모든 요소를 생성한다. 이를 증명하는 방법은 `public/index.html`에 `<div id='root'>` 태그 안엔 아무것도 없다.
  - JS에서 만들고 밀어넣는 역할을 react를 하는 것
  - 이게 react가 빠른 이유다. 소스코드에 처음부터 HTML을 넣지 않고, HTML에 컴포넌트에 작성한 HTML을 추가하거나 제거하는 법을 알고 있다.
  - 또한 virtual dom을 사용하기 때문에 빠른 것이다.

- react application은 한 번에 하나의 component만 rendering할 수 있다.
  - 그 말은 즉슨 모든 component가 App 안에 들어가야한다는 뜻