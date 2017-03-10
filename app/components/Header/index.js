import React from 'react';
import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <NavBar>
          <HeaderLink to="/">
            Home
          </HeaderLink>
          <HeaderLink to="/sell">
            Sell
          </HeaderLink>
          <HeaderLink to="/account">
            Account
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}

export default Header;
