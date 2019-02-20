import React, { Component } from "react";
import NavbarHeader from "./NavbarHeader";
import NavbarLinks from "./NavbarLinks";
import NavbarIcons from "./NavbarIcons";

import styled from "styled-components";

class Navbar extends Component {
  state = {
    navbarOpen: false
  };

  handleNavbar = this.setState(({ navbarOpen }) => ({
    navbarOpen: !navbarOpen
  }));
  render() {
    return (
      <NavWrapper>
        <NavbarHeader handleNavbar={this.handleNavbar} />
        <NavbarLinks navbarOpen={this.state.navbarOpen} />
        <NavbarIcons />
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  @media (min-width: 786px) {
    display: flex;
    align-items: center;
  }
`;

export default Navbar;
