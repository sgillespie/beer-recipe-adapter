import chai from 'chai';
import {
  findRenderedComponentWithType,
  renderIntoDocument,
} from 'react-addons-test-utils';
import GrainInput from '../../components/GrainInput';
import GrainList from '../../components/GrainList';
import jsdom from 'mocha-jsdom';
import OriginalRecipePanel from '../../components/OriginalRecipePanel';
import React from 'react';

const should = chai.should();

describe('OriginalRecipePanel', function () {
  jsdom();

  const onAddClick = () => 'clicked add',
        onDeleteClick = () => 'clicked delete',
        grains = [
              {
                id: 1,
                type: 'someType',
                weight: 9,
              },
        ];

  let originalRecipePanel;

  beforeEach(function () {
    originalRecipePanel = renderIntoDocument(
        <OriginalRecipePanel onAddClick={onAddClick}
                             onDeleteClick={onDeleteClick}
                             grains={grains}/>
    );
  });

  it('renders GrainList', function () {
    const grainList = findRenderedComponentWithType(
      originalRecipePanel, GrainList);
    should.exist(grainList);
  });

  it('should pass props to GrainList', function () {
    const grainList = findRenderedComponentWithType(
      originalRecipePanel, GrainList);
    grainList.props.grains.should.equal(grains);
    grainList.props.onDeleteClick().should.equal(onDeleteClick());
  });

  it('renders GrainInput', function () {
    const grainInput = findRenderedComponentWithType(
      originalRecipePanel, GrainInput);
    should.exist(grainInput);
  });

  it('should pass props to GrainInput', function () {
    const grainInput = findRenderedComponentWithType(
      originalRecipePanel, GrainInput);
    grainInput.props.onAddClick().should.equal(onAddClick());
  });
});
