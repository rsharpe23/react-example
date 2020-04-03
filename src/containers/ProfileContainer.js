/* eslint-disable import/no-unresolved */
import React from 'react';
import { connect } from 'react-redux';
import store from '@/store';
import dataStore from '@models/DataStoreProfile';
import Profile from '@components/Profile';
import { setProfile } from '@actions/actionCreators.js';

class ProfileContainer extends React.Component {
  render() {
    return <Profile {...this.props} />;
  }

  // eslint-disable-next-line class-methods-use-this
  componentDidMount() {
    dataStore.request()
      .then(data => store.dispatch(
        setProfile(data)
      ));
  }
}

export default connect(
  state => ({ data: state.profile })
)(ProfileContainer);