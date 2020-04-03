/* eslint-disable import/no-unresolved */
import React from 'react';
import { connect } from 'react-redux';
import Preview from '@components/Preview';

function PreviewContainer(props) {
  return <Preview {...props} />;
}

export default connect(
  state => ({
    workData: state.options.workData,
    isMobile: !!state.menusActivity.previewNav,
  })
)(PreviewContainer);