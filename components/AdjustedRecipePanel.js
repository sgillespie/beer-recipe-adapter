import GrainList from './GrainList';
import { Panel } from 'react-bootstrap';
import React from 'react';

module.exports = React.createClass({
  propTypes: {
    grains: React.PropTypes.array.isRequired,
  },

  render: function () {
    const header = (<h4>Adjusted Grain Bill</h4>);

    return (
        <Panel header={header} bsStyle="primary">
          <GrainList grains={this.props.grains}/>
        </Panel>
    );
  },
});
