jest.dontMock('../../components/AdjustedRecipePanel');

const GrainList = require('../../components/GrainList'),
      AdjustedRecipePanel = require('../../components/AdjustedRecipePanel'),
      React = require('react/addons'),
      TestUtils = React.addons.TestUtils;

describe('AdjustedRecipePanel', function () {
  const grains = ['grain1', 'grain2'],
        adjustedRecipe = TestUtils.renderIntoDocument(
            <AdjustedRecipePanel grains={grains} />
        );

  it('passes props to GrainList', function () {
    const grainList = TestUtils.findRenderedComponentWithType(adjustedRecipe, GrainList);
    expect(grainList.props.grains).toEqual(grains);
  });
});
