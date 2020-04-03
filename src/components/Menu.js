/* eslint-disable import/no-unresolved */
import React from 'react';
import { createMarkup } from '@/utils';
import './Menu.css';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.handleLinkClick = this.handleLinkClick.bind(this);
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
              onClick={e => this.handleLinkClick({ originalEvent: e, index })}
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

  componentDidMount() {
    const activeIndex = +this.props.activeIndex;

    if (!Number.isNaN(activeIndex)) {
      this.setActiveIndex(activeIndex);
    }
  }

  setActiveIndex(newIndex) {
    this.setState({ activeIndex: newIndex });
    const { onSelect } = this.props;
    onSelect && onSelect(newIndex);
  }

  componentDidUpdate(prevProps) {
    const { activeIndex } = this.props;

    // Без проверки будет бесконечное зацикливание
    if (activeIndex !== prevProps.activeIndex) {
      this.setActiveIndex(activeIndex);
    }
  }

  handleLinkClick(e) {
    if (~this.state.activeIndex) {
      e.originalEvent.preventDefault();
      this.setActiveIndex(e.index);
    }
  }
}

export default Menu;