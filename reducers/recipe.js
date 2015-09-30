var _ = require('lodash')

var exampleState = {
  result: [1],
  entities: {
    grains: {
      1: {
        id: 1,
        type: 'Two Row (US)',
        weight: 12.125,
      }
    },
  },
};

var initialState = exampleState;

function recipeApp (state, action) {
  if (!state) {
    return initialState;
  }

  switch (action.type) {
    case 'ADD_GRAIN':
      var id = 1 + _.reduce(state.entities.grains, function (accum, val, key) {
        return Math.max(key, accum)
      }, -1);

      var grains = {};
      grains[id] = {
        id: id,
        type: action.payload.type,
        weight: action.payload.weight,
      };
    
      return _.assign({}, state, {
        result: state.result.concat([id]),
        entities: _.assign({}, state.entities, {
          grains: _.assign({}, state.entities.grains, grains)
        })
      });

    default:
      return state;
  }
}

module.exports = recipeApp
