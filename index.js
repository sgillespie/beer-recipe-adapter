const Recipe = require('./containers/App'),
      React = require('react'),
      redux = require('react-redux'),
      store = require('./store');

const state = {
  result: [1, 2, 3],
  entities: {
    grains: {
      1: {
        id: 1,
        type: 'Two Row (US)',
        weight: 12.125,
      },
      2: {
        id: 2,
        type: 'Crystal 40L',
        weight: 0.5,
      },
      3: {
        id: 3,
        type: 'Munich',
        weight: 0.125,
      },
    },
  },
};

const recipeStore = store(state);

function renderApp () {
  return (
      <Recipe.connect/>
  );
}

React.render(
    <redux.Provider store={recipeStore}>
      {renderApp}
    </redux.Provider>,
  document.getElementById('root')
);
