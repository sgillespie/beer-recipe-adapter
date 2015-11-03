import {
  ADD_GRAIN,
  addGrain,
  DELETE_GRAIN,
  deleteGrain,
  UPDATE_EFFICIENCY,
  updateEfficiency,
  UPDATE_GRAVITY,
  updateGravity,
  UPDATE_VOLUME,
  updateVolume,
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

  it('should create UPDATE_EFFICIENCY action', function () {
    const { payload, type } = updateEfficiency(0.5);
    type.should.equal(UPDATE_EFFICIENCY);
    payload.efficiency.should.equal(0.5);
  });

  it('should create UPDATE_GRAVITY action', function () {
    const { payload, type } = updateGravity(1.055);
    type.should.equal(UPDATE_GRAVITY);
    payload.gravity.should.equal(1.055);
  });

  it('should create UPDATE_VOLUME action', function () {
    const { payload, type } = updateVolume(10.5);
    type.should.equal(UPDATE_VOLUME);
    payload.volume.should.equal(10.5);
  });
});
