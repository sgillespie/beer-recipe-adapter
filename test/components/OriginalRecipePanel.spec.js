jest.dontMock('../../components/OriginalRecipePanel');

const GrainInput = require('../../components/GrainInput'),
      GrainList = require('../../components/GrainList'),
      OriginalRecipePanel = require('../../components/OriginalRecipePanel'),
      React = require('react/addons'),
      TestUtils = React.addons.TestUtils;

describe('OriginalRecipePanel', function () {
  const onAddClick = () => 'clicked add',
        onDeleteClick = () => 'clicked delete',
        grains = ['grain1', 'grain2'],

        originalRecipe = TestUtils.renderIntoDocument(
            <OriginalRecipePanel onAddClick={onAddClick}
                                 onDeleteClick={onDeleteClick}
                                 grains={grains} />
        );

  it('passes props to GrainList', function () {
    const grainList = TestUtils.findRenderedComponentWithType(originalRecipe, GrainList);
    expect(grainList.props.grains).toEqual(grains);
    expect(grainList.props.onDeleteClick()).toBe(onDeleteClick());
  });

  it('passes props to GrainInput', function () {
    const grainInput = TestUtils.findRenderedComponentWithType(originalRecipe, GrainInput);
    expect(grainInput.props.onAddClick()).toBe(onAddClick());
  });
});
