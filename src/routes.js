import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import AddAuction from './pages/Auction';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/auction/new" component={AddAuction} />
      </Switch>
    </BrowserRouter>
  );
}
