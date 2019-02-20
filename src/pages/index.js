import React from "react";
// import { Link } from "gatsby"

import Layout from "../components/layout";
// import Image from "../components/image"
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h3>hello world</h3>
  </Layout>
);

export default IndexPage;
