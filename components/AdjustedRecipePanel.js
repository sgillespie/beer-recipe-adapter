import GrainList from './GrainList';
import { Panel } from 'react-bootstrap';
import React, { PropTypes } from 'react';

module.exports = React.createClass({
  propTypes: {
    grains: PropTypes.array.isRequired,
    targets: PropTypes.shape({
      efficiency: PropTypes.number.isRequired,
      gravity: PropTypes.number.isRequired,
      volume: PropTypes.number.isRequired,
    }).isRequired,
  },

  render: function () {
    const header = (<h4>Adjusted Grain Bill</h4>);

    return (
        <Panel header={header} bsStyle="primary">
          <GrainList grains={this.props.grains}
                     targets={this.props.targets}/>
        </Panel>
    );
  },
});
