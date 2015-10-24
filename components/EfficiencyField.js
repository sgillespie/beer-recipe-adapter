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
    const value = parseFloat(this.refs.efficiency.getValue()),
          decimalValue = this.toDecimal(value);

    this.setState({
      value: decimalValue,
    });

    if (this.getValidationState(value) === 'success') {
      this.props.onChange(decimalValue);
    }
  },

  getValidationState: function (value) {
    const result = !isNaN(value) && value > 0 && value <= 100;
    return result ? 'success' : 'error';
  },

  toPercentage: function (value) {
    return value * 100;
  },

  toDecimal: function (value) {
    return value / 100;
  },

  render: function () {
    return (
        <Input type="text"
               label="Extract Efficiency"
               placeholder="60"
               ref="efficiency"
               onChange={this.onChange}
               defaultValue={this.toPercentage(this.state.value)}
               bsStyle={this.getValidationState(this.state.value)}
               hasFeedback/>
    );
  },
});
