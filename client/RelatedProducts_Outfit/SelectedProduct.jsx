import React from 'react';

const SelectedProduct = (props) => (
  <div>
    <p className="selectedProductCategory">{props.product.category}</p>
    <p className="selectedProductName">{props.product.name}</p>
    <p className="selectedProductPrice">${props.product.default_price}</p>
    <div className="selectedProductRating"># of *stars*: averageRating</div>
  </div>
);

export default SelectedProduct;