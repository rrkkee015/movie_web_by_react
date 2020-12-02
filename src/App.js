import React from 'react';
// import Potato from "./Potato"

function Food({ fav }) {
  // component끼리 데이터를 보내고 받을 수 있다.
  return <h1>I like {fav}</h1>
}

// HTML을 반환하는 함수다.
function App() {
  return (
    <div>
      <div>Hello!</div>
      <Food
        fav="kimchi"
        something={true}
        papapapa={["hello", 1, 2, 3, 4, true]}
      />
      <Food fav="ramen" />
      <Food fav="pizza" />
      <Food fav="chukumi" />
    </div>
  );
}

export default App;
