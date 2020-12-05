# movie_web_by_react
```shell
npx create-react-app movie_app

npm i prop-types => 내가 전달받은 props가 내가 원하는 props인지를 확인해 줌
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

- javascript map
```javascript
let arr = [1, 2, 3, 4];

array.map(item => { // function(item) {
  console.log(item); // [0, 0, 0, 0]
  return 0
})
```

- **React는 state에 직접 접근해선 안되며, setState() 메소드를 호출할 때마다, 새로운 state를 가지고 class component를 rerender()한다.**

## Life Cycle
- class component가 생성 될 때, render 전에 호출되는 몇 가지 function이 있다. 물론 render 된 후, 호출되는 다른 function도 있다.
### mounting
- component가 태어나는 것과 같다.
  - 먼저 호출되는 function은 constructor이다. Javascript에서 class를 만들 때 호출된다.
  - component가 mount될 때, component가 screen에 표시될 때, component가 website를 갈 때 constructor를 호출한다.
    - 그 다음 render를 호출한다.
    - 그 다음 componentDidMount()를 호출한다. 
### updating
- component가 update를 의미한다. updating 되는 이유는 사용자 때문이다. 조작을 하니까. setStae()가 update다.
  - render() 호출되고, componentDidUpdate()도 호출된다.
### unmounting
- component가 죽는 것과 같다.
  - componentWillUnmount() 메소드가 호출된다.