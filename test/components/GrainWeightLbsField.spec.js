import chai from 'chai';
import jsdom from 'mocha-jsdom';
import GrainWeightLbsField from '../../components/GrainWeightLbsField';
import React from 'react';
import { renderIntoDocument } from 'react-addons-test-utils';
import { simulateChange } from '../test-utils';
import sinon from 'sinon-chai';
import 'mocha-sinon';

chai.should();
chai.use(sinon);

describe('GrainWeightLbsField', function () {
  jsdom();

  let grainWeightField;

  beforeEach(function () {
    grainWeightField = renderIntoDocument(
      <GrainWeightLbsField/>
    );
  });

  it('should contain input', function () {
    grainWeightField.refs.weightLbs.props.type.should.equal('text');
  });

  it('should have a placeholder', function () {
    grainWeightField
      .refs
      .weightLbs
      .props
      .placeholder
      .should
      .equal('Weight (Lbs)');
  });

  it('getValue should return input\'s value', function () {
    grainWeightField.getValue().should.equal('');

    simulateChange(grainWeightField, '6');
    grainWeightField.getValue().should.equal('6');
  });
});
