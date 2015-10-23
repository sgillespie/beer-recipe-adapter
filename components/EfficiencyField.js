import { Input } from 'react-bootstrap';
import React, { PropTypes } from 'react';

export default React.createClass({
  propTypes: {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired,
  },

  getInitialState: function () {
    return {
      value: this.props.value,
    };
  },

  onChange: function () {
    const value = parseFloat(this.refs.efficiency.getValue());
    this.setState({
      value,
    });

    if (this.getValidationState(value) === 'success') {
      this.props.onChange(value);
    }
  },

  getValidationState: function (value) {
    const _value = value === undefined ? this.state.value : value,
          result = !isNaN(_value) && _value > 0 && _value <= 1;

    return result ? 'success' : 'error';
  },

  render: function () {
    return (
        <Input type="text"
               label="Extract Efficiency"
               placeholder="60"
               ref="efficiency"
               onChange={this.onChange}
               defaultValue={this.state.value}
               bsStyle={this.getValidationState(this.state.value)}
               hasFeedback/>
    );
  },
});
