const reducers = require('../../reducers/recipe');

require('chai').should();

describe('reducers', function () {
  it('should have an initial state', function () {
    const state = reducers(null, {}),
          grain = state.entities.grains[1];

    state.result.should.contain(1);
    grain.id.should.equal(1);
    grain.type.should.equal('Two Row (US)');
    grain.weight.should.equal(12.125);
  });

  it('should handle ADD_GRAIN', function () {
    const state = reducers([], {
            type: 'ADD_GRAIN',
            payload: {
              type: 'grain',
              weight: 10,
            },
          }),

          index = state.result[0],
          grain = state.entities.grains[index];

    grain.id.toString().should.equal(index);
    grain.type.should.equal('grain');
    grain.weight.should.equal(10);
  });

  it('should handle DELETE_GRAIN', function () {
    const initialState = {
            result: [0],
            grains: {
              0: {
                id: 0,
                type: 'grain',
                weight: 10,
              },
            },
          },

          state = reducers(initialState, {
            type: 'DELETE_GRAIN',
            payload: {
              id: 0,
            },
          });

    state.result.should.be.empty;
    state.entities.grains.should.be.empty;
  });
});
