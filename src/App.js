import React, { useState } from 'react';
import LandingPage from './Components/LandingPage';
import UpdateModal from './Components/UpdateModal';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard';
import Contact from './Components/Contact';
import CardCreator from './Components/CardCreator';
import PrivateRoute from './Components/PrivateRoute';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import { NavBar } from './AppStyles';
import { StyledLink } from './AppStyles';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/signin';
  };

  return (
    <div>
      <NavBar>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>

        {isLoggedIn ? null : <StyledLink to="/signin">Sign In</StyledLink>}

        {isLoggedIn ? null : <StyledLink to="/signup">Sign Up</StyledLink>}
        {isLoggedIn ? (
          <StyledLink onClick={handleLogout}>Sign Out</StyledLink>
        ) : null}
        {isLoggedIn ? (
          <StyledLink className="dashLink" to="/userdashboard">
            Dashboard
          </StyledLink>
        ) : null}
      </NavBar>
      <br />

      <Switch>
        <Route exact path="/signin">
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
        />
        <PrivateRoute exact path="/add" component={CardCreator} />
        <Route exact path="/contact" component={Contact}></Route>
      </Switch>
    </div>
  );
}

export default App;
