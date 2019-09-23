import React from 'react';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state={showWarning: true};
  }

  WarningBanner(props) {
    if (!props.warn) { return null; }
    return( <div className="warning">Warning!</div> )
  }

  handleToggleClick = () => {
    this.setState(state => ({ showWarning: !state.showWarning }));
  }

  render() {
    return(
      <div>
        <this.WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>{this.state.showWarning ? 'Hide' : 'Show'}</button>
      </div>
    )
  }
}

export default Page;
