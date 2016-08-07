import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import Testutils from 'react-addons-test-utils';
import $ from 'jquery/dist/jquery';
import Timer from '../../components/Timer';

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  describe('handleStatusChange', () => {
    let timer;
    beforeEach(() => {
      timer = Testutils.renderIntoDocument(<Timer/>);
    });

    it('should set state to started and count', (done) => {
      timer.handleStatusChange('started');

      expect(timer.state.count).toBe(0);
      expect(timer.state.countdownStatus).toBe('started');

      setTimeout(() => {
        expect(timer.state.count).toBe(1);
        done();
      }, 1001);
    });

    it('should pause countdown on paused status', (done) => {
      timer.setState({count: 10});
      timer.handleStatusChange('paused');

      setTimeout(() => {
        expect(timer.state.count).toBe(10);
        expect(timer.state.countdownStatus).toBe('paused');
        done();
      }, 1001);
    });

    it('should stop coundown on stopped status', (done) => {
      timer.setState({count: 10});
      timer.handleStatusChange('stopped');

      setTimeout(() => {
        expect(timer.state.count).toBe(0);
        expect(timer.state.countdownStatus).toBe('stopped');
        done();
      }, 1001);
    });
  });
});