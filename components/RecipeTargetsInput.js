const bootstrap = require('react-bootstrap'),
      React = require('react');

module.exports = React.createClass({
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
  },
});
