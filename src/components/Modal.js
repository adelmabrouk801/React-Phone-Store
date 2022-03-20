import React, { Component } from "react";
import { ProductConsumer } from "../context";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default class modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div id = "modal" className="col-8 p-5 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                      <h5> Item added To the Cart</h5>
                      <img src={img} className='img-fluid' alt="product" />
                      <h5>{title}</h5>
                      <h5 className="text-muted"> Price : $ {price}</h5>
                      <Link to='/'>
                       <button className="button-cart" onClick={() =>  closeModal()}>
                           Continue Shopping
                           </button>
                           </Link>
                           <Link to='/cart'>
                           <button className="button-details" onClick={() =>  closeModal()}>
                           Go To Cart 
                           </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`

position :fixed;
top:0;
left:0;
right:0;
bottom:0; 
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;
#modal{
    background:var(--mainWhite);
}



`;
