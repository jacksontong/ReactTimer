import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import Testutils from 'react-addons-test-utils';
import $ from 'jquery/dist/jquery';
import Countdown from '../../components/Countdown';

describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).toExist();
  });

  describe('handleSetCoundown', () => {
    let countdown;
    beforeEach(() => {
      countdown = Testutils.renderIntoDocument(<Countdown/>);
    });
    it('should set state to started and countdown', (done) => {
      countdown.handleSetCoundDown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');

      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        done();
      }, 1001);
    });

    it('should never set count less than zero', (done) => {
      countdown.handleSetCoundDown(1);

      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        done();
      }, 3001);
    });
  });
});