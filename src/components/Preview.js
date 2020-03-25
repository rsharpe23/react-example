import React from 'react';
import PreviewNav from './PreviewNav';
import './Preview.css';

class Preview extends React.Component {
  constructor(props) {
    super(props);

    this.handleNavMenuSelect = this.handleNavMenuSelect.bind(this);
    this.handleNavControlClick = this.handleNavControlClick.bind(this);

    this.state = { isMobile: false };
  }

  render() {
    const { daysPerDev, price, url } = this.props.work;

    return (
      <div className="Preview">
        <PreviewNav
          workInfo={{ daysPerDev, price }}
          onMenuSelect={this.handleNavMenuSelect}
          onControlClick={this.handleNavControlClick} />

        <main className="Preview-Main">
          <div className="position-relative w-100 h-100">
            <iframe src={url} className={this.getIframeClassName()}></iframe>
          </div>
        </main>
      </div>
    );
  }

  getIframeClassName() {
    let className = 'Iframe';

    if (this.state.isMobile) {
      className += ' Iframe_mobile';
    }

    return className;
  }

  handleNavMenuSelect(index) {
    this.setState({ isMobile: !!index });
  }

  handleNavControlClick(homeNavMenuIndex) {
    const { onNavControlClick } = this.props;
    onNavControlClick && onNavControlClick(homeNavMenuIndex);
  }
}

export default Preview;