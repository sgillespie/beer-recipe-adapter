const bootstrap = require('react-bootstrap'),
      GrainList = require('./GrainList'),
      React = require('react');

module.exports = React.createClass({
  propTypes: {
    grains: React.PropTypes.array.isRequired,
  },

  render: function () {
    const header = (<h4>Adjusted Grain Bill</h4>);

    return (
        <bootstrap.Panel header={header} bsStyle="primary">
          <GrainList grains={this.props.grains}/>
        </bootstrap.Panel>
    );
  },
});
