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
    const efficiency = this.refs.efficiency.getValue(),
          gravity = this.refs.gravity.getValue(),
          volume = this.refs.volume.getValue();
    
    this.setState({
      efficiency,
      gravity,
      volume,
    });

    this.props.onChangeTargets(efficiency, gravity, volume);
  },

  render: function () {
    return (
        <Row>
          <Col xs={3}>
            <Input type="text"
                   label="Preboil Gravity (SG)"
                   ref="gravity"
                   onChange={this.onChange}
                   defaultValue={this.state.gravity}/>
          </Col>
          <Col xs={3}>
            <Input type="text"
                   label="Preboil Volume (Gallons)"
                   placeholder="6.5"
                   ref="volume"
                   onChange={this.onChange}
                   defaultValue={this.state.volume}/>
          </Col>
          <Col xs={3}>
            <Input type="text"
                   label="Extract Efficiency"
                   placeholder="60"
                   ref="efficiency"
                   onChange={this.onChange}
                   defaultValue={this.state.efficiency}
                   addonAfter="%"/>
          </Col>
        </Row>
    );
  },
});
