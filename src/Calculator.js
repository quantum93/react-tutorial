import React from 'react';
import TemperatureInput from './TemperatureInput';

class Calculator extends React.Component {
  // BoilingVerdict(props) {
  //   if (props.celsius >= 100) {
  //     return <p>The water would boil.</p>;
  //   }
  //   return <p>The water would not boil.</p>;
  // }

  render() {
    return(
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
    );
  }
}

export default Calculator;
