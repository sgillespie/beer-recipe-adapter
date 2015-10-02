const bootstrap = require('react-bootstrap'),
      React = require('react');

module.exports = React.createClass({
  propTypes: {
    grain: React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      type: React.PropTypes.string.isRequired,
      weight: React.PropTypes.number.isRequired,
    }).isRequired,
    percentage: React.PropTypes.number.isRequired,
    onDeleteClick: React.PropTypes.func.isRequired,
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
          <bootstrap.Button onClick={this.onDeleteClick}>
              <bootstrap.Glyphicon glyph="remove" />
            </bootstrap.Button>
          </td>
        </tr>
    );
  },
});
