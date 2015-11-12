import chai from 'chai';
import jsdom from 'mocha-jsdom';
import GrainTypeField from '../../components/GrainTypeField';
import React from 'react';
import { renderIntoDocument } from 'react-addons-test-utils';
import { simulateChange } from '../test-utils';
import sinon from 'sinon-chai';
import 'mocha-sinon';

chai.should();
chai.use(sinon);

describe('GrainTypeField', function () {
  jsdom();

  let grainTypeField;

  beforeEach(function () {
    grainTypeField = renderIntoDocument(
      <GrainTypeField/>
    );
  });

  it('should contain input', function () {
    grainTypeField.refs.grainType.props.type.should.equal('text');
  });

  it('should have a placeholder', function () {
    grainTypeField
      .refs
      .grainType
      .props
      .placeholder
      .should
      .equal('Grain/Malt Type');
  });

  it('getValue should return input\'s value', function () {
    grainTypeField.getValue().should.equal('');

    simulateChange(grainTypeField, 'Some Other Grain');
    grainTypeField.getValue().should.equal('Some Other Grain');
  });
});
