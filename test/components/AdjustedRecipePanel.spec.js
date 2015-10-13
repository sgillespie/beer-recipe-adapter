import AdjustedRecipePanel from '../../components/AdjustedRecipePanel';
import chai from 'chai';
import GrainList from '../../components/GrainList';
import jsdom from 'mocha-jsdom';
import React from 'react/addons';

const { TestUtils } = React.addons;
chai.should();

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
