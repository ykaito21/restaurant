import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { styles } from "../../../utils";
import { transFunction } from "../../../utils/styles";

class NavbarLinks extends Component {
  state = {
    links: [
      {
        id: 0,
        path: "/",
        name: "home"
      },
      {
        id: 1,
        path: "/about/",
        name: "about"
      },
      {
        id: 2,
        path: "/menu/",
        name: "menu"
      },
      {
        id: 3,
        path: "/contact",
        name: "contact"
      }
    ]
  };
  render() {
    return (
      <LinkWrapper navbarOpen={this.props.navbarOpen}>
        {this.state.links.map(link => {
          return (
            <li key={link.id}>
              <Link to={link.path} className="nav-link">
                {link.name}
              </Link>
            </li>
          );
        })}
      </LinkWrapper>
    );
  }
}

const LinkWrapper = styled.ul`
  height: ${props => (props.navbarOpen ? "152px" : 0)};
  overflow: hidden;
  ${styles.transObject({})};
  li {
    list-style: none;
  }
  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.5rem 1rem;
    color: ${styles.colors.mainGrey};
    font-weight: 700;
    text-transform: capitalize;
    cursor: pointer;
    ${styles.transDefault};
    &:hover {
      background: ${styles.colors.mainGrey};
      color: ${styles.colors.mainYellow};
      padding: 0.5rem 1rem 0.5rem 1.3rem;
    }
  }
  @media (min-width: 768px) {
    height: auto;
    display: flex;
    margin: auto;
    .nav-link:hover {
      background: ${styles.colors.mainWhite};
      padding: 0.5rem 1rem;
    }
  }
`;

export default NavbarLinks;
