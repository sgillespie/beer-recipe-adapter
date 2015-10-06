jest.dontMock('../../components/GrainList');

const find = require('lodash/collection/find'),
      GrainItem = require('../../components/GrainItem'),
      GrainList = require('../../components/GrainList'),
      React = require('react/addons'),
      TestUtils = React.addons.TestUtils;

describe('GrainList', function () {
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

  it('should create GrainItems', function () {
    const grainList = createGrainList(grains, onDeleteClick),
          grainItem = TestUtils.findRenderedComponentWithType(grainList, GrainItem);

    expect(grainItem.props.id).toBe(1);
    expect(grainItem.props.type).toBe('someType');
    expect(grainItem.props.weight).toBe(9);
    expect(grainItem.props.percentage).toBe(1);
  });

  it('should calculate percentage', function () {
    grains.push({
      id: 2,
      type: 'someType2',
      weight: 3,
    });

    const grainList = createGrainList(grains, onDeleteClick),
          grainItems = TestUtils.scryRenderedComponentsWithType(grainList, GrainItem);

    expect(find(grainItems, grain => grain.props.id === 1).props.percentage).toBe(0.75);
    expect(find(grainItems, grain => grain.props.id === 2).props.percentage).toBe(0.25);
  });

  it('should pass onDeleteClick to GrainItems', function () {
    const grainList = createGrainList(grains, onDeleteClick),
          grainItem = TestUtils.findRenderedComponentWithType(grainList, GrainItem);

    expect(grainItem.props.onDeleteClick()).toBe(onDeleteClick());
  });
});

function createGrainList (grains, onDeleteClick) {
  return TestUtils.renderIntoDocument(
      <GrainList grains={grains} onDeleteClick={onDeleteClick}/>
  );
}
