import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

const formatName = (user) => {
  return user.firstName + ' ' + user.lastName;
}

const getGreeting = (user) => {
  if(user) {
    return 'HELLO', formatName(user);
  }
  else {
    return 'Hello, Stranger.'
  }
}

const user = { firstName: 'Harper', lastName:'Perez'};
const element = (
  <div>
    <img src={'https://twt-thumbs.washtimes.com/media/image/2016/04/01/twins_nationals_baseball_c0-103-4776-2887_s885x516.jpeg?dc43a1c189d05de06314ef8906abac5257f733cb'} />
    <h1>{getGreeting(user)}</h1>
  </div>)


ReactDOM.render(
  element,
  // <App />,
  document.getElementById('root'));

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
