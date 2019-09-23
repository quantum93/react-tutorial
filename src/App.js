import React from 'react';
import Welcome from './Welcome';
import Comment from './Comment';
import Clock from './Clock';
import Toggle from './Toggle';
import Greeting from './Greeting';
import LoginControl from './LoginControl';
import Mailbox from './Mailbox';

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};

const messages = ['React', 'Re: React', 'Re:Re: React'];

function App() {
  return (
    <div className="App">
        <Welcome name="Sara"/>
        <hr/>
        <Welcome name="Ben"/>
        <hr/>
        <Welcome name="Josh"/>
        <hr/>
        <Comment
          date={comment.date}
          text={comment.text}
          author={comment.author}/>
        <hr/>
        <Clock />
        <hr/>
        <Clock />
        <hr/>
        <Clock />
        <hr/>
        <Toggle />
        <hr/>
        <Greeting isLoggedIn={false}/>
        <hr/>
        <LoginControl />
        <hr/>
        <Mailbox unreadMessages={messages} />
    </div>
  );
}

export default App;
