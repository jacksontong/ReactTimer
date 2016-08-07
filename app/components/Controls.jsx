import React from 'react';

const Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired
  },
  render() {
    const {countdownStatus} = this.props;
    const renderStartStopButton = () => {
      switch (countdownStatus) {
        case 'started':
          return <button className="button secondary">Pause</button>;
          break;

        case 'paused':
          return <button className="button primary">Start</button>;
          break;
      }
    };

    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow">Clear</button>
      </div>
    );
  }
});

export default Controls;