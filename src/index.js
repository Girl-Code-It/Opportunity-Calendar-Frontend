import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StateProvider } from './Hooks/stateProvider';
import reducer, { INITIAL_STATE } from './Hooks/reducer';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={INITIAL_STATE} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
