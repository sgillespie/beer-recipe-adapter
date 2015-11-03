export const ADD_GRAIN = 'ADD_GRAIN';
export const DELETE_GRAIN = 'DELETE_GRAIN';
export const UPDATE_EFFICIENCY = 'UPDATE_EFFICIENCY';
export const UPDATE_GRAVITY = 'UPDATE_GRAVITY';
export const UPDATE_VOLUME = 'UPDATE_VOLUME';
export const UPDATE_TARGETS = 'UPDATE_TARGETS';

export function addGrain (type, weight) {
  return {
    type: ADD_GRAIN,
    payload: {
      type,
      weight,
    },
  };
}

export function deleteGrain (id) {
  return {
    type: DELETE_GRAIN,
    payload: {
      id,
    },
  };
}

export function updateEfficiency (efficiency) {
  return {
    type: UPDATE_EFFICIENCY,
    payload: {
      efficiency,
    },
  };
}

export function updateGravity (gravity) {
  return {
    type: UPDATE_GRAVITY,
    payload: {
      gravity,
    },
  };
}

export function updateVolume (volume) {
  return {
    type: UPDATE_VOLUME,
    payload: {
      volume,
    },
  };
}

export function updateTargets (efficiency, gravity, volume) {
  return {
    type: UPDATE_TARGETS,
    payload: {
      efficiency,
      gravity,
      volume,
    },
  };
}
