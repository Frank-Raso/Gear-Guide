import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import './Liked.css';

function Liked() {
  const history = useHistory();
  const dispatch = useDispatch();
  const gear = useSelector((store) => store.ampGear);
  const user = useSelector((store) => store.user);
  const likes = useSelector((store) => store.allRocks);
  const allGear = useSelector((store) => store.allGear);

  useEffect(() => {
    dispatch({ type: 'FETCH_ROCKS' });
    dispatch({ type: 'FETCH_ALL_GEAR' });
  }, []);
  const gearR = (likes) => {
    history.push(`/gear/${likes.gear_id}`);
  };

  const likedGear = allGear.filter((gear) => {
    return likes.some(
      (like) => like.gear_id === gear.id && like.user_id === user.id
    );
  });

  return (
    <div>
      <h2>- {user.username}'s Liked Gear -</h2>
      <div className="List">
        {likedGear.map((gear, index) => (
          <div
            key={index}
          >
            <img className="GuitarImg" src={gear.image} onClick={() => history.push(`/gear/${gear.id}`)} />
            <h3>{gear.year} : {gear.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Liked;
