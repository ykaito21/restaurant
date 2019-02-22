import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
// import Image from "../components/image"
import SEO from "../components/seo";
import { HomeHeader, Banner, BannerButton } from "../utils";
import img from "../images/bcg/homeBcg.jpeg";
import QuickInfo from "../components/HomePageComponents/QuickInfo";
import Gallery from "../components/HomePageComponents/Gallery";
import Menu from "../components/HomePageComponents/Menu";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={img}>
      <Banner title="eatery" subtitle="55 mainstreet santa monica tokyo">
        <Link to="/menu/" style={{ textDecoration: "none" }}>
          <BannerButton style={{ margin: "2rem auto" }}>Menu</BannerButton>
        </Link>
      </Banner>
    </HomeHeader>
    <QuickInfo />
    <Gallery />
    <Menu />
  </Layout>
);

Banner.defaultProps = {
  title: "title"
};

export default IndexPage;
