import React from 'react';
import { Provider } from 'react-redux';
import AppCn from './components/AppCn';
import { createStore } from 'redux';
import rootReducer from './reducers/index';

const store = createStore(rootReducer);

export default App = () => (
  <Provider store={store}>
    <AppCn />
  </Provider>
)