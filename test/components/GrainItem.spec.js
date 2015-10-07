const bootstrap = require('react-bootstrap'),
      find = require('lodash/collection/find'),
      GrainItem = require('../../components/GrainItem'),
      jsdom = require('mocha-jsdom'),
      React = require('react/addons'),
      chai = require('chai'),
      should = chai.should(),
      TestUtils = React.addons.TestUtils;

chai.use(require('sinon-chai'));
require('mocha-sinon');

describe('GrainItem', function () {
  jsdom();

  const grain = {
    id: 1,
    type: 'someType',
    weight: 9.5,
  };

  let grainItem, onDeleteClick;
  beforeEach(function () {
    onDeleteClick = this.sinon.spy();

    grainItem = TestUtils.renderIntoDocument(
        <table>
          <tbody>
            <GrainItem grain={grain}
                       onDeleteClick={onDeleteClick}
                       percentage={1}/>
          </tbody>
        </table>
    );
  });

  it('renders grain type', function () {
    should.exist(findTdWithText(grainItem, grain.type));
  });

  it('should calculate weight', function () {
    should.exist(findTdWithText(grainItem, '9/8'));
  });

  it('should display percentage', function () {
    should.exist(findTdWithText(grainItem, '100.0%'));
  });

  it('should call onDeleteClick when delete clicked', function () {
    const deleteButton = TestUtils.findRenderedComponentWithType(
      grainItem, bootstrap.Button);
    const button = React.findDOMNode(deleteButton);

    should.exist(button);
    TestUtils.Simulate.click(button);

    onDeleteClick.should.have.been.calledWith(grain.id);
  });
});

function findTdWithText (tree, text) {
  const tds = TestUtils.scryRenderedDOMComponentsWithTag(tree, 'td');
  return find(tds, td => {
    return TestUtils.isDOMComponent(td) && React.findDOMNode(td).textContent === text;
  });
}
