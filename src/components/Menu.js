/* eslint-disable import/no-unresolved */
import React from 'react';
import { createMarkup } from '@/utils';
import './Menu.css';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: -1 };
  }

  render() {
    const { className = 'Menu', value } = this.props;

    return (
      <ul className={className}>
        {value.map((link, index) => (
          <li key={index} className="Menu-Item">
            <a
              href={link.href}
              className={this.getLinkClassNameBy(index)}
              target={link.target || '_self'}
              onClick={e => this.handleActiveIndex({ originalEvent: e, index })}
              dangerouslySetInnerHTML={createMarkup(link.text)} />
          </li>
        ))}
      </ul>
    );
  }

  getLinkClassNameBy(index) {
    let className = 'Menu-Link';

    if (index === this.state.activeIndex) {
      className += ' Menu-Link_active';
    }

    return className;
  }

  handleActiveIndex(e) {
    if (~this.state.activeIndex) {
      e.originalEvent.preventDefault();
      this.setActiveIndex(e.index);
    }
  }

  componentDidMount() {
    const { activeIndex } = this.props;
    activeIndex && this.setActiveIndex(+activeIndex);
  }

  setActiveIndex(newIndex) {
    const { onSelect } = this.props;
    this.setState({ activeIndex: newIndex });
    onSelect && onSelect(newIndex);
  }

  // handleActiveIndex(e) {
  //   e.originalEvent.preventDefault();
  //   this.setActiveIndex(e.index);
  // }

  // setActiveIndex(newIndex) {
  //   const { selectable, onSelect } = this.props;

  //   if (selectable) {
  //     this.setState({ activeIndex: newIndex });
  //     onSelect && onSelect(newIndex);
  //   }
  // }
}

export default Menu;