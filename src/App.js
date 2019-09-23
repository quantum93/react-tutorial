import React from 'react';
import Welcome from './Welcome';
import Comment from './Comment';
import Clock from './Clock';

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};

function App() {
  return (
    <div className="App">
        <Welcome name="Sara"/>
        <Welcome name="Ben"/>
        <Welcome name="Josh"/>
        <Comment
          date={comment.date}
          text={comment.text}
          author={comment.author}/>
        <Clock />
        <Clock />
        <Clock />
    </div>
  );
}

export default App;
