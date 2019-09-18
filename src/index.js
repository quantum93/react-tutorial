import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

function Welcome (props) {
  console.log(props)
  return <h1>Hello, {props.name}</h1>;
}

ReactDOM.render(
  <Welcome />,
  document.getElementById('root')
);

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
