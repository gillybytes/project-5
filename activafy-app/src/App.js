import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import { Home } from './components/pages/Home'

import Login from './components/pages/auth/Login'
import Signup from './components/pages/auth/Signup'
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

import { Provider } from "react-redux";
import store from "./store";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authAction";
import PrivateRoute from "./components/private-route/PrivateRoute";
import { Component } from 'react'

if(localStorage.jwtToken){
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
const currentTime = Date.now() / 1000; // to get in milliseconds
if (decoded.exp < currentTime) {
  // Logout user
  store.dispatch(logoutUser());
  // Redirect to login
  window.location.href = "/";
  }
}




class App extends Component {
  render() {
  return (
    <Provider store={store}>
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/signup' component={Signup} />
          
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
    </Provider>
  );
  }
}

export default App;
