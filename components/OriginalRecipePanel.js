import GrainInput from './GrainInput';
import GrainList from './GrainList';
import { Panel } from 'react-bootstrap';
import React, { PropTypes } from 'react';

module.exports = React.createClass({
  propTypes: {
    grains: PropTypes.array.isRequired,
    onAddClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired,
  },

  render: function () {
    const header = (<h4>Original Grain Bill</h4>);

    return (
        <Panel header={header} bsStyle="primary">
          <GrainList grains={this.props.grains}
                     onDeleteClick={this.props.onDeleteClick} />

          <GrainInput onAddClick={this.props.onAddClick} />
        </Panel>
    );
  },
});
