import React, {Component} from 'react';


const getCurrentPath = () => {
  const path = document.location.pathname;
  return path.slice(path.lastIndexOf('/'));
};


export class Router extends Component {
  static childContextTypes = {
    route: React.PropTypes.string,
    linkHandler: React.PropTypes.func
  }

  state = {
    route: getCurrentPath()
  }

  getChildContext() {
    return {
      route: this.state.route,
      linkHandler: this.handleLinkClick
    };
  }

  componentDidMount() {
    window.onpopstate = () => {
      this.setState({
        route: getCurrentPath()
      });
    };
  }

  handleLinkClick = (route) => {
    this.setState({route});
    history.pushState(null, '', route);
  }

  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

Router.propTypes = {
  children: React.PropTypes.object.isRequired
};
