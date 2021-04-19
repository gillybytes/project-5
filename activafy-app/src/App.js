import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { Home } from './components/pages/Home'
import { Login} from './components/pages/auth/Login'
import { Signup } from './components/pages/auth/Signup'
import { Balance } from './components/pages/Balance'
import { BalanceEdit } from './components/pages/Balance-edit'
import { Endurance } from './components/pages/Endurance'
import { EnduranceEdit } from './components/pages/Endurance-edit'
import { Flexibility } from './components/pages/Flexibility'
import { FlexibilityEdit } from './components/pages/Flexibility-edit'
import { Strength } from './components/pages/Strength'
import { StrengthEdit } from './components/pages/Strength-edit'
import { Settings } from './components/pages/Settings'
import { Stats } from './components/exercise/Stats'
import { toast } from 'react-toastify';

toast.configure();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = boolean => {
    setIsAuthenticated(boolean);
  };

  async function isAuth() {
    try {
      const response = await fetch('http://localhost:5000/auth/verified', {
        method: 'POST',
        headers: { token: localStorage.token}
      });
      
      const parseRes = await response.json();

      console.log(parseRes);
      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } 
      catch (err) {
      console.error(err.message); 
    }
  };

  useEffect(() => {
    isAuth();
  });

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/' 
            render={props => !isAuthenticated ? (
              <Login {...props} setAuth={setAuth}/>
            ) : (
              <Redirect to = "/home" />
            )
            }
          />
          <Route exact path='/settings' component={Settings}/>
          <Route exact path='/stats' component={Stats}/>
          <Route exact path='/balance' component={Balance} />
          <Route exact path='/balance-edit' component={BalanceEdit} />
          <Route exact path='/endurance' component={Endurance} />
          <Route exact path='/endurance-edit' component={EnduranceEdit} />
          <Route exact path='/flexibility' component={Flexibility} />
          <Route exact path='/flexibility-edit' component={FlexibilityEdit} />
          <Route exact path='/strength' component={Strength} /> 
          <Route exact path='/strength-edit' component={StrengthEdit} /> 
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
