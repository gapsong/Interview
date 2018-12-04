/* @flow */
import React from 'react';
import { Route, Switch } from 'react-router';
import AppMeta from './AppMeta';

import { AddProduct, DeleteProduct, ProductList, Errors, Navigation } from '../components';

const App = () => (
  <div>
    <AppMeta />
    <Navigation />

    <div className="container">
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/add" component={AddProduct} />
        {/* <Route path="/delete" component={DeleteProduct} /> */}
        <Route component={Errors} />
      </Switch>
    </div>
  </div>
);

export default App;
