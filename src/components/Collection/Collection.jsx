import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { useState } from 'react';
import { Avatar } from '@material-ui/core';
import { Button } from '@material-ui/core';

function Collection() {
  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const gear = useSelector((store) => store.collection);
  const allFollowers = useSelector((store) => store.allFollowers);
  let { id } = useParams();

  useEffect(() => {
    dispatch({ type: 'FETCH_COLLECTION', payload: id });
    dispatch({ type: 'FETCH_FOLLOWERS' });
  }, []);

  const gearR = (id) => {
    history.push(`/gear/${id}`);
  };

  const followBtn = () => {
    if (user.id === gear[0].user_id) {
      console.log(
        'Current user is the collector. No Follow/Unfollow buttons will be displayed.'
      );
      return null;
    }

    for (let i = 0; i < allFollowers.length; i++) {
      if (
        allFollowers[i].follower_id === user.id &&
        allFollowers[i].followee_id === gear[0].user_id
      ) {
        console.log('Found a match!');
        return (
          <Button
            variant="contained"
            color="primary"
            onClick={() => unFollowAction()}
          >
            Unfollow
          </Button>
        );
      }
    }

    console.log('No match found!');
    return (
      <Button
        variant="contained"
        color="primary"
        onClick={() => followAction()}
      >
        Follow
      </Button>
    );
  };

  const followAction = () => {
    console.log(`you are now following ${gear[0].user_name}`);
    // Dispatch the action to follow the user
    const payload = {
      followerId: user.id, // The current user's id
      influencerId: gear[0].user_id, // The id of the user to be followed
    };
    dispatch({ type: 'FOLLOW_USER', payload });
  };

  const unFollowAction = () => {
    console.log(`you are now unFollowing ${gear[0].user_name}`);
    const payload = {
      followerId: user.id, // The current user's id
      influencerId: gear[0].user_id, // The id of the user to be followed
    };
    dispatch({ type: 'UN_FOLLOW_USER', payload });
  };

  return (
    <div className="container">
      {gear == 0 ? (
        <div>
          <h1 className="spinner"></h1>
        </div>
      ) : (
        <div>
          <h2> {gear[0].user_name}s' Collection</h2>
          <div>{followBtn()}</div>
          <div className="AllGearList">
            {gear.map((eachGear) => {
              return (
                <div key={eachGear.id}>
                  <div>
                    <img
                      className="AllImg"
                      onClick={() => gearR(eachGear.id)}
                      src={eachGear.image}
                    ></img>

                    <h3
                      onClick={() => gearR(eachGear.id)}
                      className="AllCatalogTitle"
                    >
                      {eachGear.year} : {eachGear.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// this allows us to use <App /> in index.js
export default Collection;
