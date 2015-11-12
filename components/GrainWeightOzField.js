import { Input } from 'react-bootstrap';
import React from 'react';

export default React.createClass({
  getValue: function () {
    return this.refs.weightOz.getValue();
  },

  render: function () {
    return (
        <Input type="text"
               ref="weightOz"
               placeholder="Ounces"
               addonAfter="oz"/>
    );
  },
});
