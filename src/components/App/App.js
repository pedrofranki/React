import React from 'react';
import Login from '../Login/Login';
import Subscribe from '../Subscribe/Subscribe';
import './App.css';

import { BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/cadastro"><Subscribe/></Route>
          <Route path="/" component={Login}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
