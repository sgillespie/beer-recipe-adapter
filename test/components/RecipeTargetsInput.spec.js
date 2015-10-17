import chai from 'chai';
import jsdom from 'mocha-jsdom';
import RecipeTargetsInput from '../../components/RecipeTargetsInput';
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

describe('RecipeTargetsInput', function () {
  jsdom();

  let match,
      onChangeTargets,
      recipeTargets;
  
  beforeEach(function () {
    match = this.sinon.match;
    onChangeTargets = this.sinon.spy();
    recipeTargets = renderIntoDocument(
        <RecipeTargetsInput onChangeTargets={onChangeTargets}/>
    );
  });

  it('contains SG input', function () {
    recipeTargets.refs.gravity.props.type.should.equal('text');
  });

  it('contains volume input', function () {
    recipeTargets.refs.volume.props.type.should.equal('text');
  });

  it('contains efficiency input', function () {
    recipeTargets.refs.efficiency.props.type.should.equal('text');
  });

  it('should update state when gravity is changed', function () {
    const { gravity } = recipeTargets.refs,
          inputNode = findRenderedDOMComponentWithTag(gravity, 'input');

    inputNode.value = '1.033';
    Simulate.change(inputNode);

    recipeTargets.state.gravity.should.equal('1.033');
  });

  it('should update state when volume is changed', function () {
    const { volume } = recipeTargets.refs,
          input = findRenderedDOMComponentWithTag(volume, 'input');

    input.value = '3';
    Simulate.change(input);

    recipeTargets.state.volume.should.equal('3');
  });

  it('should update state when efficiency is changed', function () {
    const { efficiency } = recipeTargets.refs,
          input = findRenderedDOMComponentWithTag(efficiency, 'input');

    input.value = '1';
    Simulate.change(input);

    recipeTargets.state.efficiency.should.equal('1');
  });

  it('should call onChangeTargets when gravity is changed', function () {
    const { gravity } = recipeTargets.refs,
          input = findRenderedDOMComponentWithTag(gravity, 'input');

    input.value = '1.020';
    Simulate.change(input);
    
    onChangeTargets.should.have.been.calledWith(
      match.any, '1.020', match.any);
  });

  it('should call onChangeTargets when volume is changed', function () {
    const { volume } = recipeTargets.refs,
          input = findRenderedDOMComponentWithTag(volume, 'input');

    input.value = '10';
    Simulate.change(input);
    
    onChangeTargets.should.have.been.calledWith(
      match.any, match.any, '10');
  });

  it('should call onChangeTargets when efficiency is changed', function () {
    const { efficiency } = recipeTargets.refs,
          input = findRenderedDOMComponentWithTag(efficiency, 'input');

    input.value = '0.3';
    Simulate.change(input);
    
    onChangeTargets.should.have.been.calledWith(
      '0.3', match.any, match.any);
  });
});
