import { Button } from 'react-bootstrap';
import chai from 'chai';
import find from 'lodash/collection/find';
import { findDOMNode } from 'react-dom';
import {
  findRenderedComponentWithType,
  isDOMComponent,
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  Simulate,
} from 'react-addons-test-utils';
import sinon from 'sinon-chai';
import GrainItem from '../../components/GrainItem';
import jsdom from 'mocha-jsdom';
import 'mocha-sinon';
import React, { PropTypes } from 'react';

const should = chai.should();
chai.use(sinon);

const WrapDOMNode = React.createClass({
  propTypes: {
    child: PropTypes.object.isRequired,
  },

  render: function () {
    return (
      <div>
        {this.props.child}
      </div>
    );
  },
});

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
    const grainListItem = (
          <table>
            <tbody>
              <GrainItem grain={grain}
                         onDeleteClick={onDeleteClick}
                         percentage={1}/>
            </tbody>
          </table>
    );

    grainItem = renderIntoDocument(
        <WrapDOMNode child={grainListItem}/>
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
    const deleteButton = findRenderedComponentWithType(
      grainItem, Button);
    const button = findDOMNode(deleteButton);

    should.exist(button);
    Simulate.click(button);

    onDeleteClick.should.have.been.calledWith(grain.id);
  });
});

function findTdWithText (tree, text) {
  const tds = scryRenderedDOMComponentsWithTag(tree, 'td');
  return find(tds, td => {
    return isDOMComponent(td) && findDOMNode(td).textContent === text;
  });
}
