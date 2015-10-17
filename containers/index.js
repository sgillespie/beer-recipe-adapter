import { addGrain, deleteGrain, updateTargets } from '../actions';
import compose from 'lodash/function/compose';
import AdjustableRecipe from '../components/AdjustableRecipe';
import { connect } from 'react-redux';
import map from 'lodash/collection/map';
import NavBar from '../components/NavBar';
import React, { PropTypes } from 'react';

export const App = React.createClass({
  propTypes: {
    grains: PropTypes.array.isRequired,
    targets: PropTypes.shape({
      efficiency: PropTypes.number.isRequired,
      gravity: PropTypes.number.isRequired,
      volume: PropTypes.number.isRequired,
    }).isRequired,
    dispatch: PropTypes.func.isRequired,
  },

  render: function () {
    const { dispatch } = this.props;

    return (
        <div>
          <NavBar/>
          <AdjustableRecipe grains={this.props.grains}
                            targets={this.props.targets}
                            onAddClick={compose(dispatch, addGrain)}
                            onDeleteClick={compose(dispatch, deleteGrain)}
                            onChangeTargets={compose(dispatch, updateTargets)}/>
        </div>
    );
  },
});

function select (state) {
  const { targets, grains } = state;

  return {
    grains: map(grains),
    targets,
  };
}

export default connect(select)(App);
