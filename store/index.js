const redux = require('redux'),
      reducers = require('../reducers/recipe.js');

const createStore = redux.compose(
  require('redux-devtools').devTools()
)(redux.createStore);

module.exports = function (initialState) {
  return createStore(reducers, initialState);
};
