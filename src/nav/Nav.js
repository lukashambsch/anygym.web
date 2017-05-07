// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './static/Nav.css';

class Nav extends Component {
  props: {
  };

  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img
                src="http://nanniesintl.com//wp-content/uploads/2014/12/logo-nanny-new-01.png"
                alt="NanniesCA" />
            </Link>
          </li>
          <li>
            <Link to="/account">My Account</Link>
          </li>
          <li>
            <Link to="/login">Logout</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
