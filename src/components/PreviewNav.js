import React from 'react';
import Nav from './Nav';
import Menu from './Menu';

class PreviewNav extends React.Component {
  constructor(props) {
    super(props);
    this.handleMenuSelect = this.handleMenuSelect.bind(this);
    this.handleControlClick = this.handleControlClick.bind(this);
  }

  render() {
    return (
      <Nav className="Nav Preview-Nav">
        <div className="container-fluid Nav-Inner">
          <a 
            href="#" 
            onClick={this.handleControlClick}
            className="Nav-Link">⟵ Другие работы</a>

          <Menu 
            className="d-none d-md-flex Menu Nav-Menu" 
            value={[
              {
                href: '#',
                text: '<i class="icon-display"></i>',
              },
              {
                href: '#',
                text: '<i class="icon-mobile"></i>',
              },
            ]} 
            activeIndex="0"
            onSelect={this.handleMenuSelect} />

          <div>
            <span className="mr-2 d-none d-md-inline">Разработка от 3х дней</span>

            <a 
              href="#"
              className="btn btn-success"
              onClick={this.handleControlClick}><i className="icon-embed2 Icon"></i> Заказать $<strong>100</strong></a>
          </div>
        </div>
      </Nav>
    );
  }

  handleMenuSelect(index) {
    const { onMenuSelect } = this.props;
    onMenuSelect && onMenuSelect(index);
  }

  handleControlClick(value) {
    const { onControlClick } = this.props;
    onControlClick && onControlClick(value);
  }
}

export default PreviewNav;