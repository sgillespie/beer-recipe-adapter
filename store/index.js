var redux = require('redux'),
    reducers = require('../reducers/recipe.js');

module.exports = function (initialState) {
  return createStore(reducers)
}

