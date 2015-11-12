import { Input } from 'react-bootstrap';
import React from 'react';

export default React.createClass({
  getValue: function () {
    return this.refs.weightLbs.getValue();
  },

  render: function () {
    return (
        <Input type="text"
               ref="weightLbs"
               placeholder="Weight (Lbs)"
               addonAfter="lbs"/>
    );
  },
});
