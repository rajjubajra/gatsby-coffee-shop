import React from 'react'
import Img from 'gatsby-image';

export default function Product({product}) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-10 col-xs-11 mx-auto my-3">
      <div className="card text-center">
      <Img fluid={product.image.fluid} className="card-image-top mb-5" />
      <h6>{product.title}</h6>
      <h6>£{product.price}</h6>
      <button 
      className="btn btn-yellow text-capitalize mt-3
                 snipcart-add-item"
                data-item-id={product.id}
                data-item-name={product.title}
                data-item-price={product.price}
                data-item-image={product.image.fluid.src}
                data-item-url="https://yellow-wesbite-gatsby-coffee-shop.netlify.com/"
      >add to cart
      </button>
      </div>
    </div>
  )
}
