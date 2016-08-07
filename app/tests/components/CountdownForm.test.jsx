import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import Testutils from 'react-addons-test-utils';
import $ from 'jquery/dist/jquery';
import CountdownForm from '../../components/CountdownForm';

describe('CountdownForm', () => {
  it('should exist', () => {
    expect(CountdownForm).toExist();
  });

  describe('onSetCountDown', () => {
    let spy;
    let countdownForm;
    beforeEach(() => {
      spy = expect.createSpy();
      countdownForm = Testutils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    });

    it('should call if valid seconds entered', () => {
      //set input and submit form
      countdownForm.refs.seconds.value = '109';
      Testutils.Simulate.submit(countdownForm.refs.form);

      expect(spy).toHaveBeenCalledWith(109);
    });

    it('should not call if invalid seconds entered', () => {
      //set input and submit form
      countdownForm.refs.seconds.value = 'asdfasdf';
      Testutils.Simulate.submit(countdownForm.refs.form);

      expect(spy).toNotHaveBeenCalled();
    });
  });
});