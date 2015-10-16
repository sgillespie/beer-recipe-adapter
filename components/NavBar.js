import { Navbar, NavBrand } from 'react-bootstrap';
import React from 'react';

export default React.createClass({
  render: function () {
    return (
        <Navbar inverse>
          <NavBrand>
            <a href="#">Beer Recipe Adapter</a>
          </NavBrand>
        </Navbar>
    );
  },
});
