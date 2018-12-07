import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import { HashRouter, Switch, Route, Link} from "react-router-dom"
import Home from './components/Home';
import NewListing1 from './components/NewListing1'
import NewListing2 from './components/NewListing2'
import NewListing3 from './components/NewListing3'

class App extends Component {
  
  render() {
    return (
      <div className="App">
       <Header/>
       <HashRouter>
         <Switch>
           <Route exact path='/' component={Home}/>
           <Route exact path='/basic' component={NewListing1}/>
           <Route exact path='/image' component={NewListing2}/>
           <Route exact path='/amount' component={NewListing3}/>
         </Switch>
       </HashRouter>
      </div>
    );
  }
}

export default App;
