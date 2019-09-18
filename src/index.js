import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

const formatName = (user) => {
  return user.firstName + ' ' + user.lastName;
}

const getGreeting = (user) => {
  if(user) {
    return <h1>HELLO, {formatName(user)}!</h1>;
  }
  else {
    return <h1>Hello, Stranger.</h1>
  }
}

const user = { firstName: 'Harper', lastName:'Perez'};
const element = <h1>{getGreeting(user)}</h1>

ReactDOM.render(
  element,
  // <App />,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
