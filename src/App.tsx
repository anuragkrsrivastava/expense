import React, {Component} from 'react';
import './App.css';
import AddExpense from './Pages/settings';
import Home from './Pages/home';
import ProfilePage from './Pages/profile'
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom'

class App extends Component{
  render(){
    return(
      <div>
      <header className = 'ExpenseApp'>
        <Router>
          <Switch>
            <Route exact path = '/' component = {Home}></Route>
            <Route exact path = '/settings' component = {AddExpense}></Route>
            <Route exact path = '/profile' component = {ProfilePage}></Route>
          </Switch>
        </Router>
      </header>
      </div> 
    );
  }
}
export default App;
