import React, { Component } from "react";
import {Link} from "react-router-dom";
import logo from "../logo.svg";


export default class NavBar extends Component {
  render() {
      
    return (
            <nav className="navbar navbar-expand-lg  navbar-dark px-5">
                <Link to="/">
                    <img src={logo} alt = " Phone Store" className="navbar-brand"/>
                </Link>
                 <ul className="navbar-nav align-items-center">

                    <li className="nav-item ms-5">
                        <Link to="/" className="nav-link">
                         Products
                        </Link>
                    </li>
                 </ul>
                 <Link to="/cart" className="ms-auto" >
                         <button className="button-cart " >
                           <span className="me-2">
                             <i className="fa-solid fa-cart-plus "></i>   
                           </span>
                           
                              My Cart
                         </button>
                        </Link>

            </nav>
    );
  }
}

  