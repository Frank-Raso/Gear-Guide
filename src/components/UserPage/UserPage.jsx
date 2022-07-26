import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function UserPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const gear = useSelector((store) => store.profileGear);
    const user = useSelector((store) => store.user);

    useEffect(() => {
        dispatch({ type: 'FETCH_GEAR' });
    }, []);

    const gearR = (id) => {
        history.push(`/gear/${id}`)
    }

    return (
        <div className="container">
            <h2>Welcome, {user.username}!</h2>
            {/* <p>{user.id}</p> */}
            <p>Your Gear:</p>
            <section className="gear">
            
                    <div>
                {gear.map(eachGear => {
                    return (
                        <div  key={eachGear.id} >
                            <div className='catalog'>
                                <h3 onClick={() => gearR(eachGear.id)} className='catalogTitle' >{eachGear.title}</h3>
                                <p className='catalogDescription'>---------</p>
                                {/* <p>{eachGear.year}</p> */}
                            </div>
                        </div>
                    );
                })}
                </div>
            </section>
                
        </div>
    );
}

// this allows us to use <App /> in index.js
export default UserPage;
