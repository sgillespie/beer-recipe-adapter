const _ = require('lodash');

const exampleState = {
  result: [1],
  entities: {
    grains: {
      1: {
        id: 1,
        type: 'Two Row (US)',
        weight: 12.125,
      },
    },
  },
};

const initialState = exampleState;

function recipeApp (state, action) {
  if (!state) {
    return initialState;
  }

  const _entities = entities(state.entities, action);
  return {
    result: _.map(_entities.grains, function (val, key) { return key; }),
    entities: _entities,
  };
}

function entities (state, action) {
  return _.assign({}, state, {
    grains: grains(state.grains, action),
  });
}

function grains (state, action) {
  switch (action.type) {
    case 'ADD_GRAIN':
      return addGrain(state, action);
    case 'DELETE_GRAIN':
      return deleteGrain(state, action);
    default:
      return state;
  }
}

function addGrain (state, action) {
  const id = newId(state),
        _grains = {};

  _grains[id] = {
    id: id,
    type: action.payload.type,
    weight: action.payload.weight,
  };

  return _.assign({}, state, _grains);
}

function deleteGrain (state, action) {
  return _.omit(state, action.payload.id);
}

function newId (state) {
  return 1 + _.reduce(state, function (accum, val, key) {
    return Math.max(key, accum);
  }, -1);
}

module.exports = recipeApp;
