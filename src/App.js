import React from "react";


class App extends React.Component {
  state = {
    isLoading: true,
    movies: [] // 여기에 가득 채울 예정이다.
  };
  // ComponentDidMount에서 data를 fetch할 예정이다.
  componentDidMount() {
    setTimeout(() => {
      // setState를 사용할 때 state 안에 default 값들을 선언할 필요는 없다.
      this.setState({ isLoading: false });
    }, 6000);
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading" : "We are ready"}</div>
  }
}

export default App;
