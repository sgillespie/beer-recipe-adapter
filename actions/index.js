export const ADD_GRAIN = 'ADD_GRAIN';
export const DELETE_GRAIN = 'DELETE_GRAIN';
export const UPDATE_TARGETS = 'UPDATE_TARGETS';

export function addGrain (type, weight) {
  return {
    type: 'ADD_GRAIN',
    payload: {
      type,
      weight,
    },
  };
}

export function deleteGrain (id) {
  return {
    type: 'DELETE_GRAIN',
    payload: {
      id,
    },
  };
}

export function updateTargets (efficiency, gravity, volume) {
  return {
    type: 'UPDATE_TARGETS',
    payload: {
      efficiency,
      gravity,
      volume,
    },
  };
}
