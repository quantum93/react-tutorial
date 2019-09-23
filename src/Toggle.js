import React from 'react';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    // This binding is necessary to make `this` work in the callback. if you use fat arrow function, don't need this line
    // this.handleClick = this.handleClick.bind(this);
  }

 //In class 'const' is not necessary to define fat arrow function.
  handleClick = () => {
    this.setState(
      state => ({isToggleOn: !state.isToggleOn})
    );
  }

  // handleClick() {
  //   this.setState(
  //     function state() {
  //       return {isToggleOn: !state.isToggleOn}
  //     }
  //   );
  // }

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
    )
  }
}
export default Toggle;
