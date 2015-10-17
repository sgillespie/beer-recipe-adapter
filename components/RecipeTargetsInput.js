const bootstrap = require('react-bootstrap'),
      React = require('react');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      efficiency: 0.7,
      gravity: 1.045,
      volume: 6.5,
    };
  },

  onChange: function () {
    this.setState({
      efficiency: this.refs.efficiency.getValue(),
      gravity: this.refs.gravity.getValue(),
      volume: this.refs.volume.getValue(),
    });
  },

  render: function () {
    return (
        <bootstrap.Row>
          <bootstrap.Col xs={3}>
            <bootstrap.Input type="text"
                             label="Preboil Gravity (SG)"
                             ref="gravity"
                             onChange={this.onChange}
                             defaultValue={this.state.gravity}/>
          </bootstrap.Col>
          <bootstrap.Col xs={3}>
            <bootstrap.Input type="text"
                             label="Preboil Volume (Gallons)"
                             placeholder="6.5"
                             ref="volume"
                             onChange={this.onChange}
                             defaultValue={this.state.volume}/>
          </bootstrap.Col>
          <bootstrap.Col xs={3}>
            <bootstrap.Input type="text"
                             label="Extract Efficiency"
                             placeholder="60"
                             ref="efficiency"
                             onChange={this.onChange}
                             defaultValue={this.state.efficiency}
                             addonAfter="%"/>
          </bootstrap.Col>
        </bootstrap.Row>
    );
  },
});
