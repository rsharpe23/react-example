/* eslint-disable import/no-unresolved */
import { 
  TOGGLE_HOME_NAV_CHEVRON, SELECT_WORK, RESET_CURRENT_PAGE,
} from '@actions/actionTypes';

const initialState = {
  currentPage: 1, // только home и preview
  isActiveHomeNav: false,
  workData: null,
};

function optionsReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_HOME_NAV_CHEVRON:
      return { ...state, isActiveHomeNav: action.value };

    case SELECT_WORK:
      return { 
        ...state, 
        currentPage: 2, 
        workData: action.workData,
      };

    case RESET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: 1,
        workData: null,
      };

    default:
      return state;
  }
}

export default optionsReducer;