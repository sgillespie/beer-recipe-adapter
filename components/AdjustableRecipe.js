const AdjustedRecipePanel = require('./AdjustedRecipePanel'),
      OriginalRecipePanel = require('./OriginalRecipePanel'),
      RecipeTargetsInput = require('./RecipeTargetsInput'),
      React = require('react');

module.exports = React.createClass({
  propTypes: {
    grains: React.PropTypes.array.isRequired,
    onAddClick: React.PropTypes.func.isRequired,
    onDeleteClick: React.PropTypes.func.isRequired,
  },

  render: function () {
    return (
        <div className="container">
          <div className="page-header">
            <h1>Beer Recipe Adapter <small>Adapt any recipe to fit your needs</small></h1>
          </div>

          <RecipeTargetsInput/>
          <OriginalRecipePanel grains={this.props.grains}
                               onAddClick={this.props.onAddClick}
                               onDeleteClick={this.props.onDeleteClick} />

          <AdjustedRecipePanel grains={this.props.grains}/>
        </div>
    );
  },
});
