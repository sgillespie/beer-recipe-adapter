const React = require('react'),
      bootstrap = require('react-bootstrap');

module.exports = React.createClass({
  propTypes: {
    onAddClick: React.PropTypes.func.isRequired,
  },

  onAddClick: function () {
    const grainType = this.refs.grainTypeInput.getValue(),
          inputLbs = this.refs.weightLbsInput.getValue(),
          inputOz = this.refs.weightOzInput.getValue(),

          lbs = parseInt(inputLbs, 10),
          oz = parseInt(inputOz, 10),

          weight = lbs + (oz / 16);

    this.props.onAddClick(grainType, weight);
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
  },
});
