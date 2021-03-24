import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './components/pages/Home';



const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          {/* <Route exact path='/' component={Signup} />
          <Route exact path='/' component={Login} /> */}
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
