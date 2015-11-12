import { Button, Col, Glyphicon, Row } from 'react-bootstrap';
import GrainTypeField from './GrainTypeField';
import GrainWeightLbsField from './GrainWeightLbsField';
import GrainWeightOzField from './GrainWeightOzField';
import React, { PropTypes } from 'react';

module.exports = React.createClass({
  propTypes: {
    onAddClick: PropTypes.func.isRequired,
  },

  onAddClick: function () {
    const grainType = this.refs.grainType.getValue(),
          inputLbs = this.refs.weightLbs.getValue(),
          inputOz = this.refs.weightOz.getValue(),

          lbs = parseInt(inputLbs, 10),
          oz = parseInt(inputOz, 10),

          weight = lbs + (oz / 16);

    this.props.onAddClick(grainType, weight);
  },

  render: function () {
    return (
        <form>
          <Row>
            <Col xs={4}>
              <GrainTypeField ref="grainType"/>
            </Col>
            <Col xs={2}>
              <GrainWeightLbsField ref="weightLbs"/>
            </Col>
            <Col xs={2}>
              <GrainWeightOzField ref="weightOz"/>
            </Col>

            <Col xs={4}>
              <Button onClick={this.onAddClick}>
                <Glyphicon glyph="ok"/>
              </Button>
                <Button type="reset">
                <Glyphicon glyph="remove"/>
              </Button>
            </Col>
          </Row>
        </form>
    );
  },
});
