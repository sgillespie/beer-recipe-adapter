import EfficiencyField from './EfficiencyField';
import GravityField from './GravityField';
import { Input, Col, Row } from 'react-bootstrap';
import React, { PropTypes } from 'react';
import VolumeField from './VolumeField';

module.exports = React.createClass({
  propTypes: {
    onChangeEfficiency: PropTypes.func.isRequired,
    onChangeGravity: PropTypes.func.isRequired,
    onChangeVolume: PropTypes.func.isRequired,
    targets: PropTypes.shape({
      efficiency: PropTypes.number.isRequired,
      gravity: PropTypes.number.isRequired,
      volume: PropTypes.number.isRequired,
    }).isRequired,
  },

  render: function () {
    return (
        <Row>
          <Col xs={3}>
            <GravityField onChange={this.props.onChangeGravity}
                          ref="gravity"
                          value={this.props.targets.gravity}/>
          </Col>
          <Col xs={3}>
            <VolumeField onChange={this.props.onChangeVolume}
                         ref="volume"
                         value={this.props.targets.volume}/>
          </Col>
          <Col xs={3}>
            <EfficiencyField onChange={this.props.onChangeEfficiency}
                             value={this.props.targets.efficiency}
                             ref="efficiency"/>
          </Col>
        </Row>
    );
  },
});
