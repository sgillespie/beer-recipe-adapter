import AdjustableRecipe from '../../components/AdjustableRecipe';
import chai from 'chai';
import {
  findRenderedComponentWithType,
  renderIntoDocument,
} from 'react-addons-test-utils';
import jsdom from 'mocha-jsdom';
import 'mocha-sinon';
import NavBar from '../../components/NavBar';
import { Provider } from 'react-redux';
import React from 'react';
import RecipeContainer, { App } from '../../containers';
import sinon from 'sinon-chai';
import store from '../../store';

chai.use(sinon);
const should = chai.should();

describe('Containers', function () {
  jsdom();

  describe('App', function () {
    const grains = [{
            id: 0,
            type: 'type',
            weight: 9,
          }],
          targets = {
            efficiency: 0.7,
            gravity: 1.045,
            volume: 6.5,
          };

    let recipeApp, dispatch;
    beforeEach(function () {
      dispatch = this.sinon.spy();
      recipeApp = renderIntoDocument(
          <App grains={grains}
               dispatch={dispatch}
               targets={targets}/>
      );
    });

    it('should render NavBar', function () {
      const navBar = findRenderedComponentWithType(recipeApp, NavBar);
      should.exist(navBar);
    });

    it('should render AdjustableRecipe', function () {
      const adjustableRecipe = findRenderedComponentWithType(
        recipeApp, AdjustableRecipe);
      should.exist(adjustableRecipe);
    });

    it('should pass grains to AdjustableRecipe', function () {
      const adjustableRecipe = findRenderedComponentWithType(
        recipeApp, AdjustableRecipe);
      adjustableRecipe.props.grains.should.eql(grains);
    });

    it('should pass targets to AdjustableRecipe', function () {
      const adjustableRecipe = findRenderedComponentWithType(
        recipeApp, AdjustableRecipe);
      adjustableRecipe.props.targets.should.eql(targets);
    });

    it('should call dispatch when onAddClick is called', function () {
      const adjustableRecipe = findRenderedComponentWithType(
        recipeApp, AdjustableRecipe);
      adjustableRecipe.props.onAddClick('type2', 9);
      dispatch.should.be.calledWithMatch({ type: 'ADD_GRAIN' });
    });

    it('should call dispatch when onDeleteClick is called', function () {
      const adjustableRecipe = findRenderedComponentWithType(
        recipeApp, AdjustableRecipe);
      adjustableRecipe.props.onDeleteClick(1);
      dispatch.should.be.calledWithMatch({ type: 'DELETE_GRAIN' });
    });

    it('should call dispatch when onChangeTargets is called', function () {
      const adjustableRecipe = findRenderedComponentWithType(
        recipeApp, AdjustableRecipe);
      adjustableRecipe.props.onChangeTargets(0.5, 1.050, 10);
      dispatch.should.be.calledWithMatch({ type: 'UPDATE_TARGETS' });
    });
  });

  describe('connect', function () {
    const testStore = store({
      targets: {
        efficiency: 0.7,
        gravity: 1.055,
        volume: 5,
      },

      grains: {
        0: {
          id: 0,
          type: 'type',
          weight: 9,
        },
      },
    });

    let provider;
    beforeEach(function () {
      provider = renderIntoDocument(
          <Provider store={testStore}>
            <RecipeContainer/>
          </Provider>
      );
    });


    // TODO[sgillespie]: Check targets
    it('connect should map state to grains', function () {
      const adjustableRecipe = findRenderedComponentWithType(
                                 provider, AdjustableRecipe),
            { grains } = adjustableRecipe.props;

      grains[0].id.should.equal(0);
      grains[0].type.should.equal('type');
      grains[0].weight.should.equal(9);
    });

    it('connect should map state to grains', function () {
      const adjustableRecipe = findRenderedComponentWithType(
                                 provider, AdjustableRecipe),
            { targets } = adjustableRecipe.props;

      targets.efficiency.should.equal(0.7);
      targets.gravity.should.equal(1.055);
      targets.volume.should.equal(5);
    });
  });
});
