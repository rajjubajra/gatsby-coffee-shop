import React, { Component } from 'react';
import {Link} from 'gatsby';
import Logo from '../../images/logo-150x150.png';
import {FaCartArrowDown} from 'react-icons/fa';
import {FaUserAlt} from 'react-icons/fa';

export default class Nabar extends Component {
  state ={
    navbarOpen: false,
    css: 'collapse navbar-collapse justify-content-between' ,
    links:[
      {
        id:1,
        path: '/',
        text: 'home'
      },
      {
        id:2,
        path: '/about',
        text: 'about'
      },
      {
        id:3,
        path: '/contact',
        text: 'contact'
      }

    ]
  }

  navbarHandler = () => {
    this.state.navbarOpen 
    ? this.setState({navbarOpen: false, css: 'collapse navbar-collapse'})
    : this.setState({navbarOpen: true, css: 'collapse navbar-collapse show'})

  }
  render() {
    return (
      <nav className="navbar navbar-expand-md bg-light navbar-light fixed-top">

        {/** TOGGLE BUTTON  */}
        <button className="navbar-toggle collapsed" type="button" onClick={this.navbarHandler}>
          <span className="navbar-toggler-icon"></span>
        </button>

        
        <div className={this.state.css}>
          {/** NAVIGATION MENU ITEM */}
            <ul className="navbar-nav">
              {
                this.state.links.map(link=>{
                  return(
                    <li key={link.id} className="nav-item">
                      <Link to={link.path}  className="nav-link text-capitalize">{link.text}</Link>
                    </li>
                  )
                })
              }
            </ul>
            <ul className="logo">
              <li>
                {/** IMAGE LOGO */}
                   <img src={Logo} alt="Logo" style={{width: "50px"}}/>
              </li>
            </ul>
            {/**  SNIPCART: SHOPING CART  */}
            <ul className="shopping-cart-item">  
              
              <li className="snipcart-summary">
                  <small>{/*Items:*/} <span className="snipcart-total-items"></span></small>
                  <FaCartArrowDown className="cart-icon snipcart-checkout"/>
                  <small>{/*Total Amount:*/}<span className="snipcart-total-price"></span></small>
              </li>
              <li>
                <a href="#" className="snipcart-user-profile">
                  <FaUserAlt className="snipcart-user-email" />
                </a>
               {/* <a href="#" className="snipcart-user-logout">Logout</a> */} 
              </li>
            </ul>
        </div>

      </nav>
    )
  }
}
