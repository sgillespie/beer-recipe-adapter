import { addGrain, deleteGrain } from '../actions';
import compose from 'lodash/function/compose';
import AdjustableRecipe from '../components/AdjustableRecipe';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar';
import React, { PropTypes } from 'react';

export const App = React.createClass({
  propTypes: {
    grains: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  },

  render: function () {
    const { dispatch } = this.props;

    return (
        <div>
          <NavBar/>
          <AdjustableRecipe grains={this.props.grains}
                            onAddClick={compose(dispatch, addGrain)}
                            onDeleteClick={compose(dispatch, deleteGrain)} />
        </div>
    );
  },
});

function select (state) {
  const { result, entities } = state;

  return {
    grains: result.map(id => entities.grains[id]),
  };
}

export default connect(select)(App);
