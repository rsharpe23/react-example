/* eslint-disable import/no-unresolved */
import React from 'react';
import { connect } from 'react-redux';
import { selectWork } from '@actions/actionCreators';
import Work from '@components/Work';

// function WorkContainer(props) {
//   return <Work {...props} />;
// }

import defaultImg from '@public/img/default-work.svg';

class WorkContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { thumbnail: defaultImg };
  }

  render() {
    const data = { 
      ...this.props.data, 
      thumbnail: this.state.thumbnail 
    };

    return <Work {...this.props} data={data} />;
  }

  componentDidMount() {
    import(`@public/img/${this.props.data.thumbnail}`)
      .then(({ default: thumbnail }) => {
        thumbnail && this.setState({ thumbnail });
      });
  }
}

export default connect(
  null,
  dispatch => ({
    onClick(workData) {
      dispatch(selectWork(workData));
    },
  })
)(WorkContainer);