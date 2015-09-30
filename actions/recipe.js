module.exports = {
  addGrain: function (grainType, weight) {
    return {
      type: 'ADD_GRAIN',
      payload: {
        type: grainType,
        weight: weight,
      },
    }
  }
}
