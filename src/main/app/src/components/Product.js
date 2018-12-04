/* @flow */
import React from 'react';

const Product = (props : { content: string, category : string }) => (
  <div className="message">
    <h3>{props.content}</h3>
    <p>Category: {props.category}</p>
    <button className="btn btn-warning">Delete</button>
  </div>
);

export default Product;
