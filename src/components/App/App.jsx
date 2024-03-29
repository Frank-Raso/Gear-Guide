import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import AddGear from '../AddGear/AddGear';
import All_Gear from '../All_Gear/All_Gear';
import Guitars from '../Guitars/Guitars';
import Amps from '../Amps/Amps';
import Accessories from '../Accessories/Accessories';
import Gear from '../Gear/Gear';
import Edit from '../EditPage/Edit';
import Collection from '../Collection/Collection';
import './App.css';
import SideBar from '../SideBar/SideBar';
import Liked from '../Liked/Liked';
import Following from '../Following/Following';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <SideBar />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/profile */}
          <Redirect exact from="/" to="/home" />
          <Redirect exact from="/gear/0" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/profile"
          >
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute exact path="/gear/:id">
            <Gear />
          </ProtectedRoute>

          <ProtectedRoute exact path="/edit/:id">
            <Edit />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/addGear"
          >
            <AddGear />
          </ProtectedRoute>

          <ProtectedRoute exact path="/all">
            <All_Gear />
          </ProtectedRoute>

          <ProtectedRoute exact path="/collection/:id">
            <Collection />
          </ProtectedRoute>

          <ProtectedRoute exact path="/guitars">
            <Guitars />
          </ProtectedRoute>

          <ProtectedRoute exact path="/amps">
            <Amps />
          </ProtectedRoute>

         <ProtectedRoute exact path="/liked">
            <Liked />
          </ProtectedRoute>

          <ProtectedRoute exact path="/following">
            <Following />
          </ProtectedRoute>

          <ProtectedRoute exact path="/Accessories">
            <Accessories />
          </ProtectedRoute>

          <Route exact path="/login">
            {user.id ? (
              // If the user is already logged in,
              // redirect to the /user page
              <Redirect to="/profile" />
            ) : (
              // Otherwise, show the login page
              <LoginPage />
            )}
          </Route>

          <Route exact path="/registration">
            {user.id ? (
              // If the user is already logged in,
              // redirect them to the /user page
              <Redirect to="/profile" />
            ) : (
              // Otherwise, show the registration page
              <RegisterPage />
            )}
          </Route>

          <Route exact path="/home">
            {user.id ? (
              // If the user is already logged in,
              // redirect them to the /user page
              <Redirect to="/profile" />
            ) : (
              // Otherwise, show the Landing page
              <LandingPage />
            )}
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>...404</h1>
            <p>No Gear Here Bud</p>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
