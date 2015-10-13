import chai from 'chai';
import { Navbar } from 'react-bootstrap';
import jsdom from 'mocha-jsdom';
import NavBar from '../../components/NavBar';
import React from 'react/addons';

const { TestUtils } = React.addons;
chai.should();

describe('NavBar', function () {
  jsdom();

  let navBar;
  beforeEach(function () {
    navBar = TestUtils.renderIntoDocument(
      <NavBar/>
    );
  });

  it('should render', function () {
    const brand = TestUtils.findRenderedComponentWithType(navBar, Navbar);
    React.findDOMNode(brand).textContent.should.not.be.empty;
  });
});
