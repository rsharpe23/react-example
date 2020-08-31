/* eslint-disable import/no-unresolved */
import React from 'react';
import { connect } from 'react-redux';
import { changeMenuIndex } from '@actions/actionCreators';
import Menu from '@components/Menu';

function MenuContainer(props) {
  return <Menu {...props} />;
}

export default connect(
  (state, ownProps) => ({
    data: state.menus[ownProps.name],
    activeIndex: state.menusActivity[ownProps.name],
  }),
  (dispatch, ownProps) => ({
    onChange(newIndex) {
      dispatch(changeMenuIndex(ownProps.name, newIndex));
    },
  })
)(MenuContainer);