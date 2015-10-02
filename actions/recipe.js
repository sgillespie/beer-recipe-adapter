module.exports = {
  addGrain: function (grainType, weight) {
    return {
      type: 'ADD_GRAIN',
      payload: {
        type: grainType,
        weight: weight,
      },
    };
  },

  deleteGrain: function (id) {
    return {
      type: 'DELETE_GRAIN',
      payload: {
        id: id,
      },
    };
  },
};
