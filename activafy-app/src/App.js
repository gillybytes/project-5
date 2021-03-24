import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './components/pages/Home';
import { Balance } from './components/pages/Balance'


const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          {/* <Route exact path='/login' component={Signup} />
          <Route exact path='/signup' component={Login} /> */}
          <Route exact path='/settings' />
          <Route exact path='/balance' component={Balance} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
