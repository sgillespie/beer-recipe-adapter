import chai from 'chai';
import jsdom from 'mocha-jsdom';
import GrainInput from '../../components/GrainInput';
import GrainList from '../../components/GrainList';
import OriginalRecipePanel from '../../components/OriginalRecipePanel';
import React from 'react/addons';

const should = chai.should(),
      { TestUtils } = React.addons;

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
    originalRecipePanel = TestUtils.renderIntoDocument(
        <OriginalRecipePanel onAddClick={onAddClick}
                             onDeleteClick={onDeleteClick}
                             grains={grains}/>
    );
  });

  it('renders GrainList', function () {
    const grainList = TestUtils.findRenderedComponentWithType(
      originalRecipePanel, GrainList);
    should.exist(grainList);
  });

  it('should pass props to GrainList', function () {
    const grainList = TestUtils.findRenderedComponentWithType(
      originalRecipePanel, GrainList);
    grainList.props.grains.should.equal(grains);
    grainList.props.onDeleteClick().should.equal(onDeleteClick());
  });

  it('renders GrainInput', function () {
    const grainInput = TestUtils.findRenderedComponentWithType(
      originalRecipePanel, GrainInput);
    should.exist(grainInput);
  });

  it('should pass props to GrainInput', function () {
    const grainInput = TestUtils.findRenderedComponentWithType(
      originalRecipePanel, GrainInput);
    grainInput.props.onAddClick().should.equal(onAddClick());
  });
});
