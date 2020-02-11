import React from 'react';
import Login from './components/Login/Login';
import Subscribe from './components/Subscribe/Subscribe';
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
