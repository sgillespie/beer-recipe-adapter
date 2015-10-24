import chai from 'chai';
import jsdom from 'mocha-jsdom';
import EfficiencyField from '../../components/EfficiencyField';
import React from 'react';
import {
  findRenderedDOMComponentWithTag,
  renderIntoDocument,
  Simulate,
} from 'react-addons-test-utils';
import sinon from 'sinon-chai';
import 'mocha-sinon';

chai.should();
chai.use(sinon);

describe('EfficiencyField', function () {
  jsdom();

  const value = 0.7;
  let onChange,
      efficiencyField;

  beforeEach(function () {
    onChange = this.sinon.spy();
    efficiencyField = renderIntoDocument(
        <EfficiencyField value={value}
                         onChange={onChange}/>
    );
  });

  it('contains input', function () {
    efficiencyField.refs.efficiency.props.type.should.equal('text');
  });

  it('should convert decimal to percentage', function () {
    efficiencyField.state.value.should.equal(0.7);
    efficiencyField.refs.efficiency.props.defaultValue.should.equal(70);
  });

  it('should update state when changed', function () {
    simulateChange(efficiencyField, '100');
    efficiencyField.state.value.should.equal(1);
  });

  it('should call onChange when changed', function () {
    simulateChange(efficiencyField, '30');
    onChange.should.have.been.calledWith(0.3);
  });

  it('should not call onChange with invalid value', function () {
    simulateChange(efficiencyField, 'Test');
    simulateChange(efficiencyField, '0');
    simulateChange(efficiencyField, '120');

    onChange.should.not.have.been.called;
  });

  it('should give feedback', function () {
    const { efficiency } = efficiencyField.refs;

    efficiency.props.bsStyle.should.equal('success');

    simulateChange(efficiencyField, 'Test');
    efficiency.props.bsStyle.should.equal('error');

    simulateChange(efficiencyField, 0.4);
    efficiency.props.bsStyle.should.equal('success');
  });
});

function simulateChange (component, value) {
  const input = findRenderedDOMComponentWithTag(component, 'input');

  input.value = value;
  Simulate.change(input);
}
