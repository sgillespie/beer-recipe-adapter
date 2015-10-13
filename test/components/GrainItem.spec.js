import { Button } from 'react-bootstrap';
import chai from 'chai';
import sinon from 'sinon-chai';
import find from 'lodash/collection/find';
import GrainItem from '../../components/GrainItem';
import jsdom from 'mocha-jsdom';
import 'mocha-sinon';
import React, { findDOMNode } from 'react/addons';

const should = chai.should(),
      { TestUtils } = React.addons;

chai.use(sinon);

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
      grainItem, Button);
    const button = findDOMNode(deleteButton);

    should.exist(button);
    TestUtils.Simulate.click(button);

    onDeleteClick.should.have.been.calledWith(grain.id);
  });
});

function findTdWithText (tree, text) {
  const tds = TestUtils.scryRenderedDOMComponentsWithTag(tree, 'td');
  return find(tds, td => {
    return TestUtils.isDOMComponent(td) && findDOMNode(td).textContent === text;
  });
}
