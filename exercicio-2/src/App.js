import React from 'react';
// import Input from './components/Input'
import Login from './pages/Login'
import Home from './pages/Home';
import Produtos from './pages/Produtos'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
 
  return (
    < BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Login} /> 
        <Route path="/home"component={Home} />
        <Route path="/produtos" component={Produtos} />

        
      </Switch>
    </ BrowserRouter>
  );
}

export default App;
