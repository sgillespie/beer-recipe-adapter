import jsdom from 'mocha-jsdom';
import RecipeTargetsInput from '../../components/RecipeTargetsInput';
import React from 'react';
import {
  findRenderedDOMComponentWithTag,
  renderIntoDocument,
  Simulate,
} from 'react-addons-test-utils';

require('chai').should();

describe('RecipeTargetsInput', function () {
  jsdom();

  let recipeTargets;

  beforeEach(function () {
    recipeTargets = renderIntoDocument(
        <RecipeTargetsInput/>
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

  it('should update state when efficiency is changed', function () {
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
});
