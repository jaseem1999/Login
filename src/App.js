import './App.css';
import Signin from './Components/Signin/Signin';
import {BrowserRouter as Router, Route,Switch} from  'react-router-dom';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/"  >
          <Home/>
        </Route>
       </Switch>
       <Switch>
        <Route exact path="/main"  >
          <Main/>
        </Route>
       </Switch>
        <Switch>
        <Route exact path="/login"  >
          <Login/>
        </Route>
        </Switch>
      <Switch>
        <Route exact path="/signin">
          <Signin/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
