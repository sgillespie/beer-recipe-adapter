import { ADD_GRAIN, DELETE_GRAIN, addGrain, deleteGrain } from '../../actions/recipe';
import { should } from 'chai';

should();

describe('actions', function () {
  it('should create ADD_GRAIN action', function () {
    const action = addGrain('someGrain', 10);

    action.type.should.equal(ADD_GRAIN);
    action.payload.type.should.equal('someGrain');
    action.payload.weight.should.equal(10);
  });

  it('should create DELETE_GRAIN action', function () {
    const action = deleteGrain(1);

    action.type.should.equal(DELETE_GRAIN);
    action.payload.id.should.equal(1);
  });
});
