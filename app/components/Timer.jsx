import React from 'react';
import Clock from './Clock';
import Controls from './Controls';

const Timer = React.createClass({
  getInitialState() {
    return {
      count: 0,
      countdownStatus: 'paused'
    };
  },
  componentDidUpdate(prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;

        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = undefined;
  },
  startTimer() {
    this.timer = setInterval(() => {
      const count = this.state.count + 1;
      this.setState({count});
    }, 1000);
  },
  handleStatusChange(newStatus) {
    this.setState({countdownStatus: newStatus});
  },
  render() {
    const {count, countdownStatus} = this.state;

    return (
      <div>
        <h1 className="page-title">Timer Component</h1>
        <Clock totalSeconds={count}/>
        <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
      </div>
    );
  }
});

export default Timer;