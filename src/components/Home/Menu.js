import React, { Component } from 'react'
import Title from '../Globals/Title';
import Img from 'gatsby-image';




export default class Menu extends Component {
  constructor(props){
    super(props)
    this.state = {
      items: props.items.edges,
      coffeeItems: props.items.edges,
    }
  }


  render() {
    
    
      if(this.state.items.length > 0){
        return(
          <section className="menu py-5">
            <div className="container">
              <div className="row">
                <Title title="Our Menu" />
              </div>
              <div className="row">  
                {
                  this.state.items.map(({node})=>{
                    return(
                      <div key={node.id} 
                           className="col-lg-6 co-md-6 col-sm-12 my-3 d-flex mx-auto">
                        <div>
                          <Img fixed={node.image.fixed} />
                        </div>
                        {/** text items */}
                        
                        <div className="flex-grow-1 px-3">
                          <div className="d-flex justify-content-between">
                          <h6 className="mb-0"><small>{node.title}</small></h6>
                          <h6 className="mb-0"><small>£{node.price}</small></h6>
                        </div>
                          <p className="text-muted"><small>{node.description.description}</small></p>
                         
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </section>
        )
      }else{
        return(
          <section>
            <div className="container">
              <div className="row">
                <Title title="Our Menu" />
                <h3>There are no items to display</h3>
              </div>
            </div>
          </section>
        )

      }
    
  }
}
