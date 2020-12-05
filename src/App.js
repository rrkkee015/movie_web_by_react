import React from 'react';


// function component 말고 class component를 배워보자
// React.Component를 상속받았다.
class App extends React.Component {
  // state 때문에 class component를 사용한다.
  state = {
    count: 0
  };

  add = () => {
    // 이런 식으로 직접 변경이 안된다.
    // 왜냐면 react는 render function을 refresh하지 않기 때문이다.
    // this.state.count = 1;
    // 그래서 setState()함수를 써야하는데 react는 setState를 호출하면,
    // view를 refresh 해야함을 알고 render function을 refresh한다.
    // this.setState({ count: 1 }); // state는 object임, setState는 새로운 state를 받아야한다.
    // 아래 코드도 좋은건 아니다. state에 의존하기 때문임.
    // this.setState({ count: this.state.count + 1 });
    // 이런 방법도 있다.
    this.setState(current => ({ count: current.count + 1 }));

    // 중요한건 set State를 호출할 때마다 react는 새로운 state와 함께 render function을 호출한다.
  };

  minus = () => {
    // this.state.count = -1;
    // this.setState({ count: -1 });
    // this.setState({ count: this.state.count - 1 });
    this.setState(current => ({ count: current.count - 1 }));
  };

  // function이 아니기 때문에, return이 아닌 render method를 이용한다.
  // react는 자동적으로 class component의 render method를 실행한다.
  render() {
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
