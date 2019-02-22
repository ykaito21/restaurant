import React from "react";
import { Section } from "../../utils";
import { styles } from "../../utils";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const GET_IMAGES = graphql`
  {
    getImages: allFile(filter: { relativeDirectory: { eq: "homeGallery" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

function Gallery() {
  return (
    <StaticQuery
      query={GET_IMAGES}
      render={data => {
        const images = data.getImages.edges;
        return (
          <Section>
            <GalleryWrapper>
              {images.map(({ node }, index) => {
                return (
                  <div key={node.id} className={`item item-${index + 1}`}>
                    <Img fluid={node.childImageSharp.fluid} />
                    <p className="info">awesome</p>
                  </div>
                );
              })}
            </GalleryWrapper>
          </Section>
        );
      }}
    />
  );
}

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 1rem;
  .item {
    position: relative;
  }
  .info {
    position: absolute;
    top: 0;
    left: 0;
    background: ${styles.colors.mainYellow};
    padding: 0.1rem 0.3rem;
    text-transform: capitalize;
    /* color: ${styles.colors.mainWhite}; */
  }
  @media(min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1rem;
  }
  @media(min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 1rem;

/*
    grid-template-areas:
    'f f s s'
    'f f t t';

    .item-1 {
      grid-area: f;
    }
    .item-2 {
      grid-area: s;
    }
    .item-3 {
      grid-area: t;
    }
  } */

`;

export default Gallery;
