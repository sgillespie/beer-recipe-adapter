module.exports = {
  addGrain: function (grainType, weight) {
    return {
      type: 'ADD_GRAIN',
      grainType: grainType,
      weight: weight,
    }
  }
}
