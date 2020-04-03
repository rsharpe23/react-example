/* eslint-disable import/no-unresolved */
import React from 'react';
import defaultImg from '@public/img/avatar.png';
import './Avatar.css';

class Avatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { url: defaultImg };
  }

  render() {
    const { className = 'Avatar ImgWrap' } = this.props;

    return (
      <div className={className}>
        <a href="/"><img src={this.state.url} alt="Аватар" /></a>
      </div>
    );
  }
  
  componentDidMount() {
    import(`@public/img/${this.props.url}`)
      .then(
        ({ default: url }) => this.setState({ url }),
        err => false
      );
  }
}

export default Avatar;