import React from 'react';


class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {temperature: ''};
  }

  handleChange = (event) => {
    this.setState({temperature: event.target.value});
  }

  BoilingVerdict(props) {
    if (props.celsius >= 100) {
      return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
  }

  render() {
    const temperature = this.state.temperature;
    return(
      <fieldset>
        <legend>Enter temperature in Celsius</legend>
        <input value={temperature} onChange={this.handleChange} />
        <this.BoilingVerdict celsius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}


export default Calculator;
