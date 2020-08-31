/* eslint-disable import/no-unresolved */
import { ADD_PAGE } from '@actions/actionTypes';

function pagesReducer(state = [], action) {
  if (action.type === ADD_PAGE) {
    return [...state, { ...action.page }];
  }

  return state;
}

export default pagesReducer;