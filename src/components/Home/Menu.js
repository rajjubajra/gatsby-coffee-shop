import React, { Component } from 'react'
import Title from '../Globals/Title';
import Img from 'gatsby-image';

const getCategories = items => {
  let tempItem = items.map(items=>{
    return items.node.category;
  });
  let tempCategories = new Set(tempItem);
  let categories = Array.from(tempCategories);
  categories = ["all", ...categories];
  return categories;

};


export default class Menu extends Component {
  constructor(props){
    super(props)
    this.state = {
      items: props.items.edges,
      coffeeItems: props.items.edges,
      /** value get back from getCategory function  */
      categories: getCategories(props.items.edges)
    }
  }

  handleItem = (category) => {
    console.log('clicked item:', category);
    const tempItems = [...this.state.items];
    if(category === 'all'){
      this.setState(()=>{
        return{coffeeItems: tempItems};
      });
      
    }else{
      let items = tempItems.filter(({node})=>
        node.category === category );
       console.log(items);  
       this.setState(()=>{
         return {coffeeItems: items}
       })    
    }
  }


  render() {
      if(this.state.items.length > 0){
        return(
          <section className="menu py-5">
            <div className="container">
              <div className="row">
                <Title title="Menu" />
              </div>
              {/**CATEGORIRES */}
              <div className="row md-5">
                <div className="col-10 max-auto text-center d-flex">
                  { this.state.categories.map((category, index)=>{
                    return(
                      <button type="button" key={index} className="btn btn-yellow text-capitalize mt-3" onClick={()=>{this.handleItem(category)}}>
                        {category}
                      </button>
                      )
                  })}
                </div>

              </div>
              <div className="row">  
                {
                  this.state.coffeeItems.map(({node})=>{
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
