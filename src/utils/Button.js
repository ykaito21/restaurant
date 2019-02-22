import styled from "styled-components";
import { styles } from "../utils";

const BannerButton = styled.button`
  display: block;
  color: ${styles.colors.mainWhite};
  background: transparent;
  font-size: 1.5rem;
  font-weight: 700;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  ${styles.border({ color: `${styles.colors.mainWhite}` })};

  margin-bottom: 1rem;
  ${styles.transition({})};
  &:hover {
    background: ${styles.colors.mainWhite};
    color: ${styles.colors.mainBlack};
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

export { BannerButton };
