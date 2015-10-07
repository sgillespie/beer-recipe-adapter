const GrainInput = require('../../components/GrainInput'),
      jsdom = require('mocha-jsdom'),
      React = require('react/addons'),
      TestUtils = React.addons.TestUtils;

require('chai').should();

describe('GrainInput', function () {
  jsdom();

  const onAddClick = () => 'delete clicked';
  let grainInput;

  beforeEach(function () {
    grainInput = TestUtils.renderIntoDocument(
        <GrainInput onAddClick={onAddClick}/>
    );
  });

  it('should render grain-type input', function () {
    grainInput.refs.grainTypeInput.props.type.should.equal('text');
  });

  it('should render weight-lbs input', function () {
    grainInput.refs.weightLbsInput.props.type.should.equal('text');
  });

  it('should render weight-oz input', function () {
    grainInput.refs.weightOzInput.props.type.should.equal('text');
  });
});
