import React, { useState } from 'react';
import LandingPage from './Components/LandingPage';
import About from './Components/About';
import UpdateModal from './Components/UpdateModal';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard';
import Contact from './Components/Contact';
import CardCreator from './Components/CardCreator';
import PrivateRoute from './Components/PrivateRoute';
import SignUp from './Components/SignUp';
import SignIn from './Components/NewSignIn';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <>
      <div className="App">
        <nav className="NAVBAR">
          <h1 className="apptitle">PinteReach</h1>

          <Link className="active" to="/">
            Home
          </Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>

          {isLoggedIn ? null : <Link to="/login">Log In</Link>}
          {isLoggedIn ? null : <Link to="/signup">Sign Up</Link>}
          {isLoggedIn ? <Link onClick={handleLogout}>Log Out</Link> : null}
          {isLoggedIn ? (
            <Link className="dashLink" to="/userdashboard">
              Dashboard
            </Link>
          ) : null}
        </nav>
        <br />

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/login">
            <SignIn setIsLoggedIn={setIsLoggedIn} />
          </Route>
          <PrivateRoute exact path="/userdashboard" component={Dashboard} />
          <Route exact path="/" component={LandingPage} />
          <Route path="/signup">
            <SignUp />
          </Route>
          <PrivateRoute
            exact
            path="/update/articles/:id"
            component={UpdateModal}
          />{' '}
          {/*This is very much needed*/}
          <PrivateRoute exact path="/add" component={CardCreator} />
          <Route exact path="/contact" component={Contact}></Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
