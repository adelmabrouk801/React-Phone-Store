import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class Default extends Component {
  render() {
    
    return (
      <div className="container">
      <div className=" row">
        <div className="col-10 mx-auto text-center text-title
        text-uppercase pt-5">
          <h1 className="display-3">Oops! </h1>
          <h1>error 404</h1>
          <h2>page not found</h2>
          <h3>
            the requested URL was not found
          </h3>
          <h4>Redirecting to <Link to="/">Homepage</Link> for more Products...</h4>
        </div>
      </div>
     </div>
    )
  }
}
