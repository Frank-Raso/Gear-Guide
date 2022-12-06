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
  let { id } = useParams();

  useEffect(() => {
    dispatch({ type: 'FETCH_COLLECTION', payload: id });
  }, []);

  const gearR = (id) => {
    history.push(`/gear/${id}`);
  };

  const followBtn = () => {
    console.log('followBtn');
    if (user.id == gear[0].user_id) {
      console.log(`cant follow yourself`);
    } else {
      return (
        <div>
          <Button variant="contained" color="primary" onClick={followAction}>
            Follow {gear[0].user_name}
          </Button>
        </div>
      );
    }
  };
  const followAction = () => {
    console.log(`you are now following ${gear[0].user_name}`);
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
          <p>{followBtn()}</p>
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
