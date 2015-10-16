import chai from 'chai';
import GrainInput from '../../components/GrainInput';
import jsdom from 'mocha-jsdom';
import React from 'react';
import { renderIntoDocument } from 'react-addons-test-utils';

chai.should();

describe('GrainInput', function () {
  jsdom();

  const onAddClick = () => 'delete clicked';
  let grainInput;

  beforeEach(function () {
    grainInput = renderIntoDocument(
        <GrainInput onAddClick={onAddClick}/>
    );
  });

  it('should render grain-type input', function () {
    grainInput.refs.grainTypeInput.props.type.should.equal('text');
  });

  it('should render weight-lbs input', function () {
    grainInput.refs.weightLbsInput.props.type.should.equal('text');
  });

  it('should render weight-oz input', function () {
    grainInput.refs.weightOzInput.props.type.should.equal('text');
  });
});
