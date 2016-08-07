import React from 'react';
import Clock from './Clock';
import CountdownForm from './CountdownForm';
import Controls from './Controls';

const Countdown = React.createClass({
  getInitialState() {
    return {
      count: 0,
      countdownStatus: 'stopped'
    }
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
      const newCount = this.state.count - 1;
      this.setState({count: newCount > 0 ? newCount : 0});

      if (newCount <= 0) {
        this.setState({
          countdownStatus: 'stopped'
        });
      }
    }, 1000);
  },
  clearTimer() {
    clearInterval(this.timer);
    this.timer = undefined;
  },
  handleSetCoundDown(seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  },
  handleStatusChange(newStatus) {
    this.setState({
      countdownStatus: newStatus
    });
  },
  render() {
    const {count, countdownStatus} = this.state;
    const renderControlArea = () => {
      if (countdownStatus !== 'stopped') {
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>;
      } else {
        return <CountdownForm onSetCountdown={this.handleSetCoundDown}/>;
      }
    };

    return (
      <div>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    );
  }
});

export default Countdown;