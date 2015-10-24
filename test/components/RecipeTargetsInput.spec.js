import chai from 'chai';
import EfficiencyField from '../../components/EfficiencyField';
import GravityField from '../../components/GravityField';
import jsdom from 'mocha-jsdom';
import RecipeTargetsInput from '../../components/RecipeTargetsInput';
import React from 'react';
import {
  findRenderedComponentWithType,
  renderIntoDocument,
} from 'react-addons-test-utils';
import { simulateChange } from '../test-utils';
import sinon from 'sinon-chai';
import 'mocha-sinon';
import VolumeField from '../../components/VolumeField';

const should = chai.should();
chai.use(sinon);

describe('RecipeTargetsInput', function () {
  jsdom();

  const targets = {
    efficiency: 0.6,
    gravity: 1.033,
    volume: 7.65,
  };

  let match,
      onChangeEfficiency,
      onChangeGravity,
      onChangeVolume,
      recipeTargets;

  beforeEach(function () {
    match = this.sinon.match;
    onChangeEfficiency = this.sinon.spy();
    onChangeGravity = this.sinon.spy();
    onChangeVolume = this.sinon.spy();

    recipeTargets = renderIntoDocument(
        <RecipeTargetsInput onChangeEfficiency={onChangeEfficiency}
                            onChangeGravity={onChangeGravity}
                            onChangeVolume={onChangeVolume}
                            targets={targets}/>
    );
  });

  it('should pass targets values to input fields', function () {
    recipeTargets.refs.efficiency.props.value.should.equal(0.6);
    recipeTargets.refs.gravity.props.value.should.equal(1.033);
    recipeTargets.refs.volume.props.value.should.equal(7.65);
  });

  it('contains gravity field', function () {
    const gravity = findRenderedComponentWithType(recipeTargets, GravityField);
    should.exist(gravity);
  });

  it('contains volume field', function () {
    const volume = findRenderedComponentWithType(recipeTargets, VolumeField);
    should.exist(volume);
  });

  it('contains efficiency field', function () {
    const efficiency = findRenderedComponentWithType(recipeTargets, EfficiencyField);
    should.exist(efficiency);
  });

  it('should pass onChangeGravity to gravity', function () {
    recipeTargets.refs.gravity.props.onChange(1.022);
    onChangeGravity.should.have.been.calledWith(1.022);
  });

  it('should pass onEfficiencyChanged to efficiency', function () {
    recipeTargets.refs.efficiency.props.onChange('1');
    onChangeEfficiency.should.have.been.calledWith('1');
  });

  it('should pass onVolumeChanged to volume', function () {
    recipeTargets.refs.volume.props.onChange(5.25);
    onChangeVolume.should.have.been.calledWith(5.25);
  });
});
