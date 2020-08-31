/* eslint-disable import/no-unresolved */
import React from 'react';
import { connect } from 'react-redux';
import { selectWork } from '@actions/actionCreators';
import Work from '@components/Work';

function WorkContainer(props) {
  return <Work {...props} />;
}

export default connect(
  null, 
  dispatch => ({
    onClick(workData) {
      dispatch(selectWork(workData));
    },
  })
)(WorkContainer);