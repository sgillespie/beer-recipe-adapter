const bootstrap = require('react-bootstrap'),
      React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
        <bootstrap.Navbar brand={<a href="#">Beer Recipe Adapter</a>} inverse></bootstrap.Navbar>
    );
  },
});
