const AdjustedRecipePanel = require('../../components/AdjustedRecipePanel'),
      GrainList = require('../../components/GrainList'),
      jsdom = require('mocha-jsdom'),
      React = require('react/addons'),
      TestUtils = React.addons.TestUtils;

require('chai').should();

describe('AdjustedRecipePanel', function () {
  jsdom();

  const grains = [
        {
          id: 1,
          type: 'someType',
          weight: 9,
        },
  ];

  let adjustedRecipe;
  beforeEach(function () {
    adjustedRecipe = TestUtils.renderIntoDocument(
        <AdjustedRecipePanel grains={grains}/>
    );
  });

  it('should pass props to GrainList', function () {
    const grainList = TestUtils.findRenderedComponentWithType(adjustedRecipe, GrainList);
    grainList.props.grains.should.equal(grains);
  });
});
