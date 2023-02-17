import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './UserPage.css';
import { Avatar } from '@material-ui/core';
import { Button } from '@material-ui/core';

function UserPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const gear = useSelector((store) => store.profileGear);
  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_GEAR' });
  }, []);

  const gearR = (id) => {
    history.push(`/gear/${id}`);
  };
  const routeAddGear = () => {
    history.push('/addgear');
  };

  const gearLess = () => {
    console.log('gearLess');
    if (gear.length < 1) {
      return (
        <div>
          <p className="gearless">
            {user.username} has no gear yet! Click on the + below to add some
            gear
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <p>{user.username}'s Gear</p>
        </div>
      );
    }
  };

  return (
    <div className="container">
      <Avatar className="avatar">{user.username[0]}</Avatar>
      <p>{user.username}'s Gear</p>
      <div>{gearLess()}</div>
      <div className="GearList">
        {gear.map((eachGear) => {
          return (
            <div className="GearItem" key={eachGear.id}>
              <div className="catalog">
                <img
                  className="GearImg"
                  onClick={() => gearR(eachGear.id)}
                  src={eachGear.image}
                ></img>

                <h3 onClick={() => gearR(eachGear.id)} className="catalogTitle">
                  {eachGear.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
      <br />
      <br />
      <br />
      <img className="addclick" src="2x.png" alt="" onClick={routeAddGear} />
      <br />
      <br />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
