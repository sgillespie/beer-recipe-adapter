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
    const value = parseFloat(this.refs.volume.getValue());

    this.setState({
      value,
    });

    if (this.getValidationState(value) === 'success') {
      this.props.onChange(value);
    }
  },

  getValidationState: function (value) {
    const result = !isNaN(value) && value > 0;
    return result ? 'success' : 'error';
  },

  render: function () {
    return (
        <Input bsStyle={this.getValidationState(this.state.value)}
               defaultValue={this.props.value}
               label="Preboil Volume (Gallons)"
               onChange={this.onChange}
               ref="volume"
               type="text"
               hasFeedback/>
    );
  },
});
