const bootstrap = require('react-bootstrap'),
      jsdom = require('mocha-jsdom'),
      NavBar = require('../../components/NavBar.js'),
      React = require('react/addons'),
      TestUtils = React.addons.TestUtils;

require('chai').should();

describe('NavBar', function () {
  jsdom();

  let navBar;
  beforeEach(function () {
    navBar = TestUtils.renderIntoDocument(
      <NavBar/>
    );
  });

  it('should render', function () {
    const brand = TestUtils.findRenderedComponentWithType(navBar, bootstrap.Navbar);
    React.findDOMNode(brand).textContent.should.not.be.empty;
  });
});
