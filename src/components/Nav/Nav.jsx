import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import {Avatar} from '@material-ui/core';

function Nav() {
  const user = useSelector((store) => store.user);
  
  return (
    <div className="nav">
      <Link to="/home">
        <img className='ico' src="favicon.ico" alt="" />
        <p className="nav-title">Gear Guide</p>

      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <>
            <Link className="navLink" to="/login">
              Login / Register
            </Link>
            <Link className="navLink" to="/about">
              About
            </Link>
          </>

        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
          
            <Link className="navLink" to="/profile">
              Home
            </Link>
  
            {/* <Link className="navLink" to="/all">
              All Gear
            </Link>

            <Link className="navLink" to="/guitars">
              Guitars
            </Link>

            <Link className="navLink" to="/amps">
              Amps
            </Link>

            <Link className="navLink" to="/accessories">
              Accessories
            </Link>

            <Link className="navLink" to="/addgear">
              Add Gear
            </Link>   */}


            <Link className="navLink" to="/about">
              About
            </Link>

            <LogOutButton className="navLink" />

          </>
        )}
      </div>
    </div>
  );
}

export default Nav;
