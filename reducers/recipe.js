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
      return _.assign({}, state, {
        grains: state.grains.concat([
          {
            id: (state.reduce(function (accum, grain) {
              return Math.max(grain.id, maxId)
            }, -1) + 1),
            grainType: grain.grainType,
            weight: grain.weight,
          },
        ])
      })

    default:
      return state;
  }
}

module.exports = recipeApp
