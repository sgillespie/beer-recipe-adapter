const AdjustableRecipe = require('../../components/AdjustableRecipe'),
      chai = require('chai'),
      Recipe = require('../../containers/App'),
      jsdom = require('mocha-jsdom'),
      NavBar = require('../../components/NavBar'),
      React = require('react/addons'),
      redux = require('react-redux'),
      should = chai.should(),
      store = require('../../store'),
      TestUtils = React.addons.TestUtils;

chai.use(require('sinon-chai'));
require('mocha-sinon');

describe('container', function () {
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
          <Recipe.App grains={grains}
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
      result: [0],
      entities: {
        grains: {
          0: {
            id: 0,
            type: 'type',
            weight: 9,
          },
        },
      },
    });

    let provider;
    beforeEach(function () {
      const renderApp = () => {
        return (
          <Recipe.connect/>
        );
      };

      provider = TestUtils.renderIntoDocument(
          <redux.Provider store={testStore}>
            {renderApp}
          </redux.Provider>
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
