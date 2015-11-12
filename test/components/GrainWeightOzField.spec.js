import chai from 'chai';
import jsdom from 'mocha-jsdom';
import GrainWeightOzField from '../../components/GrainWeightOzField';
import React from 'react';
import { renderIntoDocument } from 'react-addons-test-utils';
import { simulateChange } from '../test-utils';
import sinon from 'sinon-chai';
import 'mocha-sinon';

chai.should();
chai.use(sinon);

describe('GrainWeightOzField', function () {
  jsdom();

  let grainWeightField;

  beforeEach(function () {
    grainWeightField = renderIntoDocument(
      <GrainWeightOzField/>
    );
  });

  it('should contain input', function () {
    grainWeightField.refs.weightOz.props.type.should.equal('text');
  });

  it('should have a placeholder', function () {
    grainWeightField
      .refs
      .weightOz
      .props
      .placeholder
      .should
      .equal('Ounces');
  });

  it('getValue should return input\'s value', function () {
    grainWeightField.getValue().should.equal('');

    simulateChange(grainWeightField, '8');
    grainWeightField.getValue().should.equal('8');
  });
});
