import AdjustedRecipePanel from './AdjustedRecipePanel';
import OriginalRecipePanel from './OriginalRecipePanel';
import RecipeTargets from './RecipeTargets';
import React, { PropTypes } from 'react';

export default React.createClass({
  propTypes: {
    grains: PropTypes.array.isRequired,
    targets: PropTypes.shape({
      efficiency: PropTypes.number.isRequired,
      gravity: PropTypes.number.isRequired,
      volume: PropTypes.number.isRequired,
    }).isRequired,
    onAddClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired,
    onChangeEfficiency: PropTypes.func.isRequired,
    onChangeGravity: PropTypes.func.isRequired,
    onChangeVolume: PropTypes.func.isRequired,
  },

  render: function () {
    return (
        <div className="container">
          <div className="page-header">
            <h1>Beer Recipe Adapter <small>Adapt any recipe to fit your needs</small></h1>
          </div>

          <RecipeTargets targets={this.props.targets}
                         onChangeEfficiency={this.props.onChangeEfficiency}
                         onChangeGravity={this.props.onChangeGravity}
                         onChangeVolume={this.props.onChangeVolume}/>

          <OriginalRecipePanel grains={this.props.grains}
                               onAddClick={this.props.onAddClick}
                               onDeleteClick={this.props.onDeleteClick}/>

          <AdjustedRecipePanel grains={this.props.grains}
                               targets={this.props.targets}/>
        </div>
    );
  },
});
