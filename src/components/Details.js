import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

import { faTicketSimple } from "@fortawesome/free-solid-svg-icons";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { id, company, img, info, price, title, inCart } =
            value.detailProduct;
          return (
            <div className="container">
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2> model : {title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 me-2">
                    Made by : {company}
                  </h4>
                  <h4 className="text-blue">
                    
                    Price : <span>$</span> {price}
                  </h4>
                  <p className=" text-capitalize mt-3 mb-0 font-weight-bold">
                    
                    some information about product :
                  </p>
                  <p className="text-muted lead"> {info}</p>

                  <div>
                    <Link to="/">
                      <button className="button-cart">back to Products</button>
                    </Link>
                    <button className="button-details" disabled={inCart?true:false}  onClick ={()=>{
                      value.addToCart(id);
                      value.openModal(id);
                      }}
                      >
                      {inCart?'inCart':'add to cart'}
                      </button>

                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
