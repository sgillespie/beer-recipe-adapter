import {
  ADD_GRAIN,
  addGrain,
  DELETE_GRAIN,
  deleteGrain,
  UPDATE_TARGETS,
  updateTargets,
} from '../../actions';
import { should } from 'chai';

should();

describe('actions', function () {
  it('should create ADD_GRAIN action', function () {
    const { payload, type } = addGrain('someGrain', 10);

    type.should.equal(ADD_GRAIN);
    payload.type.should.equal('someGrain');
    payload.weight.should.equal(10);
  });

  it('should create DELETE_GRAIN action', function () {
    const { payload, type } = deleteGrain(1);

    type.should.equal(DELETE_GRAIN);
    payload.id.should.equal(1);
  });

  it('should create UPDATE_TARGETS action', function () {
    const { payload, type } = updateTargets(0.7, 1.045, 6.5);

    type.should.equal(UPDATE_TARGETS);
    payload.efficiency.should.equal(0.7);
    payload.gravity.should.equal(1.045);
    payload.volume.should.equal(6.5);
  });
});
