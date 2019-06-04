import React from 'react'
import Title from '../Globals/Title';
import Product from './Product';
import { StaticQuery, graphql } from 'gatsby';


const getProducts = graphql`
{
  coffeeProducts:allContentfulCoffeeProduct{
    edges{
      node{
        id
        title
        price
        image{
          fluid(maxWidth:426){
            src
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
}
`;

export default function Products() {
  return (
    <StaticQuery 
      query={getProducts} 
      render={ data => {
      return(
        <section className="py-5">
          <div className="container">
            <div className="row">
              <Title title="products" />
            </div>
            <div className="row">
              {
                 data.coffeeProducts.edges.map(({node:product})=>{
                   return(
                     <Product key={product.id} product={product} />
                   )
                 }) 
              }
            </div>
          </div>
        </section>
      )
      }} />
  )
}
