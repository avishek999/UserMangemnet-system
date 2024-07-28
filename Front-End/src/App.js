
import './App.css';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import User from './users/pages/User'
import {BrowserRouter as Router,Route,Redirect,Switch } from 'react-router-dom';

function App() {
  return (
  <Router>
    <MainNavigation />
    <main>
    <Switch>
    <Route path="/" exact>
    <User />
    </Route>
    <Route path="/places/new" exact>
    <NewPlace />
    </Route>

   <Redirect to="/"/>
   </Switch>
   </main>
  </Router>
  );
}

export default App;
