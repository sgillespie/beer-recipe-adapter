import AdjustableRecipe from '../../components/AdjustableRecipe';
import chai from 'chai';
import jsdom from 'mocha-jsdom';
import 'mocha-sinon';
import NavBar from '../../components/NavBar';
import { Provider } from 'react-redux';
import React from 'react/addons';
import RecipeContainer, { App } from '../../containers';
import sinon from 'sinon-chai';
import store from '../../store';

chai.use(sinon);
const should = chai.should(),
      { TestUtils } = React.addons;

describe('Containers', function () {
  jsdom();

  describe('App', function () {
    const grains = [
          {
            id: 0,
            type: 'type',
            weight: 9,
          },
    ];

    let recipeApp, dispatch;
    beforeEach(function () {
      dispatch = this.sinon.spy();
      recipeApp = TestUtils.renderIntoDocument(
          <App grains={grains}
               dispatch={dispatch}/>
      );
    });

    it('should render NavBar', function () {
      const navBar = TestUtils.findRenderedComponentWithType(recipeApp, NavBar);
      should.exist(navBar);
    });

    it('should render AdjustableRecipe', function () {
      const adjustableRecipe = TestUtils.findRenderedComponentWithType(
        recipeApp, AdjustableRecipe);
      should.exist(adjustableRecipe);
    });

    it('should pass grains to AdjustableRecipe', function () {
      const adjustableRecipe = TestUtils.findRenderedComponentWithType(
        recipeApp, AdjustableRecipe);
      adjustableRecipe.props.grains.should.equal(grains);
    });

    it('should call dispatch when onAddClick is called', function () {
      const adjustableRecipe = TestUtils.findRenderedComponentWithType(
        recipeApp, AdjustableRecipe);
      adjustableRecipe.props.onAddClick('type2', 9);
      dispatch.should.be.calledWithMatch({ type: 'ADD_GRAIN' });
    });

    it('should call dispatch when onDeleteClick is called', function () {
      const adjustableRecipe = TestUtils.findRenderedComponentWithType(
        recipeApp, AdjustableRecipe);
      adjustableRecipe.props.onDeleteClick(1);
      dispatch.should.be.calledWithMatch({ type: 'DELETE_GRAIN' });
    });
  });

  describe('connect', function () {
    const testStore = store({
      targets: {
        efficienty: 0.7,
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
      provider = TestUtils.renderIntoDocument(
          <Provider store={testStore}>
            <RecipeContainer/>
          </Provider>
      );
    });


    it('connect should map state to props', function () {
      const adjustableRecipe = TestUtils.findRenderedComponentWithType(
        provider, AdjustableRecipe);

      adjustableRecipe.props.grains.should.eql([
        {
          id: 0,
          type: 'type',
          weight: 9,
        },
      ]);
    });
  });
});
