import React from 'react';
import PreviewNav from './PreviewNav';
import './Preview.css';

class Preview extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div className="Preview">
        <PreviewNav 
          onMenuSelect={null} 
          onControlClick={null} />

        <main className="Preview-Main">
          <div className="position-relative w-100 h-100">
            <iframe src="https://rsharpe-blog.ru/about/" className="Iframe Iframe_mobile"></iframe>
          </div>
        </main>
      </div>
    );
  }
}

export default Preview;