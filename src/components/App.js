import React from 'react';
import Home from './Home';
import Preview from './Preview';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleHomePortfolioWorkClick = this.handleHomePortfolioWorkClick.bind(this);
    this.handlePreviewNavControlClick = this.handlePreviewNavControlClick.bind(this);

    this.state = {
      options: {
        pageNum: 1,
        screenNum: 1,
      },
    };
  }

  render() {
    return this.renderPage();
  }

  renderPage() {
    const { options } = this.state;

    switch (options.pageNum) {
      case 1:
        return (
          <Home
            screenNum={options.screenNum}
            onPortfolioWorkClick={this.handleHomePortfolioWorkClick} />
        );

      case 2:
        return (
          <Preview
            work={options.work}
            onNavControlClick={this.handlePreviewNavControlClick} />
        );
    }

    return null;
  }

  handleHomePortfolioWorkClick(work) {
    this.setState({
      options: { pageNum: 2, work },
    });
  }

  handlePreviewNavControlClick(screenNum) {
    this.setState({
      options: { pageNum: 1, screenNum },
    });
  }
}

export default App;