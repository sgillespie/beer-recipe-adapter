var components = require('../components'),
    React = require('react'),
    bootstrap = require('react-bootstrap')

var grains = [
  {
    key: 1,
    type: 'Two Row (US)',
    weightLbs: '12',
    weightOz: '2',
    percent: '91',
  },
  {
    key: 2,
    type: 'Crystal 40L',
    weightLbs: '1',
    weightOz: '0',
    percent: '7',
  },
  {
    key: 3,
    type: 'Munich',
    weightLbs: '0',
    weightOz: '6',
    percent: '1',
  },
];

var RecipeApp = React.createClass({
  propTypes: {
    grains: React.PropTypes.array.isRequired,
    dispatch: React.PropTypes.func.isRequired,
  },
  
  render: function () {
    return (
        <div>
          <components.NavBar/>
          <components.AdjustableRecipe grains={grains}/>
        </div>
    );
  }
});

module.exports = RecipeApp
