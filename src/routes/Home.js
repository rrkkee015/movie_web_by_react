import React from "react";
import axios from "axios";
import Movie from "../components/Movie"
import "./Home.css"


class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [] // 여기에 가득 채울 예정이다.
  };

  // getMovies는 비동기임을 말하고, 함수 내부에선 내가 뭘 기다리길 원하냐? 물어봄
  getMovies = async () => {
    // 뭘 기다릴 건지 await로 알려준다.
    const { data: { data: { movies } } } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies: movies, isLoading: false });
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
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
            <div className="movies">
              {movies.map(movie => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              ))}
            </div>
          )
        }
      </section>
    )
  }
}

export default Home;
