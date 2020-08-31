/* eslint-disable import/no-unresolved */
import React from 'react';
import { connect } from 'react-redux';
import store from '@/store';
import dataStore from '@models/DataStorePreviewNav';
import PreivewNav from '@components/PreviewNav';

import { 
  addMenuByName, changeMenuIndex, resetCurrentPage,
} from '@actions/actionCreators';

class PreviewNavContainer extends React.Component {
  render() {
    return <PreivewNav {...this.props} />;
  }

  // eslint-disable-next-line class-methods-use-this
  componentDidMount() {
    dataStore.request()
      .then(({ menu }) => store.dispatch(
        addMenuByName('previewNav', menu)
      ));
  }
}

export default connect(
  null,
  dispatch => ({
    onLinkClick(index) {
      dispatch(resetCurrentPage());
      dispatch(changeMenuIndex('homeNav', index));
      dispatch(changeMenuIndex('previewNav', 0));
    },
  })
)(PreviewNavContainer);
