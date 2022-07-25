import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

function UserPage() {

  const dispatch = useDispatch();
  const gear = useSelector((store) => store.profileGear);
  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_GEAR' });
}, []);


return (
  <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your Gear:</p>
      <section className="movies">

                {gear.map(g => {
                    return (
                        <div key={g.id} >
                            <div className='catalog'>
                                <h3 className='catalogTitle' >{g.title}</h3>
                                <p className='catalogDescription'>{g.year}</p>
                            </div>
                        </div>
                    );
                })}
            </section>
  </div>
);
}

// this allows us to use <App /> in index.js
export default UserPage;
