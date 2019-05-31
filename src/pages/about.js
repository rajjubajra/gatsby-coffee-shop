import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";

import SEO from "../components/seo";
import BackgroundImage from '../components/Globals/BackgroundSection';
import Info from "../components/Home/info";


const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
   <BackgroundImage 
   img={data.img.childImageSharp.fluid}
   title="About us"
   styleClass="about-background"
   />
   <Info />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: {eq: "coffee-2.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default AboutPage
