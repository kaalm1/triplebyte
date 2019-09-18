import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './containers/Home'
import Page1 from './containers/Page1'
import Page2 from './containers/Page2'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/page1" component={Page1}/>
        <Route exact path="/page2" component={Page2}/>
      </Switch>
    </Router>
  );
}

export default App;
