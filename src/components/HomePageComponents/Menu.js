import React from "react";
import Product from "./Product";
import { Section, Title, SectionButton } from "../../utils";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";

const PRODUCTS = graphql`
  {
    items: allContentfulRestaurantMenu {
      edges {
        node {
          name
          price
          id
          ingredients
          image {
            fixed(width: 150, height: 150) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`;

function Menu() {
  return (
    <Section>
      <Title title="featured items" message="little taste" />
      <Link to="/menu/" style={{ textDecoration: "none" }}>
        <SectionButton style={{ margin: "2rem auto" }}>menu</SectionButton>
      </Link>
      <ProductList>
        <StaticQuery
          query={PRODUCTS}
          render={data => {
            const products = data.items.edges;
            return products.map(item => {
              return <Product key={item.node.id} product={item.node} />;
            });
          }}
        />
      </ProductList>
    </Section>
  );
}

const ProductList = styled.div`
  margin: 3rem;
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 3rem;
  @media (min-width: 768px) {
    grid-template-columns: 70%;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
  }
`;

export default Menu;
