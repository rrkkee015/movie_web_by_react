import React from "react";
import { Link } from "react-router-dom"
import PropTypes from "prop-types";
// 아래와 같이 style로 해도되고 css를 import 할 수도 있다.
import "./Movie.css"


function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <Link to={{
      pathname: `/movie/${id}`,
      state: {
        year,
        title,
        summary,
        poster,
        genres
      }
    }}>
      <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          {/* 아래와 같이 style 태그를 넣는 것도 가능하다. */}
          {/* <h3 className="movie__title" style={{ backgroundColor: "red" }}>{title}</h3> */}
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {/* map 함수는 item 뿐만아니라 index도 같이 준다. */}
            {genres.map((genre, index) =>
              <li key={index} className="genres__genres">
                {genre}
              </li>
            )}
          </ul>
          <p className="movie__summary">{summary.slice(0, 180)}...</p>
        </div>
      </div>
    </Link>
  )
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;
