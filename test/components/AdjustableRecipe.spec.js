jest.dontMock('../../components/AdjustableRecipe');

const AdjustableRecipe = require('../../components/AdjustableRecipe'),
      OriginalRecipePanel = require('../../components/OriginalRecipePanel'),
      React = require('react/addons'),
      RecipeTargetsInput = require('../../components/RecipeTargetsInput'),
      TestUtils = React.addons.TestUtils;

describe('AdjustableRecipePanel', function () {
  const adjustableRecipe = TestUtils.renderIntoDocument(
        <AdjustableRecipe onAddClick={() => true}
                          onDeleteClick={() => true}
                          grains={[]} />
    );

  it('contains header', function () {
    const header = TestUtils.findRenderedDOMComponentWithTag(
      adjustableRecipe, 'h1');
    expect(React.findDOMNode(header).textContent).toBeTruthy();
  });

  it('contains RecipeTargetsInput', function () {
    const recipeTargets = TestUtils.findRenderedComponentWithType(
      adjustableRecipe, RecipeTargetsInput);
    expect(recipeTargets).toBeTruthy();
  });

  it('contains OriginalRecipePanel', function () {
    const originalRecipePanel = TestUtils.findRenderedComponentWithType(
      adjustableRecipe, OriginalRecipePanel);
    expect(originalRecipePanel).toBeTruthy();
  });
});
