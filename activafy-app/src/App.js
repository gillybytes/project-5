import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Home } from './components/pages/Home';
import { Login} from './components/pages/auth/Login';
import { Signup } from './components/pages/auth/Signup';
import { Balance } from './components/pages/Balance'
import { Settings } from './components/pages/Settings'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/' component={Login} />
          <Route exact path='/settings' component={Settings}/>
          <Route exact path='/balance' component={Balance} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
