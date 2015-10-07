const jsdom = require('mocha-jsdom'),
      RecipeTargetsInput = require('../../components/RecipeTargetsInput'),
      React = require('react/addons'),
      TestUtils = React.addons.TestUtils;

require('chai').should();

describe('RecipeTargetsInput', function () {
  jsdom();

  let recipeTargets;

  beforeEach(function () {
    recipeTargets = TestUtils.renderIntoDocument(
        <RecipeTargetsInput/>
    );
  });

  it('contains SG input', function () {
    recipeTargets.refs.preboilGravityInput.props.type.should.equal('text');
  });

  it('contains volume input', function () {
    recipeTargets.refs.preboilVolumeInput.props.type.should.equal('text');
  });

  it('contains efficiency input', function () {
    recipeTargets.refs.extractEfficiencyInput.props.type.should.equal('text');
  });
});
