/* eslint-disable import/no-unresolved */
import React from 'react';
import { createMarkup } from '@/utils';
import defaultImg from '@public/img/default-work.svg';
import './Work.css';

class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = { thumbnail: defaultImg };
  }

  render() {
    const { 
      className, 
      value: { title, content, price },
    } = this.props;

    return (
      <figure className={className}>
        <a href="#" className="ImgWrap Work-Link">
          <img src={this.state.thumbnail} alt={title} />

          <div
            className="Work-Content"
            dangerouslySetInnerHTML={createMarkup(content)} />
        </a>

        <figcaption className="Work-Caption">
          <span>{title}</span>
          <span>{price}</span>
        </figcaption>
      </figure>
    );
  }
  
  componentDidMount() {
    import(`@public/img/${this.props.value.thumbnail}`)
      .then(
        ({ default: thumbnail }) => this.setState({ thumbnail }),
        err => false
      );
  }
}

export default Work;