import { DebugPanel, DevTools, LogMonitor } from 'redux-devtools/lib/react';
import { Provider } from 'react-redux';
import React from 'react';
import Recipe from './containers';
import store from './store';


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

React.render(
  <div>
    <Provider store={recipeStore}>
      {() => <Recipe/>}
    </Provider>

    <DebugPanel top right bottom>
      <DevTools store={recipeStore}
                monitor={LogMonitor}
                visibleOnLoad={process.env.NODE_ENV === 'development'}/>
    </DebugPanel>
  </div>,
  document.getElementById('root')
);
