import React from 'react';

// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

function Welcome (props) { return <h1>Hello, {props.name}</h1>; }

function App() {
  return (
    <div className="App">
        <Welcome name="Sara"/>
        <Welcome name="Ben"/>
        <Welcome name="Josh"/>
    </div>
  );
}

export default App;
