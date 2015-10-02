const bootstrap = require('react-bootstrap'),
      GrainInput = require('./GrainInput'),
      GrainList = require('./GrainList'),
      React = require('react');

module.exports = React.createClass({
  propTypes: {
    grains: React.PropTypes.array.isRequired,
    onAddClick: React.PropTypes.func.isRequired,
    onDeleteClick: React.PropTypes.func.isRequired,
  },

  render: function () {
    const header = (<h4>Original Grain Bill</h4>);

    return (
        <bootstrap.Panel header={header} bsStyle="primary">
          <GrainList grains={this.props.grains}
                     onDeleteClick={this.props.onDeleteClick} />

          <GrainInput onAddClick={this.props.onAddClick} />
        </bootstrap.Panel>
    );
  },
});
