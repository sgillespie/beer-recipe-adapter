import {
  ADD_GRAIN,
  DELETE_GRAIN,
  UPDATE_EFFICIENCY,
  UPDATE_TARGETS,
} from '../../actions';
import chai from 'chai';
import { find, findKey, size } from 'lodash';
import reduce from '../../reducers';

chai.should();

describe('reducers', function () {
  it('should have an initial state', function () {
    const { grains, targets } = reduce(),
          grain = find(grains, () => true);

    targets.efficiency.should.equal(0.7);
    targets.gravity.should.equal(1.055);
    targets.volume.should.equal(5);

    grain.id.should.equal(1);
    grain.type.should.equal('Two Row (US)');
    grain.weight.should.equal(12.125);
  });

  it('should handle ADD_GRAIN', function () {
    const initialState = {
            grains: {
              0: {
                id: 0,
                type: 'grain',
                weight: 10,
              },
            },
          },
          { grains } = reduce(initialState, {
            type: ADD_GRAIN,
            payload: {
              type: 'grain',
              weight: 10,
            },
          }),

          index = findKey(grains),
          grain = grains[index];


    size(grains).should.equal(2);
    grain.id.toString().should.equal(index);
    grain.type.should.equal('grain');
    grain.weight.should.equal(10);
  });

  it('should handle DELETE_GRAIN', function () {
    const initialState = {
            grains: {
              0: {
                id: 0,
                type: 'grain',
                weight: 10,
              },
            },
          },

          state = reduce(initialState, {
            type: DELETE_GRAIN,
            payload: {
              id: 0,
            },
          }),

          { grains } = state;

    grains.should.be.empty;
  });

  it('should handle UPDATE_EFFICIENCY', function () {
    const initialState = {
            targets: {
              efficiency: 0.5,
              gravity: 1.050,
              volume: 3.5,
            },
          },

          state = reduce(initialState, {
            type: UPDATE_EFFICIENCY,
            payload: {
              efficiency: 0.6,
            },
          }),

          { targets } = state;

    targets.efficiency.should.equal(0.6);
    targets.gravity.should.equal(1.050);
    targets.volume.should.equal(3.5);
  });

  it('should handle UPDATE_TARGETS', function () {
    const initialState = {
            targets: {
              efficiency: 0.5,
              gravity: 1.050,
              volume: 3.5,
            },
          },

          state = reduce(initialState, {
            type: UPDATE_TARGETS,
            payload: {
              efficiency: 0.6,
              gravity: 1.040,
              volume: 3,
            },
          }),

          { targets } = state;

    targets.efficiency.should.equal(0.6);
    targets.gravity.should.equal(1.040);
    targets.volume.should.equal(3);
  });
});
