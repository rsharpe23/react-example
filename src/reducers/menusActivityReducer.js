/* eslint-disable import/no-unresolved */
import { CHANGE_MENU_INDEX } from '@actions/actionTypes';

const initialState = {
  homeNav: 0,
  portfolio: 0,
  previewNav: 0,
};

function menusActivityReducer(state = initialState, action) {
  if (action.type === CHANGE_MENU_INDEX) {
    return { ...state, [action.menuName]: action.newIndex };
  }

  return state;
}

export default menusActivityReducer;