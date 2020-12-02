import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  // 밑에 있는 <App />을 컴포넌트라 하는데 HTML을 반환하는 함수다.
  // 그냥 App으로 작성하면 안됨
  // HTML + JS를 JSX라 부른다. => React의 특화된 개념

  // <App /><Potato /> 이렇게 하면 안된다.
  // react 앱은 하나의 component만을 rendering 해야하기 때문임
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // index.html의 <div id='root'></div>에 집어넣는 역할을 한다.
  document.getElementById('root')
);
