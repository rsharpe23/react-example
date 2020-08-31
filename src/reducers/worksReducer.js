/* eslint-disable import/no-unresolved */
import { merge } from '@/utils';
import { ADD_UPDATE_WORKS } from '@actions/actionTypes';

function worksReducer(state = [], action) {
  if (action.type === ADD_UPDATE_WORKS) {
    return merge(state, action.works, 'id');
  }

  return state;
}

export default worksReducer;