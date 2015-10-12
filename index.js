const Recipe = require('./containers/App'),
      Provider = require('react-redux').Provider,
      React = require('react'),
      devtools = require('redux-devtools/lib/react'),
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
  <div>
    <Provider store={recipeStore}>
      {renderApp}
    </Provider>

    <devtools.DebugPanel top right bottom>
      <devtools.DevTools store={recipeStore}
                         monitor={devtools.LogMonitor}
                         visibleOnLoad={process.env.NODE_ENV === 'development'}/>
    </devtools.DebugPanel>
  </div>,
  document.getElementById('root')
);
