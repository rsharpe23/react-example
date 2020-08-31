/* eslint-disable import/no-unresolved */
import React from 'react';
import { connect } from 'react-redux';
import store from '@/store';
import dataStore from '@models/DataStoreHomeNav';
import HomeNav from '@components/HomeNav';

import { 
  addMenuByName, toggleHomeNavChevron,
} from '@actions/actionCreators';

// Название компонента будет в любом случае тем, 
// которое указано во вторых скобках - HomeNav
// export default connect(
//   state => ({ 
//     isActive: state.options.isActiveHomeNav,
//   }),
//   dispatch => ({
//     onChevronToggle(value) {
//       dispatch(toggleHomeNavChevron(value));
//     },
//   })
// )(HomeNav);

class HomeNavContainer extends React.Component {
  render() {
    return <HomeNav {...this.props} />;
  }

  // eslint-disable-next-line class-methods-use-this
  componentDidMount() {
    dataStore.request()
      .then(({ menu }) => store.dispatch(
        addMenuByName('homeNav', menu)
      ));
  }
}

export default connect(
  state => ({
    isActive: state.options.isActiveHomeNav,
  }),
  dispatch => ({
    onChevronToggle(value) {
      dispatch(toggleHomeNavChevron(value));
    },
  })
)(HomeNavContainer);