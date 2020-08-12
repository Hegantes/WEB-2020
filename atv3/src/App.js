import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';

import Create from './components/Create';
import Home from './components/Home';
import List from './components/List';

export default class App extends Component{
  render(){
    return(
      <Router>
        <div className="container">
          <div className="border border-warning">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">CRUD</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav nav nav-tabs mr-auto">
                <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Inserir</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/list'} className="nav-link">Listar</Link>
                </li>
              </ul>
            </div>
          </nav>
          </div>

        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/create' component={Create}/>
          <Route path='/list' component={List}/>
        </Switch>

        </div>
      </Router>
    );
  }
}