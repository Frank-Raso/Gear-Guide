import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './UserPage.css';
import { Avatar } from '@material-ui/core';

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
            <Avatar
            >{user.username[0]}        
            </Avatar>
            <p>Welcome, {user.username}!</p>
            {/* <p>{user.id}</p> */}
            <p>Your Gear:</p>
            <div className='GearList'>
                {gear.map(eachGear => {
                    return (
                        <div className='GearItem' key={eachGear.id} >
                            <div className='catalog'>
                                <Avatar onClick={() => gearR(eachGear.id)} src={eachGear.image}
                                    sx={{ width: 56, height: 56 }}
                                />

                                <h3 onClick={() => gearR(eachGear.id)} className='catalogTitle' >{eachGear.year}  :  {eachGear.title}</h3>

                                {/* <h5>{eachGear.year}</h5> */}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

// this allows us to use <App /> in index.js
export default UserPage;
