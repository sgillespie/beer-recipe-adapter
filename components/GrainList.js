import { Table } from 'react-bootstrap';
import GrainItem from './GrainItem';
import React, { PropTypes } from 'react';

export default React.createClass({
  propTypes: {
    grains: PropTypes.array.isRequired,
    onDeleteClick: PropTypes.func,
  },

  render: function () {
    const { grains, onDeleteClick } = this.props,
          totalWeight = grains.reduce((accum, grain) => accum + grain.weight, 0),

          grainItems = grains.map(grain => {
            return (
                <GrainItem key={grain.id}
                           grain={grain}
                           id={grain.id}
                           type={grain.type}
                           weight={grain.weight}
                           percentage={grain.weight / totalWeight}
                           onDeleteClick={onDeleteClick} />
            );
          });

    return (
        <Table>
          <thead>
            <tr>
              <th>Grain</th>
              <th>Weight (lbs/oz)</th>
              <th>%</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {grainItems}
          </tbody>
        </Table>
    );
  },
});
