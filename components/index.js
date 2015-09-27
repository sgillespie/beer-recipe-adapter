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
  render: function () {
    return (
        <div className="container">
          <AdjustableRecipeHeader/>
          <RecipeTargets/>
          <OriginalRecipePanel grains={this.props.grains}/>
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
  render: function () {
    var header = (<h4>Original Grain Bill</h4>);
    
    return (
        <bootstrap.Panel header={header} bsStyle="primary">
          <GrainList grains={this.props.grains}/>
          <GrainInput/>
        </bootstrap.Panel>
    );
  }
});

var AdjustedRecipePanel = React.createClass({
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
  render: function () {
    var grains = this.props.grains.map(function (grain) {
      return <GrainItem key={grain.key}
                        grainType={grain.type}
                        weightLbs={grain.weightLbs}
                        weightOz={grain.weightOz}
                        percent={grain.percent} />
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
  render: function () {
    return (
        <tr>
          <td>{this.props.grainType}</td>
          <td>{this.props.weightLbs}/{this.props.weightOz}</td>
          <td>{this.props.percent}%</td>
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
              <bootstrap.Input type="text"
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
              <bootstrap.Button>
                <bootstrap.Glyphicon glyph="ok"/>
              </bootstrap.Button>
              <bootstrap.Button>
                <bootstrap.Glyphicon glyph="remove"/>
              </bootstrap.Button>
            </bootstrap.Col>
          </bootstrap.Row>
        </form>
    );
  }
})

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
  render: function () {
    return (
        <div>
          <NavBar/>
          <AdjustableRecipe grains={grains}/>
        </div>
    );
  }
});

module.exports = RecipeApp
