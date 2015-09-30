var bootstrap = require('react-bootstrap'),
    components = require('../components'),
    React = require('react'),
    redux = require('react-redux');

var RecipeApp = React.createClass({
  propTypes: {
    grains: React.PropTypes.array.isRequired,
    dispatch: React.PropTypes.func.isRequired,
  },
  
  render: function () {
    var onAddClick = function () {
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
    grains: state.grains
  };
};

module.exports = redux.connect(select)(RecipeApp)
