import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import Testutils from 'react-addons-test-utils';
import $ from 'jQuery';
import CountdownForm from '../../components/CountdownForm';

describe('CountdownForm', () => {
  it('should exist', () => {
    expect(CountdownForm).toExist();
  });

  describe('onSetCountDown', () => {
    let spy;
    let countdownForm;
    let $el;
    beforeEach(() => {
      spy = expect.createSpy();
      countdownForm = Testutils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
      $el = $(ReactDOM.findDOMNode(countdownForm));
    });

    it('should call if valid seconds entered', () => {
      //set input and submit form
      countdownForm.refs.seconds.value = '109';
      Testutils.Simulate.submit($el.find('form')[0]);

      expect(spy).toHaveBeenCalledWith(109);
    });

    it('should not call if invalid seconds entered', () => {
      //set input and submit form
      countdownForm.refs.seconds.value = 'asdfasdf';
      Testutils.Simulate.submit($el.find('form')[0]);

      expect(spy).toNotHaveBeenCalled();
    });
  });
});