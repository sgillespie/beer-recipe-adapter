import { ADD_GRAIN, DELETE_GRAIN, UPDATE_TARGETS } from '../actions';
import { combineReducers } from 'redux';
import u, { omit } from 'updeep';
import reduce from 'lodash/collection/reduce';

const exampleState = {
  targets: {
    efficiency: 0.7,
    gravity: 1.055,
    volume: 5,
  },

  grains: {
    1: {
      id: 1,
      type: 'Two Row (US)',
      weight: 12.125,
    },
  },
};

const initialState = exampleState;

export default function reducers (state = initialState, action) {
  return combineReducers({
    targets,
    grains,
  })(state, action);
}

function targets (state = {}, action = {}) {
  const { type } = action;

  switch (type) {
    case UPDATE_TARGETS:
      return updateTargets(state, action);
    default:
      return state;
  }
}

function grains (state = {}, action = {}) {
  const { type } = action;

  switch (type) {
    case ADD_GRAIN:
      return addGrain(state, action);
    case DELETE_GRAIN:
      return deleteGrain(state, action);
    default:
      return state;
  }
}

function newId (entities) {
  return reduce(entities, (accum, val, key) => Math.max(key, accum), -1) + 1;
}

function addGrain (state, action) {
  const { payload } = action;

  const id = newId(state);
  return u({
    [id]: {
      id: id,
      type: payload.type,
      weight: payload.weight,
    },
  }, state);
}

function deleteGrain (state, action) {
  const { id } = action.payload;
  return omit(id, state);
}

function updateTargets (state, action) {
  const { efficiency, gravity, volume } = action.payload;

  return u({
    efficiency,
    gravity,
    volume,
  }, state);
}
