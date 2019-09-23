import React from 'react';
import Greeting from './Greeting';

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: false};
  }

  LoginButton = (props) => {
    return (<button onClick={props.onClick}>Login</button>);
  }

  LogoutButton = (props) => {
    return(<button onClick={props.onClick}>Logout</button>);
  }

  handleLoginClick = () => {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick = () => {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    // let button;

    // if (isLoggedIn) {
    //   button = <this.LogoutButton onClick={this.handleLogoutClick} />;
    // } else {
    //   button = <this.LoginButton onClick={this.handleLoginClick} />;
    // }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {/* {button} */}
        {isLoggedIn ? (
          <this.LogoutButton onClick={this.handleLogoutClick} />
        ) : (
          <this.LoginButton onClick={this.handleLoginClick} />
        )}
      </div>
    )
  }
}

export default LoginControl;
