import chai from 'chai';
import { findDOMNode } from 'react-dom';
import {
  findRenderedComponentWithType,
  renderIntoDocument
} from 'react-addons-test-utils';
import jsdom from 'mocha-jsdom';
import { Navbar, NavBrand } from 'react-bootstrap';
import NavBar from '../../components/NavBar';
import React from 'react';

chai.should();

describe('NavBar', function () {
  jsdom();

  let navBar;
  beforeEach(function () {
    navBar = renderIntoDocument(
      <NavBar/>
    );
  });

  it('should render', function () {
    const brand = findRenderedComponentWithType(navBar, NavBrand);
    findDOMNode(brand).textContent.should.not.be.empty;
  });
});
