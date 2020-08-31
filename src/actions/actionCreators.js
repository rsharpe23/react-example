import * as types from './actionTypes';

export function toggleHomeNavChevron(value) {
  return { type: types.TOGGLE_HOME_NAV_CHEVRON, value };
}

export function setProfile(profile) {
  return { type: types.SET_PROFILE, profile };
}

export function addMenuByName(name, menu) {
  return { type: types.ADD_MENU_BY_NAME, name, menu };
}

export function changeMenuIndex(menuName, newIndex) {
  return { type: types.CHANGE_MENU_INDEX, menuName, newIndex };
}

export function addPage(page) {
  return { type: types.ADD_PAGE, page };
}

export function addOrUpdateWorks(works) {
  return { type: types.ADD_UPDATE_WORKS, works };
}

export function selectWork(workData) {
  return { type: types.SELECT_WORK, workData };
}

export function resetCurrentPage() {
  return { type: types.RESET_CURRENT_PAGE };
}