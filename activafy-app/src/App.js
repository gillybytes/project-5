import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './components/pages/Home';
import { Login} from './components/pages/auth/Login';
import { Signup } from './components/pages/auth/Signup';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/' component={Signup} />
          <Route exact path='/' component={Login} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
