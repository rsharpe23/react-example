/* eslint-disable import/no-unresolved */
import { SET_PROFILE } from '@actions/actionTypes';

function profileReducer(state = {}, action) {
  if (action.type === SET_PROFILE) {
    // Нет необходимости перезаписывать данные из предыдущего состояния, 
    // т.к. action.profile возвращает полностью новые данные
    return action.profile;
  }

  return state;
}

export default profileReducer;