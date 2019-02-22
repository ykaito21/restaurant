import React, { Component } from "react";
import { Link } from "gatsby";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import styled from "styled-components";
import { styles } from "../../../utils";

class NavbarIcons extends Component {
  state = {
    icons: [
      {
        id: 0,
        path: "https://www.facebook.com",
        icon: <FaFacebook className="icon facebook-icon" />
      },
      {
        id: 1,
        path: "https://www.twitter.com",
        icon: <FaTwitter className="icon twitter-icon" />
      },
      {
        id: 2,
        path: "https://www.instagram.com",
        icon: <FaInstagram className="icon instagram-icon" />
      }
    ]
  };
  render() {
    return (
      <IconWrapper navbarOpen={this.props.navbarOpen}>
        {this.state.icons.map(icon => {
          return (
            <a
              href={icon.path}
              key={icon.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon.icon}
            </a>
          );
        })}
      </IconWrapper>
    );
  }
}

const IconWrapper = styled.div`
  display: none;
  .icon {
    font-size: 1.3rem;
    cursor: pointer;

    ${styles.transFunction()};
    &:hover {
      color: ${styles.colors.mainYellow};
    }
  }
  .facebook-icon {
    color: #3b579d;
  }
  .twitter-icon {
    color: #3ab7f0;
  }
  .instagram-icon {
    color: #da5f53;
  }
  @media (min-width: 768px) {
    display: flex;
    width: 10rem;
    justify-content: space-around;
  }
`;

export default NavbarIcons;
