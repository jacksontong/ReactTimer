import React from 'react';
import Clock from './Clock';
import CountdownForm from './CountdownForm';

const Countdown = React.createClass({
  getInitialState() {
    return {
      count: 0,
      countdownStatus: 'stopped'
    }
  },
  componentDidUpdate(prefProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
      }
    }
  },
  startTimer() {
    this.timer = setInterval(() => {
      const newCount = this.state.count - 1;
      this.setState({count: newCount > 0 ? newCount : 0});
    }, 1000);
  },
  handleSetCoundDown(seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  },
  render() {
    const {count} = this.state;

    return (
      <div>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={this.handleSetCoundDown}/>
      </div>
    );
  }
});

export default Countdown;