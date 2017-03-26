import React, {Component} from 'react';
import classNames from 'classnames';

import './Link.css';


export class Link extends Component {
  static contextTypes = {
    route: React.PropTypes.string,
    linkHandler: React.PropTypes.func
  }

  handleClick = (e) => {
    e.preventDefault();
    this.context.linkHandler(this.props.to);
  }

  render() {
    return (
      <a
        href="#"
        className={classNames('footer__link', {'footer__link--selected': this.context.route === this.props.to})}
        onClick={this.handleClick}
      >
        {this.props.children}
      </a>
    );
  }
}

Link.propTypes = {
  to: React.PropTypes.string.isRequired,
  children: React.PropTypes.string.isRequired
};
