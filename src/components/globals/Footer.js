import React, { Component } from "react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import styled from "styled-components";
import { styles } from "../../utils";

export class Footer extends Component {
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
      <FooterWrapper>
        <div className="title">eatery</div>
        <div className="icons">
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
        </div>
        <p className="copyright">copyright &copy; 2019 eatery</p>
      </FooterWrapper>
    );
  }
}

const FooterWrapper = styled.footer`
  padding: 1.5rem 0;
  background: ${styles.colors.mainBlack};
  .icons {
    display: flex;
    width: 10rem;
    justify-content: space-between;
    margin: 0 auto;
  }
  .icon {
    font-size: 1.3rem;
    color: ${styles.colors.mainWhite};
    ${styles.transFunction()};
    &:hover {
      color: ${styles.colors.mainYellow};
      cursor: pointer;
    }
  }

  .title {
    color: ${styles.colors.mainYellow};
    text-transform: uppercase;
    text-align: center;
    font-size: 1.5rem;
    width: 10rem;
    padding: 0.3rem 1rem;
    margin: 0 auto 2rem auto;
    ${styles.border({ color: `${styles.colors.mainYellow}` })};
  }
  .copyright {
    color: ${styles.colors.mainWhite};
    text-transform: capitalize;
    text-align: center;
    margin: 1rem 0;
  }
`;

export default Footer;
