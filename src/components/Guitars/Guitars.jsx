import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import './Guitars.css';
function Guitars() {
  const history = useHistory();
  const dispatch = useDispatch();
  const gear = useSelector((store) => store.guitarGear);
  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_GUITARS' });
  }, []);
  const gearR = (id) => {
    history.push(`/gear/${id}`);
  };

  return (
    <div className="container">
      <h2>- Guitars -</h2>
      <div className="GuitarList">
        {gear.map((eachGear) => {
          return (
            <div key={eachGear.id}>
              <div>
                <img
                  className="AllImg"
                  onClick={() => gearR(eachGear.id)}
                  src={eachGear.image}
                ></img>

                <h3 onClick={() => gearR(eachGear.id)} className="catalogTitle">
                  {eachGear.year} : {eachGear.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default Guitars;
