import AdjustableRecipe from '../../components/AdjustableRecipe';
import AdjustedRecipePanel from '../../components/AdjustedRecipePanel';
import chai from 'chai';
import jsdom from 'mocha-jsdom';
import OriginalRecipePanel from '../../components/OriginalRecipePanel';
import React from 'react/addons';
import RecipeTargetsInput from '../../components/RecipeTargetsInput';

const should = chai.should();
const { TestUtils } = React.addons;

describe('AdjustableRecipe', function () {
  jsdom();

  let onAddClick,
      onDeleteClick,
      adjustableRecipe;
  const grains = [];

  beforeEach(function () {
    onAddClick = () => true;
    onDeleteClick = () => true;

    adjustableRecipe = TestUtils.renderIntoDocument(
        <AdjustableRecipe onAddClick={onAddClick}
                          onDeleteClick={onDeleteClick}
                          grains={grains}/>
    );
  });

  it('renders header', () => {
    const header = TestUtils.findRenderedDOMComponentWithTag(
      adjustableRecipe, 'h1');
    React.findDOMNode(header).textContent.should.not.be.empty;
  });

  it('renders RecipeTargetsInput', () => {
    const recipeTargets = TestUtils.findRenderedComponentWithType(
      adjustableRecipe, RecipeTargetsInput);
    should.exist(recipeTargets);
  });

  it('renders OriginalRecipePanel', () => {
    const originalRecipePanel = TestUtils.findRenderedComponentWithType(
      adjustableRecipe, OriginalRecipePanel);
    should.exist(originalRecipePanel);
  });

  it('should pass props to OriginalRecipePanel', () => {
    const originalRecipePanel = TestUtils.findRenderedComponentWithType(
      adjustableRecipe, OriginalRecipePanel);

    originalRecipePanel.props.grains.should.equal(grains);
    originalRecipePanel.props.onAddClick.should.equal(onAddClick);
    originalRecipePanel.props.onDeleteClick.should.equal(onDeleteClick);
  });

  it('renders AdjustedRecipePanel', () => {
    const adjustedRecipePanel = TestUtils.findRenderedComponentWithType(
      adjustableRecipe, AdjustedRecipePanel);
    should.exist(adjustedRecipePanel);
  });

  it('should pass props to AdjustedRecipePanel', () => {
    const adjustedRecipePanel = TestUtils.findRenderedComponentWithType(
      adjustableRecipe, AdjustedRecipePanel);
    adjustedRecipePanel.props.grains.should.equal(grains);
  });
});
