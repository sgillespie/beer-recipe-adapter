const actions = require('../actions/recipe'),
      AdjustableRecipe = require('../components/AdjustableRecipe'),
      NavBar = require('../components/NavBar'),
      React = require('react'),
      redux = require('react-redux');

const RecipeApp = React.createClass({
  propTypes: {
    grains: React.PropTypes.array.isRequired,
    dispatch: React.PropTypes.func.isRequired,
  },

  render: function () {
    const dispatch = this.props.dispatch;

    const onAddClick = function (grainType, weight) {
      dispatch(actions.addGrain(grainType, weight));
    };

    const onDeleteClick = function (id) {
      dispatch(actions.deleteGrain(id));
    };

    return (
        <div>
          <NavBar/>
          <AdjustableRecipe grains={this.props.grains}
                            onAddClick={onAddClick}
                            onDeleteClick={onDeleteClick} />
        </div>
    );
  },
});

function select (state) {
  return {
    grains: state.result.map(function (id) {
      return state.entities.grains[id];
    }),
  };
}

module.exports = redux.connect(select)(RecipeApp);
