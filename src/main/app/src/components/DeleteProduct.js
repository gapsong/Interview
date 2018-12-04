// @flow
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { removeProduct } from '../data/modules/products';

type Props = {
  dispatch: Function,
  history: {
    push: (path: string) => void
  }
};

class DeleteProduct extends React.Component<Props> {
  categoryInput : ?HTMLInputElement;
  contextInput: ?HTMLInputElement;


  onSubmit(e) {
    e.preventDefault();

    const category = this.categoryInput;
    const content = this.contextInput;

    if (category && content) {
      this.deleteProduct(category.value.trim(), content.value.trim());
      category.value = '';
      content.value = '';
    }

    this.props.history.push('/');
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <h1>Delete Product</h1>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <input id="category" className="form-control" type="text" size={50} ref={el => { this.categoryInput = el; }} />
        </div>
        <div className="form-group">
          <label htmlFor="product">Product:</label>
          <input id="product" className="form-control" type="text" size={50} ref={el => { this.contextInput = el; }} />
        </div>
        <Link to="/" className="btn btn-primary">Back</Link>
        {' '}
        <button className="btn btn-success" type="submit">Submit</button>
      </form>);
  }
}

/* Inject dispatch() but no state into props */
export default withRouter(connect()(DeleteProduct));
