import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { PageHeader, Banner } from "../utils";
import img from "../images/bcg/menuBcg.jpeg";

const MenuPage = () => (
  <Layout>
    <SEO title="Menu" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={img}>
      <Banner title="menu" subtitle={`this is our menu`} />
    </PageHeader>
  </Layout>
);

export default MenuPage;
