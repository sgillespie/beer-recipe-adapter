import { Button, Glyphicon } from 'react-bootstrap';
import React, { PropTypes } from 'react';

export default React.createClass({
  propTypes: {
    grain: PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      weight: PropTypes.number.isRequired,
    }).isRequired,
    percentage: PropTypes.number.isRequired,
    onDeleteClick: PropTypes.func,
  },

  onDeleteClick: function () {
    this.props.onDeleteClick(this.props.grain.id);
  },

  render: function () {
    const lbs = Math.floor(this.props.grain.weight),
          oz = (this.props.grain.weight - lbs) * 16;

    return (
        <tr>
          <td>{this.props.grain.type}</td>
          <td>{lbs}/{oz}</td>
          <td>{(this.props.percentage * 100).toFixed(1)}%</td>
          <td className="text-right">
            <Button onClick={this.onDeleteClick}>
              <Glyphicon glyph="remove" />
            </Button>
          </td>
        </tr>
    );
  },
});
