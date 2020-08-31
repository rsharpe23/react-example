/* eslint-disable import/no-unresolved */
import React from 'react';
import { connect } from 'react-redux';
import store from '@/store';
import { getPortfolio, getWorks } from '@models/stateApi';
import dataStore from '@models/DataStorePortfolio';
import Portfolio from '@components/Portfolio';

import { 
  addPage, addMenuByName, addOrUpdateWorks, changeMenuIndex, 
} from '@actions/actionCreators';

class PortfolioContainer extends React.Component {
  render() {
    return <Portfolio {...this.props} />;
  }

  // eslint-disable-next-line class-methods-use-this
  componentDidMount() {
    dataStore.request()
      .then(({ page, menu, works }) => {
        store.dispatch(addPage(page));
        store.dispatch(addMenuByName('portfolio', menu));
        store.dispatch(addOrUpdateWorks(works));
      });
  }
}

// mapStateToProps может делать повторные рендеринги
// если возвращается сложный объект. Читать про reselect!
export default connect(
  state => ({
    data: getPortfolio(state),
    works: getWorks(state),
  }),
  dispatch => ({
    onLinkClick() {
      dispatch(changeMenuIndex('homeNav', 1));
    },
  })
)(PortfolioContainer);