import React from "react";
import styled from "styled-components";
import { styles } from "../utils";

function Title({ title, message }) {
  return (
    <TitleWrapper>
      <h3 className="message">{message}</h3>
      <h1 className="title">{title}</h1>
      <div className="underline" />
    </TitleWrapper>
  );
}

const TitleWrapper = styled.div`
  text-align: center;
  .title {
    text-transform: uppercase;
    ${styles.letterSpacing({ spaceing: "0.3rem" })};
    font-size: 2rem;
  }
  .message {
    ${styles.textSlanted}
    ${styles.letterSpacing({ spaceing: "0.3rem" })};
    font-size: 2rem;
    color: ${styles.colors.mainYellow};
  }

  .underline {
    width: 5rem;
    height: 0.2rem;
    background: ${styles.colors.mainYellow};
    margin: 0.5rem auto;
  }
`;

Title.defaultProps = {
  title: "my title",
  message: "our message"
};

export { Title };
