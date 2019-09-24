import React from 'react';
import Welcome from './Welcome';
import Comment from './Comment';
import Clock from './Clock';
import Toggle from './Toggle';
import Greeting from './Greeting';
import LoginControl from './LoginControl';
import Mailbox from './Mailbox';
import Page from './Page';
import NumberList from './NumberList';
import Blog from './Blog';
import NameForm from './NameForm';
import EssayForm from './EssayForm';
import FlavorForm from './FlavorForm';
import Reservation from './Reservation';

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};

const messages = ['React', 'Re: React', 'Re:Re: React'];

const numbers = [1, 2, 3, 4, 5];

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

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
        <hr/>
        <Page />
        <hr/>
        <NumberList numbers={numbers} />
        <hr/>
        <Blog posts={posts} />
        <hr/>
        <NameForm />
        <hr/>
        <EssayForm />
        <hr/>
        <FlavorForm />
        <hr/>
        <Reservation />
    </div>
  );
}

export default App;
