import { combineReducers } from 'redux';
import optionsReducer from './optionsReducer';
import profileReducer from './profileReducer';
import worksReducer from './worksReducer';
import pagesReducer from './pagesReducer';
import menusReducer from './menusReducer';
import menusActivityReducer from './menusActivityReducer';

const rootReducer = combineReducers({
  options: optionsReducer,
  profile: profileReducer,
  works: worksReducer,
  pages: pagesReducer,
  menus: menusReducer,
  menusActivity: menusActivityReducer,
});

export default rootReducer;