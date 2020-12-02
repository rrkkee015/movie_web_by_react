import React from 'react';
import PropTypes from "prop-types";
// import Potato from "./Potato"

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://www.koreanbapsang.com/wp-content/uploads/2016/10/DSC_1843-e1477360668451.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "DduckBbokki",
    image: "https://recipe1.ezmember.co.kr/cache/recipe/2019/01/17/6fb9bfa566c0c3fec18080b5e927c2661.jpg",
    rating: 4.9
  },
  {
    id: 3,
    name: "Pizza",
    image: "https://i.fltcdn.net/contents/984/original_1420785942178_y0nppv3rf6r.octet-stream",
    rating: 3
  }
]

function renderFood(dish) {
  // 마찬가지로 key에 id 값이 안들어가면 안됨. 리액트는 저게 내부적으로 필요하다.
  return <Food key={dish.id} name={dish.name} image={dish.image} />
}

function Food({ name, image, rating }) {
  // component끼리 데이터를 보내고 받을 수 있다.
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={image} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  // rating: PropTypes.string.isRequired로 하면 에러 뜸
  rating: PropTypes.number.isRequired
}

// HTML을 반환하는 함수다.
function App() {
  return (
    <div>
      <div>Hello!</div>
      {/* <Food
        fav="kimchi"
        something={true}
        papapapa={["hello", 1, 2, 3, 4, true]}
      />
      <Food fav="ramen" />
      <Food fav="pizza" />
      <Food fav="chukumi" /> */}

      {/* 첫 번째 방법 */}
      {/* foodILike 이렇게 그냥 쓰면 text이다. */}
      {foodILike.map(dish => ( // foodILike.map(function(dish) {
        <Food key={dish.id} name={dish.name} image={dish.image} rating={dish.rating} />
        // 그냥 쓰면 에러 뜬다. key가 각각 있어야하기 때문이다. 그래서 Food Object에 id를 집어 넣는다. 그 키를 key로 넘긴다.
      ))} {/* 아마 에러가 뜰건데 그거는 map 함수 관련 때문에 뜨는거다. */}

      {/* 두 번째 방법 */}
      {/* {foodILike.map(renderFood)} */}
      {/* 이상한걸 리턴을 받는건데, React Component를 받는 것이다. */}
      {/* {console.log(foodILike.map(renderFood))} */}
    </div>
  );
}

export default App;
