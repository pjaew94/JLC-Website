import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './layout/Landing/Landing'
import Navbar from './layout/Navbar'
import Footer from './layout/Landing/Footer'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Fragment>
        <Navbar />
          <Switch>
            <Route exact path='/' component={Landing} />
          </Switch>
          <Footer />
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
