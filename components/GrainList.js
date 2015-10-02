const bootstrap = require('react-bootstrap'),
      GrainItem = require('./GrainItem'),
      React = require('react');

module.exports = React.createClass({
  propTypes: {
    grains: React.PropTypes.array.isRequired,
    onDeleteClick: React.PropTypes.func.isRequired,
  },

  render: function () {
    const totalWeight = this.props.grains.reduce(function (accum, grain) {
      return accum + grain.weight;
    }, 0);

    const grains = this.props.grains.map(function (grain) {
      return (
          <GrainItem key={grain.id}
                     grain={grain}
                     id={grain.id}
                     type={grain.type}
                     weight={grain.weight}
                     percentage={grain.weight / totalWeight}
                     onDeleteClick={this.props.onDeleteClick} />
      );
    }.bind(this));

    return (
        <bootstrap.Table>
          <thead>
            <tr>
              <th>Grain</th>
              <th>Weight (lbs/oz)</th>
              <th>%</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {grains}
          </tbody>
        </bootstrap.Table>
    );
  },
});
