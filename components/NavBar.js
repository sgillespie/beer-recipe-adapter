import { Navbar } from 'react-bootstrap';
import React from 'react';

export default React.createClass({
  render: function () {
    return (
        <Navbar brand={<a href="#">Beer Recipe Adapter</a>} inverse/>
    );
  },
});
