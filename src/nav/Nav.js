// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './static/Nav.css';

export type NavStateProps = {
  isMenuVisible: boolean;
};

export type NavDispatchProps = {
  toggleMenu: Function;
};

class Nav extends Component {
  props: NavStateProps & NavDispatchProps;

  render() {
    return (
      <nav>
        <Link to="/">
          <img
            src="http://nanniesintl.com//wp-content/uploads/2014/12/logo-nanny-new-01.png"
            alt="NanniesCA" />
        </Link>
        <button className="button" onClick={this.props.toggleMenu}>
          <span>
            <span className="fa fa-bars"></span>
          </span>
        </button>
        {this.props.isMenuVisible &&
          <ul>
            <li>
              <Link to="/account">My Account</Link>
            </li>
            <li>
              <Link to="/login">Logout</Link>
            </li>
          </ul>
        }
      </nav>
    );
  }
}

export default Nav;
