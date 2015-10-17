import { Input, Col, Row } from 'react-bootstrap';
import React from 'react';

module.exports = React.createClass({
  getInitialState: function () {
    return {
      efficiency: 0.7,
      gravity: 1.045,
      volume: 6.5,
    };
  },

  onChange: function () {
    this.setState({
      efficiency: this.refs.efficiency.getValue(),
      gravity: this.refs.gravity.getValue(),
      volume: this.refs.volume.getValue(),
    });
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
