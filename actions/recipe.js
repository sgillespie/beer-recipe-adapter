export const ADD_GRAIN = 'ADD_GRAIN';
export const DELETE_GRAIN = 'DELETE_GRAIN';

export function addGrain (grainType, weight) {
  return {
    type: 'ADD_GRAIN',
    payload: {
      type: grainType,
      weight: weight,
    },
  };
}

export function deleteGrain (id) {
  return {
    type: 'DELETE_GRAIN',
    payload: {
      id: id,
    },
  };
}
