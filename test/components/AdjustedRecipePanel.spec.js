import AdjustedRecipePanel from '../../components/AdjustedRecipePanel';
import chai from 'chai';
import {
  findRenderedComponentWithType,
  renderIntoDocument,
} from 'react-addons-test-utils';
import GrainList from '../../components/GrainList';
import jsdom from 'mocha-jsdom';
import React from 'react';

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
    adjustedRecipe = renderIntoDocument(
        <AdjustedRecipePanel grains={grains}/>
    );
  });

  it('should pass props to GrainList', function () {
    const grainList = findRenderedComponentWithType(adjustedRecipe, GrainList);
    grainList.props.grains.should.equal(grains);
  });
});
