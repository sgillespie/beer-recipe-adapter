jest.dontMock('../../components/GrainItem');

const find = require('lodash/collection/find'),
      GrainItem = require('../../components/GrainItem'),
      React = require('react/addons'),
      TestUtils = React.addons.TestUtils;

describe('GrainItem', function () {
  const onDeleteClick = () => 'delete clicked',
        grain = {
          id: 1,
          type: 'someType',
          weight: 9.5,
        },

        grainItem = TestUtils.renderIntoDocument(
            <table>
              <tbody>
                <GrainItem grain={grain}
                           percentage={1}
                           onDeleteClick={onDeleteClick}/>
              </tbody>
            </table>
        );

  it('displays grain type', function () {
    expect(findTdWithText(grainItem, grain.type)).toBeTruthy();
  });

  it('calculates weight', function () {
    expect(findTdWithText(grainItem, '9/8')).toBeTruthy();
  });

  it('displays percentage', function () {
    expect(findTdWithText(grainItem, '100.0%')).toBeTruthy();
  });
});

function findTdWithText (tree, text) {
  const tds = TestUtils.scryRenderedDOMComponentsWithTag(tree, 'td');
  return find(tds, td => {
    return TestUtils.isDOMComponent(td) && React.findDOMNode(td).textContent === text;
  });
}

