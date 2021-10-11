import logo from './logo.svg';
import './App.css';
import React from 'react';
import DashboardUsers from './components/Dashboard/DashboardUsers';
import DashboardProducts from './components/Dashboard/DashboardProducts';
import DashboardUserDetail from './components/Dashboard/DashboardUserDetail';
import DashboardProductDetail from './components/Dashboard/DashboardProductDetail';
import Dashboard404 from './components/Dashboard/Dashboard404';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <main>
        <Switch>
          <Route exact path="/" component={DashboardUsers}/>
          <Route exact path="/products" component={DashboardProducts}/>
          <Route path="/dashboard/users/:id" component={DashboardUserDetail}/>
          <Route path="/dashboard/products/:id" component={DashboardProductDetail}/>
          <Route component={Dashboard404} />
        </Switch>

      </main>
    </div>
  );
}

export default App;
