import chai from 'chai';
import find from 'lodash/collection/find';
import {
  findRenderedComponentWithType,
  renderIntoDocument,
  scryRenderedComponentsWithType
} from 'react-addons-test-utils';
import GrainItem from '../../components/GrainItem';
import GrainList from '../../components/GrainList';
import jsdom from 'mocha-jsdom';
import React from 'react';

chai.should();

describe('GrainList', function () {
  jsdom();

  const onDeleteClick = () => 'delete clicked';
  let grains;

  beforeEach(function () {
    grains = [
      {
        id: 1,
        type: 'someType',
        weight: 9,
      },
    ];
  });

  it('should render GrainItems', function () {
    const grainList = createGrainList(grains, onDeleteClick),
          grainItem = findRenderedComponentWithType(grainList, GrainItem);

    grainItem.props.id.should.equal(1);
    grainItem.props.type.should.equal('someType');
    grainItem.props.weight.should.equal(9);
    grainItem.props.percentage.should.equal(1);
  });

  it('should calculate percentage', function () {
    grains.push({
      id: 2,
      type: 'someType2',
      weight: 3,
    });

    const grainList = createGrainList(grains, onDeleteClick),
          grainItems = scryRenderedComponentsWithType(grainList, GrainItem);

    find(grainItems, grain => grain.props.id === 1).props.percentage.should.equal(0.75);
    find(grainItems, grain => grain.props.id === 2).props.percentage.should.equal(0.25);
  });

  it('should pass props to GrainItems', function () {
    const grainList = createGrainList(grains, onDeleteClick),
          grainItem = findRenderedComponentWithType(grainList, GrainItem);

    grainItem.props.onDeleteClick().should.equal(onDeleteClick());
  });
});

function createGrainList (grains, onDeleteClick) {
  return renderIntoDocument(
      <GrainList grains={grains} onDeleteClick={onDeleteClick}/>
  );
}
