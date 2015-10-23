import EfficiencyField from './EfficiencyField';
import { Input, Col, Row } from 'react-bootstrap';
import React, { PropTypes } from 'react';

module.exports = React.createClass({
  propTypes: {
    onChangeEfficiency: PropTypes.func.isRequired,
    onChangeTargets: PropTypes.func.isRequired,
  },

  getInitialState: function () {
    return {
      gravity: 1.045,
      volume: 6.5,
    };
  },

  onChange: function () {
    const efficiency = 0.7, // XXX: CHANGEME
          gravity = parseFloat(this.refs.gravity.getValue()),
          volume = parseFloat(this.refs.volume.getValue()),
          state = {
            gravity,
            volume,
          };

    this.setState(state);

    if (this.getValidationState(state).isValid) {
      this.props.onChangeTargets(efficiency, gravity, volume);
    }
  },

  getValidationState: function (state) {
    const { gravity, volume } = state,
          isGravityValid = !isNaN(gravity) &&
            gravity >= 1 &&
            gravity <= 2,
          isVolumeValid = !isNaN(volume);

    return {
      isValid: isGravityValid && isVolumeValid,
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
            <EfficiencyField onChange={this.props.onChangeEfficiency}
                             value={1}
                             ref="efficiency"/>
          </Col>
        </Row>
    );
  },
});
