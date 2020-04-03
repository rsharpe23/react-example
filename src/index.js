import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import AppContainer from './containers/AppContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);

// const state = {
//   options: {
//     currentPage: 1,
//     isActiveHomeNav: false,
//     selectedWork: null,
//   }

//   profile: {},

//   works: [],

//   pages: [],

//   menus: {},

//   menusActivity: {
//     homeNav: 0,
//     portfolio: 0,
//     previewNav: 0,
//   }
// };