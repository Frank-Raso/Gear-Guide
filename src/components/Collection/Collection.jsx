import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory , useParams} from 'react-router-dom';
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
    console.log(`this is the id:`,id);
  }, []);

  const gearR = (id) => {
    history.push(`/gear/${id}`);
  };

  return (
    <div className="container">
      <h2>- Collection -</h2>
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
  );
}

// this allows us to use <App /> in index.js
export default Collection;
