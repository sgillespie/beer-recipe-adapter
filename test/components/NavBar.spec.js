jest.dontMock('../../components/NavBar.js');

const NavBar = require('../../components/NavBar'),
      React = require('react/addons'),
      TestUtils = React.addons.TestUtils;

describe('NavBar', function () {
  it('has text', function () {
    const navBar = TestUtils.renderIntoDocument(
      <NavBar/>
    );

    expect(React.findDOMNode(navBar).textContent).toBeTruthy();
  });
});
