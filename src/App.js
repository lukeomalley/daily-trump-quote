import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { ProfilePage } from './pages/ProfilePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/profile" component={ProfilePage}></Route>
        <Route path="/" component={HomePage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
