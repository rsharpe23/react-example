/* eslint-disable import/no-unresolved */
import { ADD_MENU_BY_NAME } from '@actions/actionTypes';

function menusReducer(state = {}, action) {
  if (action.type === ADD_MENU_BY_NAME) {
    // В Redux глубокое копирование данных делать не нужно
    // https://stackoverflow.com/questions/43151622/in-redux-is-it-necessary-to-do-deep-copy
    return { ...state, [action.name]: action.menu };
  }

  return state;
}

export default menusReducer;