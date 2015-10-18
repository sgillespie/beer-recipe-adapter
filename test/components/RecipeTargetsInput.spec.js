import chai from 'chai';
import jsdom from 'mocha-jsdom';
import RecipeTargetsInput from '../../components/RecipeTargetsInput';
import React from 'react';
import {
  findRenderedDOMComponentWithTag,
  renderIntoDocument,
  Simulate,
} from 'react-addons-test-utils';
import sinon from 'sinon-chai';
import 'mocha-sinon';

chai.should();
chai.use(sinon);

describe('RecipeTargetsInput', function () {
  jsdom();

  let match,
      onChangeTargets,
      recipeTargets;

  beforeEach(function () {
    match = this.sinon.match;
    onChangeTargets = this.sinon.spy();
    recipeTargets = renderIntoDocument(
        <RecipeTargetsInput onChangeTargets={onChangeTargets}/>
    );
  });

  it('contains SG input', function () {
    recipeTargets.refs.gravity.props.type.should.equal('text');
  });

  it('contains volume input', function () {
    recipeTargets.refs.volume.props.type.should.equal('text');
  });

  it('contains efficiency input', function () {
    recipeTargets.refs.efficiency.props.type.should.equal('text');
  });

  it('should update state when gravity is changed', function () {
    simulateChange(recipeTargets.refs.gravity, '1.033');
    recipeTargets.state.gravity.should.equal(1.033);
  });

  it('should update state when volume is changed', function () {
    simulateChange(recipeTargets.refs.volume, '3');
    recipeTargets.state.volume.should.equal(3);
  });

  it('should update state when efficiency is changed', function () {
    simulateChange(recipeTargets.refs.efficiency, '1');
    recipeTargets.state.efficiency.should.equal(1);
  });

  it('should call onChangeTargets when gravity is changed', function () {
    simulateChange(recipeTargets.refs.gravity, '1.020');
    onChangeTargets.should.have.been.calledWith(
      match.any, 1.02, match.any);
  });

  it('should call onChangeTargets when volume is changed', function () {
    simulateChange(recipeTargets.refs.volume, '10');
    onChangeTargets.should.have.been.calledWith(
      match.any, match.any, 10);
  });

  it('should call onChangeTargets when efficiency is changed', function () {
    simulateChange(recipeTargets.refs.efficiency, '0.3');
    onChangeTargets.should.have.been.calledWith(
      0.3, match.any, match.any);
  });

  it('should not call onChangeTarget with invalid gravity', function () {
    const { gravity } = recipeTargets.refs;

    simulateChange(gravity, 'Test');
    simulateChange(gravity, '0.5');
    simulateChange(gravity, '2.5');

    onChangeTargets.should.not.have.been.called;
  });

  it('should not call onChangeTarget with invalid volume', function () {
    simulateChange(recipeTargets.refs.volume, 'Test');
    onChangeTargets.should.not.have.been.called;
  });

  it('should not call onChangeTarget with invalid efficiency', function () {
    const { efficiency } = recipeTargets.refs;

    simulateChange(efficiency, 'Test');
    simulateChange(efficiency, '0');
    simulateChange(efficiency, '120');

    onChangeTargets.should.not.have.been.called;
  });

  it('gravity input should give feedback', function () {
    const { gravity } = recipeTargets.refs;

    gravity.props.bsStyle.should.equal('success');

    simulateChange(gravity, 'Test');
    gravity.props.bsStyle.should.equal('error');

    simulateChange(gravity, 1.045);
    gravity.props.bsStyle.should.equal('success');
  });

  it('volume input should give feedback', function () {
    const { volume } = recipeTargets.refs;

    volume.props.bsStyle.should.equal('success');

    simulateChange(volume, 'Test');
    volume.props.bsStyle.should.equal('error');

    simulateChange(volume, 5);
    volume.props.bsStyle.should.equal('success');
  });

  it('efficiency input should give feedback', function () {
    const { efficiency } = recipeTargets.refs;

    efficiency.props.bsStyle.should.equal('success');

    simulateChange(efficiency, 'Test');
    efficiency.props.bsStyle.should.equal('error');

    simulateChange(efficiency, 0.4);
    efficiency.props.bsStyle.should.equal('success');
  });
});

function simulateChange (component, value) {
  const input = findRenderedDOMComponentWithTag(component, 'input');

  input.value = value;
  Simulate.change(input);
}
