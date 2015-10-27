import AdjustableRecipe from '../../components/AdjustableRecipe';
import AdjustedRecipePanel from '../../components/AdjustedRecipePanel';
import chai from 'chai';
import { findDOMNode } from 'react-dom';
import {
  findRenderedDOMComponentWithTag,
  findRenderedComponentWithType,
  renderIntoDocument,
} from 'react-addons-test-utils';
import jsdom from 'mocha-jsdom';
import OriginalRecipePanel from '../../components/OriginalRecipePanel';
import React from 'react';
import RecipeTargets from '../../components/RecipeTargets';
import sinon from 'sinon-chai';
import 'mocha-sinon';

const should = chai.should();
chai.use(sinon);

describe('AdjustableRecipe', function () {
  jsdom();

  let onAddClick,
      onDeleteClick,
      onChangeEfficiency,
      onChangeGravity,
      onChangeVolume,
      adjustableRecipe;
  const grains = [],
        targets = {
          efficiency: 0.8,
          gravity: 1.047,
          volume: 6,
        };

  beforeEach(function () {
    onAddClick = this.sinon.spy();
    onDeleteClick = this.sinon.spy();
    onChangeEfficiency = this.sinon.spy();
    onChangeGravity = this.sinon.spy();
    onChangeVolume = this.sinon.spy();

    adjustableRecipe = renderIntoDocument(
        <AdjustableRecipe onAddClick={onAddClick}
                          onDeleteClick={onDeleteClick}
                          onChangeEfficiency={onChangeEfficiency}
                          onChangeGravity={onChangeGravity}
                          onChangeVolume={onChangeVolume}
                          grains={grains}
                          targets={targets}/>
    );
  });

  it('renders header', () => {
    const header = findRenderedDOMComponentWithTag(
      adjustableRecipe, 'h1');
    findDOMNode(header).textContent.should.not.be.empty;
  });

  it('renders RecipeTargets', () => {
    const recipeTargets = findRenderedComponentWithType(
      adjustableRecipe, RecipeTargets);
    should.exist(recipeTargets);
  });

  it('renders OriginalRecipePanel', () => {
    const originalRecipePanel = findRenderedComponentWithType(
      adjustableRecipe, OriginalRecipePanel);
    should.exist(originalRecipePanel);
  });

  it('should pass props to RecipeTargets', () => {
    const recipeTargets = findRenderedComponentWithType(
      adjustableRecipe, RecipeTargets);

    recipeTargets.props.onChangeEfficiency();
    recipeTargets.props.onChangeGravity();
    recipeTargets.props.onChangeVolume();

    onChangeEfficiency.should.have.been.called;
    onChangeGravity.should.have.been.called;
    onChangeVolume.should.have.been.called;

    recipeTargets.props.targets.should.eql(targets);
  });

  it('should pass props to OriginalRecipePanel', () => {
    const originalRecipePanel = findRenderedComponentWithType(
      adjustableRecipe, OriginalRecipePanel);

    originalRecipePanel.props.onDeleteClick();
    originalRecipePanel.props.onAddClick();

    originalRecipePanel.props.grains.should.equal(grains);
    onDeleteClick.should.have.been.called;
    onAddClick.should.have.been.called;
  });

  it('renders AdjustedRecipePanel', () => {
    const adjustedRecipePanel = findRenderedComponentWithType(
      adjustableRecipe, AdjustedRecipePanel);
    should.exist(adjustedRecipePanel);
  });

  it('should pass props to AdjustedRecipePanel', () => {
    const adjustedRecipePanel = findRenderedComponentWithType(
      adjustableRecipe, AdjustedRecipePanel);
    adjustedRecipePanel.props.grains.should.equal(grains);
    adjustedRecipePanel.props.targets.should.equal(targets);
  });
});
