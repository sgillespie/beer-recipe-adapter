var actions = require('../actions/recipe'),
    bootstrap = require('react-bootstrap'),
    components = require('../components'),
    React = require('react'),
    redux = require('react-redux');

var RecipeApp = React.createClass({
  propTypes: {
    grains: React.PropTypes.array.isRequired,
    dispatch: React.PropTypes.func.isRequired,
  },
  
  render: function () {
    var dispatch = this.props.dispatch
    
    var onAddClick = function (grainType, weight) {
      dispatch(actions.addGrain(grainType, weight))
    };

    return (
        <div>
          <components.NavBar/>
          <components.AdjustableRecipe grains={this.props.grains} onAddClick={onAddClick}/>
        </div>
    );
  }
});

function select (state) {
  return {
    grains: state.result.map(function (id) {
      return state.entities.grains[id];
    })
  };
};

module.exports = redux.connect(select)(RecipeApp)
