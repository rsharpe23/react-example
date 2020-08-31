/* eslint-disable import/no-unresolved */
import React from 'react';
import { connect } from 'react-redux';
import store from '@/store';
import { getContacts } from '@models/stateApi';
import dataStore from '@models/DataStoreContacts';
import Contacts from '@components/Contacts';

import { 
  addPage, addMenuByName, changeMenuIndex,
} from '@actions/actionCreators';

class ContactsContainer extends React.Component {
  render() {
    return <Contacts {...this.props} />;
  }

  // eslint-disable-next-line class-methods-use-this
  componentDidMount() {
    dataStore.request()
      .then(({ page, menu }) => {
        store.dispatch(addPage(page));
        store.dispatch(addMenuByName('contacts', menu));
      });
  }
}

export default connect(
  state => ({ 
    data: getContacts(state),
  }), 
  dispatch => ({
    onLinkClick() {
      dispatch(changeMenuIndex('homeNav', 0));
    },
  })
)(ContactsContainer);