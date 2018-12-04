/* @flow */
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

type Props = {
  history: {
    push: (path: string) => void
  }
};

class Navigation extends React.Component<Props> {

  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link to="/" className="navbar-brand">Add Product Frontend</Link>
          </div>
        </div>
      </nav>
    );
  }
}


export default withRouter(
  connect()(Navigation)
);
