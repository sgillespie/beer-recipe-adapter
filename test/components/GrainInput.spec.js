import { Button } from 'react-bootstrap';
import chai from 'chai';
import { findDOMNode } from 'react-dom';
import GrainInput from '../../components/GrainInput';
import GrainTypeField from '../../components/GrainTypeField';
import GrainWeightLbsField from '../../components/GrainWeightLbsField';
import GrainWeightOzField from '../../components/GrainWeightOzField';
import jsdom from 'mocha-jsdom';
import React from 'react';
import {
  renderIntoDocument,
  scryRenderedComponentsWithType,
  Simulate,
} from 'react-addons-test-utils';
import { simulateChange } from '../test-utils';
import sinon from 'sinon-chai';
import 'mocha-sinon';

chai.should();
chai.use(sinon);

describe('GrainInput', function () {
  jsdom();

  let grainInput,
      onAddClick;

  beforeEach(function () {
    onAddClick = this.sinon.spy();
    grainInput = renderIntoDocument(
        <GrainInput onAddClick={onAddClick}/>
    );
  });

  it('should render grain-type input', function () {
    grainInput.refs.grainType.should.be.an.instanceOf(GrainTypeField);
  });

  it('should render weight-lbs input', function () {
    grainInput.refs.weightLbs.should.be.an.instanceOf(GrainWeightLbsField);
  });

  it('should render weight-oz input', function () {
    grainInput.refs.weightOz.should.be.an.instanceOf(GrainWeightOzField);
  });

  it('should call onAddClick when add clicked', function () {
    const button = scryRenderedComponentsWithType(grainInput, Button)
            .find(b => b.props.onClick);
    simulateChange(grainInput.refs.grainType, 'someType');
    simulateChange(grainInput.refs.weightLbs, 11);
    simulateChange(grainInput.refs.weightOz, 8);
    Simulate.click(findDOMNode(button));

    onAddClick.should.have.been.calledWith('someType', 11.5);
  });
});
