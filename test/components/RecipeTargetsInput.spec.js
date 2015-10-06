jest.dontMock('../../components/RecipeTargetsInput');

const React = require('react/addons'),
      RecipeTargetsInput = require('../../components/RecipeTargetsInput'),
      TestUtils = React.addons.TestUtils;

describe('RecipeTargetsInput', function () {
  const recipeTargets = TestUtils.renderIntoDocument(
      <RecipeTargetsInput/>
  );

  it('contains SG Input', function () {
    expect(recipeTargets.refs.preboilGravityInput.props.type).toBe('text');
  });

  it('contains volume input', function () {
    expect(recipeTargets.refs.preboilVolumeInput.props.type).toBe('text');
  });

  it('contains efficiency input', function () {
    expect(recipeTargets.refs.extractEfficiencyInput.props.type).toBe('text');
  });
});
