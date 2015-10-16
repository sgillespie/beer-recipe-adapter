import jsdom from 'mocha-jsdom';
import RecipeTargetsInput from '../../components/RecipeTargetsInput';
import React from 'react';
import { renderIntoDocument } from 'react-addons-test-utils';

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
    recipeTargets.refs.preboilGravityInput.props.type.should.equal('text');
  });

  it('contains volume input', function () {
    recipeTargets.refs.preboilVolumeInput.props.type.should.equal('text');
  });

  it('contains efficiency input', function () {
    recipeTargets.refs.extractEfficiencyInput.props.type.should.equal('text');
  });
});
