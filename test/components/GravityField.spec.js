import chai from 'chai';
import jsdom from 'mocha-jsdom';
import GravityField from '../../components/GravityField';
import React from 'react';
import { renderIntoDocument } from 'react-addons-test-utils';
import { simulateChange } from '../test-utils';
import sinon from 'sinon-chai';
import 'mocha-sinon';

chai.should();
chai.use(sinon);

describe('GravityField', function () {
  jsdom();

  const value = 1.033;
  let onChange,
      gravityField;

  beforeEach(function () {
    onChange = this.sinon.spy();
    gravityField = renderIntoDocument(
        <GravityField value={value}
                      onChange={onChange}/>
    );
  });

  it('should contain input', function () {
    gravityField.refs.gravity.props.type.should.equal('text');
  });

  it('should pass props as default value', function () {
    gravityField.state.value.should.equal(1.033);
    gravityField.refs.gravity.props.defaultValue.should.equal(1.033);
  });

  it('should have label', function () {
    gravityField.refs.gravity.props.label.should.equal('Preboil Gravity (SG)');
  });

  it('should update state when changed', function () {
    simulateChange(gravityField, 1.053);
    gravityField.state.value.should.equal(1.053);
  });

  it('should call onChange when changed', function () {
    simulateChange(gravityField, 1.044);
    onChange.should.have.been.calledWith(1.044);
  });

  it('should not call onChange with invalid value', function () {
    simulateChange(gravityField, 'Sean');
    simulateChange(gravityField, 0.9);
    simulateChange(gravityField, 2.5);

    onChange.should.not.have.been.called;
  });

  it('should give feedback', function () {
    const { gravity } = gravityField.refs;

    gravity.props.hasFeedback.should.be.true;
    gravity.props.bsStyle.should.equal('success');

    simulateChange(gravityField, 'Test');
    gravity.props.bsStyle.should.equal('error');

    simulateChange(gravityField, 1.010);
    gravity.props.bsStyle.should.equal('success');
  });
});
