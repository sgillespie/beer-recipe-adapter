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
    const value = parseFloat(this.refs.gravity.getValue());

    this.setState({
      value,
    });

    if (this.getValidationState(value) === 'success') {
      this.props.onChange(value);
    }
  },

  getValidationState: function (value) {
    const result = !isNaN(value) && value >= 1 && value <= 2;
    return result ? 'success' : 'error';
  },

  render: function () {
    return (
        <Input bsStyle={this.getValidationState(this.state.value)}
               defaultValue={this.props.value}
               label="Preboil Gravity (SG)"
               onChange={this.onChange}
               ref="gravity"
               type="text"
               hasFeedback/>
    );
  },
});
