import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Infos from './components/Infos';
import About from './components/About';
import Navbar from './components/Navbar';

/*
  TODO 

  - make a login system
  - make an express app
  - connect to db
  -get routes working

*/

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/infos" component={Infos} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
