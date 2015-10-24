import chai from 'chai';
import jsdom from 'mocha-jsdom';
import VolumeField from '../../components/VolumeField';
import React from 'react';
import { renderIntoDocument } from 'react-addons-test-utils';
import { simulateChange } from '../test-utils';
import sinon from 'sinon-chai';
import 'mocha-sinon';

chai.should();
chai.use(sinon);

describe('VolumeField', function () {
  jsdom();

  const value = 5.5;
  let onChange,
      volumeField;

  beforeEach(function () {
    onChange = this.sinon.spy();
    volumeField = renderIntoDocument(
        <VolumeField value={value}
                     onChange={onChange}/>
    );
  });

  it('should contain input', () => {
    volumeField.refs.volume.props.type.should.equal('text');
  });

  it('should pass props as default value', () => {
    volumeField.state.value.should.equal(5.5);
    volumeField.refs.volume.props.defaultValue.should.equal(5.5);
  });

  it('should have label', () => {
    volumeField.refs.volume.props.label.should.equal('Preboil Volume (Gallons)');
  });

  it('should call onChange when changed', () => {
    simulateChange(volumeField, 6.75);
    onChange.should.have.been.calledWith(6.75);
  });

  it('should not call onChange with invalid input', () => {
    simulateChange(volumeField, 'Test');
    simulateChange(volumeField, 0);

    onChange.should.not.have.been.called;
  });

  it('should give feedback', () => {
    const { volume } = volumeField.refs;

    volume.props.hasFeedback.should.be.true;
    volume.props.bsStyle.should.equal('success');

    simulateChange(volumeField, 'Test');
    volume.props.bsStyle.should.equal('error');

    simulateChange(volumeField, 5.2);
    volume.props.bsStyle.should.equal('success');
  });
});
