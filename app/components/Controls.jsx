import React from 'react';

const Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },
  onStatusChange(newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    };
  },
  render() {
    const {countdownStatus} = this.props;
    const renderStartStopButton = () => {
      if (countdownStatus === 'started') {
        return <button onClick={this.onStatusChange('paused')} className="button secondary">Pause</button>;
      } else {
        return <button onClick={this.onStatusChange('started')} className="button primary">Start</button>;
      }
    };

    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    );
  }
});

export default Controls;