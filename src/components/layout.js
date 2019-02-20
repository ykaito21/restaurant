import React from "react";
import { createGlobalStyle } from "styled-components";
import Navbar from "../components/globals/navbar";
import PropTypes from "prop-types";

import "./layout.css";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Navbar />
      {children}
    </React.Fragment>
  );
};

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Open Sans', 'sans-serif';
  background: #fff
}

`;

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
