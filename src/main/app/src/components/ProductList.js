/* @flow */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { refreshProducts } from '../data/modules/products';
import type { Product as ProductType } from '../data/modules/products';

import Product from './Product';
import './ProductList.less';

type Props = {
  status: string,
  products: ProductType[],
  refreshProducts: () => void
};

class ProductList extends React.Component<Props> {
  componentDidMount() {
    if (this.props.status === 'stale') {
      this.props.refreshProducts();
    }
  }

  handleRefreshProducts() {
    this.props.refreshProducts();
  }

  // deleteProduct(category : string, content : string) : void {
  //   this.props.dispatch(removeProduct(category, content));
  // }

  render() {
    return (
      <div className="products">
        <h1>Products</h1>
        <div>
          <Link to="/add" className="btn btn-primary">Add Product</Link>
          {' '}
          <button className="btn btn-default" onClick={() => this.handleRefreshProducts()}>Refresh</button>
        </div>
        { this.props.products.length === 0
            ? <p>No products yet! You could add one&hellip;?</p>
            : this.props.products.map(each => <Product category={each.category} content={each.content} key={each.id} />) }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    status: state.products.status,
    products: state.products.data
  };
}

export default connect(mapStateToProps, { refreshProducts })(ProductList);
