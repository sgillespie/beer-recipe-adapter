import React, { PropTypes }  from 'react';
import { Button, Col, Glyphicon, Input, Row } from 'react-bootstrap';

module.exports = React.createClass({
  propTypes: {
    onAddClick: PropTypes.func.isRequired,
  },

  onAddClick: function () {
    const grainType = this.refs.grainTypeInput.getValue(),
          inputLbs = this.refs.weightLbsInput.getValue(),
          inputOz = this.refs.weightOzInput.getValue(),

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
              <Input type="text"
                     placeholder="Grain/Malt Type"
                     ref="grainTypeInput"/>
            </Col>
            <Col xs={2}>
              <Input type="text"
                     placeholder="Weight (Lbs)"
                     ref="weightLbsInput"
                     addonAfter="lbs"/>
            </Col>
            <Col xs={2}>
              <Input type="text"
                     placeholder="Ounces"
                     ref="weightOzInput"
                     addonAfter="oz"/>
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
