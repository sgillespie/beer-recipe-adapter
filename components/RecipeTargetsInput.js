import { Input, Col, Row } from 'react-bootstrap';
import React, { PropTypes } from 'react';

module.exports = React.createClass({
  propTypes: {
    onChangeTargets: PropTypes.func.isRequired,
  },

  getInitialState: function () {
    return {
      efficiency: 0.7,
      gravity: 1.045,
      volume: 6.5,
    };
  },

  onChange: function () {
    const efficiency = parseFloat(this.refs.efficiency.getValue()),
          gravity = parseFloat(this.refs.gravity.getValue()),
          volume = parseFloat(this.refs.volume.getValue()),
          state = {
            efficiency,
            gravity,
            volume,
          };

    this.setState(state);

    if (this.getValidationState(state).isValid) {
      this.props.onChangeTargets(efficiency, gravity, volume);
    }
  },

  getValidationState: function (state) {
    const { efficiency, gravity, volume } = state,
          isEfficiencyValid = !isNaN(efficiency) &&
            efficiency > 0 &&
            efficiency <= 1,
          isGravityValid = !isNaN(gravity) &&
            gravity >= 1 &&
            gravity <= 2,
          isVolumeValid = !isNaN(volume);

    return {
      isValid: isEfficiencyValid && isGravityValid && isVolumeValid,
      efficiency: {
        isValid: isEfficiencyValid,
      },
      gravity: {
        isValid: isGravityValid,
      },
      volume: {
        isValid: isVolumeValid,
      },
    };
  },

  render: function () {
    return (
        <Row>
          <Col xs={3}>
            <Input type="text"
                   label="Preboil Gravity (SG)"
                   ref="gravity"
                   onChange={this.onChange}
                   bsStyle={this.getValidationState(this.state).gravity.isValid ? 'success' : 'error'}
                   defaultValue={this.state.gravity}
                   hasFeedback/>
          </Col>
          <Col xs={3}>
            <Input type="text"
                   label="Preboil Volume (Gallons)"
                   placeholder="6.5"
                   ref="volume"
                   onChange={this.onChange}
                   defaultValue={this.state.volume}
                   bsStyle={this.getValidationState(this.state).volume.isValid ? 'success' : 'error'}
                   hasFeedback/>
          </Col>
          <Col xs={3}>
            <Input type="text"
                   label="Extract Efficiency"
                   placeholder="60"
                   ref="efficiency"
                   onChange={this.onChange}
                   defaultValue={this.state.efficiency}
                   bsStyle={this.getValidationState(this.state).efficiency.isValid ? 'success' : 'error'}
                   hasFeedback/>
          </Col>
        </Row>
    );
  },
});
