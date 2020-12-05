import React from "react";
import axios from "axios";


class App extends React.Component {
  state = {
    isLoading: true,
    movies: [] // 여기에 가득 채울 예정이다.
  };

  // getMovies는 비동기임을 말하고, 함수 내부에선 내가 뭘 기다리길 원하냐? 물어봄
  getMovies = async () => {
    // 뭘 기다릴 건지 await로 알려준다.
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  }

  // ComponentDidMount에서 data를 fetch할 예정이다.
  componentDidMount() {
    // setTimeout(() => {
    //   // setState를 사용할 때 state 안에 default 값들을 선언할 필요는 없다.
    //   this.setState({ isLoading: false });
    // }, 6000);

    // axios get은 느리니 동기화를 해야한다.
    this.getMovies();
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading" : "We are ready"}</div>
  }
}

export default App;
