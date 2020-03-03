import React from 'react';

class ViewWork extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div>
        <nav className="NavWork">
          <div className="container-fluid NavWork-Inner">
            <a
              href="#"
              className="NavWork-Link">⟵ Другие работы</a>

            <ul className="d-none d-md-flex Menu NavWork-Menu">
              <li className="Menu-Item">
                <a href="#" className="Menu-Link Menu-Link_active"><i className="icon-display"></i></a>
              </li>

              <li className="Menu-Item">
                <a href="#" className="Menu-Link"><i className="icon-mobile"></i></a>
              </li>
            </ul>

            <div>
              <span className="mr-2 d-none d-md-inline">Цена похожей работы&nbsp;</span>

              <a
                className="btn btn-success"
                href="mailto:roman.sharpe23@gmail.com?subject=https://rsharpe.github.io%20|%20Вопрос%20от%20пользователя"><i className="icon-embed2 Icon"></i> Заказать $<strong>100</strong></a>
            </div>
          </div>
        </nav>

        <main>
          <iframe src="https://rsharpe-blog.ru/about/" className="Iframe Iframe_mobile"></iframe>
        </main>
      </div>
    );
  }
}

export default ViewWork;