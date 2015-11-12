import { Input } from 'react-bootstrap';
import React from 'react';

export default React.createClass({
  getValue: function () {
    return this.refs.grainType.getValue();
  },

  render: function () {
    return (
        <Input type="text"
               ref="grainType"
               placeholder="Grain/Malt Type"/>
    );
  },
});
