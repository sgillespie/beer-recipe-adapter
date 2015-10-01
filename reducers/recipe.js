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

  var _entities = entities(state.entities, action)
  return {
    result: _.map(_entities.grains, function (val, key) { return key; }),
    entities: _entities,
  }
}

function entities (state, action) {
  return _.assign({}, state, {
    grains: grains(state.grains, action),
  });
}

function grains (state, action) {
  console.log(JSON.stringify(state));
  
  switch (action.type) {
    case 'ADD_GRAIN':
      return addGrain (state, action);
    case 'DELETE_GRAIN':
      return deleteGrain(state, action);
    default:
      return state;
  }
}

function addGrain (state, action) {
  var id = newId(state),
      grains = {};
  
  grains[id] = {
    id: id,
    type: action.payload.type,
    weight: action.payload.weight,
  };
  
  return _.assign({}, state, grains);
}

function deleteGrain (state, action) {
  var id = action.payload.id;
  return _.omit(state, id)
}

function newId(state) {
  return 1 + _.reduce(state, function (accum, val, key) {
    return Math.max(key, accum)
  }, -1)
}

module.exports = recipeApp
