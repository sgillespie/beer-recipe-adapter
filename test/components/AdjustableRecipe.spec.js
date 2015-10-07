const AdjustableRecipe = require('../../components/AdjustableRecipe'),
      AdjustedRecipePanel = require('../../components/AdjustedRecipePanel'),
      should = require('chai').should(),
      jsdom = require('mocha-jsdom'),
      OriginalRecipePanel = require('../../components/OriginalRecipePanel'),
      React = require('react/addons'),
      RecipeTargetsInput = require('../../components/RecipeTargetsInput'),
      TestUtils = React.addons.TestUtils;

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

  it('renders header', function () {
    const header = TestUtils.findRenderedDOMComponentWithTag(
      adjustableRecipe, 'h1');
    React.findDOMNode(header).textContent.should.not.be.empty;
  });

  it('renders RecipeTargetsInput', function () {
    const recipeTargets = TestUtils.findRenderedComponentWithType(
      adjustableRecipe, RecipeTargetsInput);
    should.exist(recipeTargets);
  });

  it('renders OriginalRecipePanel', function () {
    const originalRecipePanel = TestUtils.findRenderedComponentWithType(
      adjustableRecipe, OriginalRecipePanel);
    should.exist(originalRecipePanel);
  });

  it('should pass props to OriginalRecipePanel', function () {
    const originalRecipePanel = TestUtils.findRenderedComponentWithType(
      adjustableRecipe, OriginalRecipePanel);

    originalRecipePanel.props.grains.should.equal(grains);
    originalRecipePanel.props.onAddClick.should.equal(onAddClick);
    originalRecipePanel.props.onDeleteClick.should.equal(onDeleteClick);
  });

  it('renders AdjustedRecipePanel', function () {
    const adjustedRecipePanel = TestUtils.findRenderedComponentWithType(
      adjustableRecipe, AdjustedRecipePanel);
    should.exist(adjustedRecipePanel);
  });

  it('should pass props to AdjustedRecipePanel', function () {
    const adjustedRecipePanel = TestUtils.findRenderedComponentWithType(
      adjustableRecipe, AdjustedRecipePanel);
    adjustedRecipePanel.props.grains.should.equal(grains);
  });
});
