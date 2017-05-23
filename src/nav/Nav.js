// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import onClickOutside from 'react-onclickoutside';

import Button from '../shared/Button';
import type { User, Role } from '../auth/types';

import './static/Nav.css';

export type NavStateProps = {
  user: User;
  isMenuVisible: boolean;
};

export type NavDispatchProps = {
  toggleMenu: Function;
  closeMenu: Function;
};

class Nav extends Component {
  props: NavStateProps & NavDispatchProps;

  handleClickOutside(evt) {
    this.props.closeMenu();
  }

  canViewGym(): boolean {
    let gymRole: string = 'employee';
    let canView: boolean = false;

    for (let i: number = 0; i < this.props.user.roles.length; i++) {
      let role: Role = this.props.user.roles[i];
      if (role.role_name === gymRole || role.role_name === 'admin') {
        canView = true;
        break;
      }
    }

    return canView;
  }

  canViewMember(): boolean {
    let memberRole: string = 'member';
    let canView: boolean = false;

    for (let i: number = 0; i < this.props.user.roles.length; i++) {
      let role: Role = this.props.user.roles[i];
      if (role.role_name === memberRole || role.role_name === 'admin') {
        canView = true;
        break;
      }
    }

    return canView;
  }

  render() {
    return (
      <nav>
        <Link to="/">
          <img
            src="http://nanniesintl.com//wp-content/uploads/2014/12/logo-nanny-new-01.png"
            alt="NanniesCA" />
        </Link>
        <Button
          color="blue"
          clickHandler={this.props.toggleMenu}>
          <span>
            <span className="fa fa-bars"></span>
          </span>
        </Button>
        {this.props.isMenuVisible &&
          <ul>
            {this.canViewMember() &&
              <li>
                <Link to="/member/locations" onClick={this.props.closeMenu}>Find a Gym</Link>
              </li>
            }
            {this.canViewGym() &&
              <li>
                <Link to="/gym/visits" onClick={this.props.closeMenu}>Approve a Check In</Link>
              </li>
            }
            <li>
              <Link to="/account" onClick={this.props.closeMenu}>My Account</Link>
            </li>
            <li>
              <Link to="/login" onClick={this.props.closeMenu}>Logout</Link>
            </li>
          </ul>
        }
      </nav>
    );
  }
}

export default onClickOutside(Nav);
