var React = require('react'),
    bootstrap = require('react-bootstrap')

var NavBar = React.createClass({
  render: function () {
    return (
        <bootstrap.Navbar brand={<a href="#">Beer Recipe Adapter</a>} inverse></bootstrap.Navbar>
    );
  }
});

var AdjustableRecipe = React.createClass({
  propTypes: {
    grains: React.PropTypes.array.isRequired,
    onAddClick: React.PropTypes.func.isRequired,
  },
  
  render: function () {
    return (
        <div className="container">
          <AdjustableRecipeHeader/>
          <RecipeTargets/>
          <OriginalRecipePanel grains={this.props.grains} onAddClick={this.props.onAddClick}/>
          <AdjustedRecipePanel grains={this.props.grains}/>
        </div>
    );
  }
});

var AdjustableRecipeHeader = React.createClass({
  render: function () {
    return (
        <div className="page-header">
          <h1>Beer Recipe Adapter <small>Adapt any recipe to fit your needs</small></h1>
        </div>
    );
  }
});

var RecipeTargets = React.createClass({
  render: function () {
    return (
        <bootstrap.Row>
          <bootstrap.Col xs={3}>
            <bootstrap.Input type="text"
                             label="Preboil Gravity (SG)"
                             placeholder="1.045"
                             ref="preboilGravityInput" />
          </bootstrap.Col>
          <bootstrap.Col xs={3}>
            <bootstrap.Input type="text"
                             label="Preboil Volume (Gallons)"
                             placeholder="6.5"
                             ref="preboilVolumeInput" />
          </bootstrap.Col>
          <bootstrap.Col xs={3}>
            <bootstrap.Input type="text"
                             label="Extract Efficiency"
                             placeholder="60"
                             ref="extractEfficiencyInput"
                             addonAfter="%"/>
          </bootstrap.Col>
        </bootstrap.Row>
    );
  }
});

var OriginalRecipePanel = React.createClass({
  propTypes: {
    grains: React.PropTypes.array.isRequired,
    onAddClick: React.PropTypes.func.isRequired,
  },
  
  render: function () {
    var header = (<h4>Original Grain Bill</h4>);
    
    return (
        <bootstrap.Panel header={header} bsStyle="primary">
          <GrainList grains={this.props.grains}/>
          <GrainInput onAddClick={this.props.onAddClick}/>
        </bootstrap.Panel>
    );
  }
});

var AdjustedRecipePanel = React.createClass({
  propTypes: {
    grains: React.PropTypes.array.isRequired,
  },
  
  render: function () {
    var header = (<h4>Adjusted Grain Bill</h4>);
    
    return (
        <bootstrap.Panel header={header} bsStyle="primary">
          <GrainList grains={this.props.grains}/>
        </bootstrap.Panel>
    );
  }
});

var GrainList = React.createClass({
  propTypes: {
    grains: React.PropTypes.array.isRequired,
  },
  
  render: function () {
    var totalWeight = this.props.grains.reduce(function (accum, grain) {
      return accum + grain.weight
    }, 0);
    
    var grains = this.props.grains.map(function (grain) {
      return <GrainItem key={grain.id}
                        type={grain.type}
                        weight={grain.weight}
                        percentage={grain.weight / totalWeight} />
    }.bind(this));

    return (
        <bootstrap.Table>
          <thead>
            <tr>
              <th>Grain</th>
              <th>Weight (lbs/oz)</th>
              <th>%</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {grains}
          </tbody>
        </bootstrap.Table>
    );
  }
});

var GrainItem = React.createClass({
  propTypes: {
    type: React.PropTypes.string.isRequired,
    weight: React.PropTypes.number.isRequired,
    percentage: React.PropTypes.number.isRequired,
  },
  
  render: function () {
    var lbs = Math.floor(this.props.weight),
        oz = (this.props.weight - lbs) * 16
    
    return (
        <tr>
          <td>{this.props.type}</td>
          <td>{lbs}/{oz}</td>
          <td>{(this.props.percentage * 100).toFixed(1)}%</td>
          <td className="text-right">
            <bootstrap.Button>
              <bootstrap.Glyphicon glyph="remove" />
            </bootstrap.Button>
          </td>
        </tr>
    );
  }
})

var GrainInput = React.createClass({
  propTypes: {
    onAddClick: React.PropTypes.func.isRequired,
  },
  
  onAddClick: function (e) {
    var grainType = this.refs.grainTypeInput.getValue(),
        inputLbs = this.refs.weightLbsInput.getValue(),
        inputOz = this.refs.weightOzInput.getValue(),
        
        lbs = parseInt(inputLbs, 10),
        oz = parseInt(inputOz, 10),

        weight = lbs + (oz/16)

    this.props.onAddClick(grainType, weight)
  },

  render: function () {
    return (
        <form>
          <bootstrap.Row>
            <bootstrap.Col xs={4}>
              <bootstrap.Input type="text"
                               placeholder="Grain/Malt Type"
                               ref="grainTypeInput"/>
            </bootstrap.Col>
            <bootstrap.Col xs={2}>
              <bootstrap.Input type="string"
                               placeholder="Weight (Lbs)"
                               ref="weightLbsInput"
                               addonAfter="lbs"/>
            </bootstrap.Col>
            <bootstrap.Col xs={2}>
              <bootstrap.Input type="text"
                               placeholder="Ounces"
                               ref="weightOzInput"
                               addonAfter="oz"/>
            </bootstrap.Col>

            <bootstrap.Col xs={4}>
              <bootstrap.Button onClick={this.onAddClick}>
                <bootstrap.Glyphicon glyph="ok"/>
              </bootstrap.Button>
                <bootstrap.Button type="reset">
                <bootstrap.Glyphicon glyph="remove"/>
              </bootstrap.Button>
            </bootstrap.Col>
          </bootstrap.Row>
        </form>
    );
  }
})

module.exports = {
  NavBar: NavBar,
  AdjustableRecipe: AdjustableRecipe,
}
