import React, { Component } from "react";
import { Section, Title, SectionButton } from "../../utils";
import styled from "styled-components";
import { Link } from "gatsby";
import { styles } from "../../utils";

class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title title="our mission" message="let us tell you" />
        <QuickInfoWrapper>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            harum vero dolorem eius eaque veritatis mollitia culpa nam.
            Inventore nobis aliquam aperiam accusantium velit sit reiciendis
            soluta praesentium molestias debitis, necessitatibus excepturi
            veritatis? Id at est repudiandae facere veritatis aperiam ad, atque
            pariatur facilis doloremque dignissimos placeat deleniti illo
            ducimus?
          </p>
          <Link to="/about/" style={{ textDecoration: "none" }}>
            <SectionButton style={{ margin: "2rem auto" }}>about</SectionButton>
          </Link>
        </QuickInfoWrapper>
      </Section>
    );
  }
}

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
  }
  @media (min-width: 768px) {
    width: 65%;
  }
`;

export default QuickInfo;
