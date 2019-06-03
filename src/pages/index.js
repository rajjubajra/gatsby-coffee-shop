import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";

import SEO from "../components/seo";
import BackgroundImage from '../components/Globals/BackgroundSection';
import Info from "../components/Home/info";
import Menu from "../components/Home/Menu";
import Products from "../components/Home/Products";
import Contact from "../components/Home/Contact";


const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
   <BackgroundImage 
   img={data.img.childImageSharp.fluid}
   title="Coffee Shop"
   styleClass="default-background"
   />
   <Info />
   <Menu items={data.menu} />
   <Products />
   <Contact />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: {eq: "coffee-1.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }

  menu:allContentfulCoffeItems{
    edges{
      node{
        id
        title
        price
        image {
          fixed(width:100){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
        description {
          description
        }
        category
        
      }
    }
  } 


}
`

export default IndexPage
