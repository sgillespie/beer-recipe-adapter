const bootstrap = require('react-bootstrap'),
      NavBar = require('../../components/NavBar.js'),
      React = require('react/addons'),
      skinDeep = require('skin-deep');

require('chai').should();

describe('NavBar', function () {
  let tree, vdom;

  beforeEach(function () {
    tree = skinDeep.shallowRender(
        <NavBar/>
    );

    vdom = tree.getRenderOutput();
  });

  it('should render', function () {
    const text = tree
            .findNode('Navbar')
            .props
            .brand
            .props
            .children;

    vdom.type.should.equal(bootstrap.Navbar);
    text.should.not.be.empty;
  });
});
