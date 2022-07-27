import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import './All_Gear.css';

function All_Gear() {
    const history = useHistory();
    const dispatch = useDispatch();
    const gear = useSelector((store) => store.allGear);
    const user = useSelector((store) => store.user);

    useEffect(() => {
        dispatch({ type: 'FETCH_ALLGEAR' });
    }, []);
    const gearR = (id) => {
        history.push(`/gear/${id}`)
    }

    return (

        <div>
            <h2>All Gear</h2>
            <div className="GearList">
                {gear.map(eachGear => {
                    return (
                        <div className='GearItem' key={eachGear.id} >
                            <div>
                                <Avatar
                                    onClick={() => gearR(eachGear.id)}
                                    src={eachGear.image}></Avatar>
                                <h3 onClick={() => gearR(eachGear.id)} className='catalogTitle' >{eachGear.year}  :  {eachGear.title}</h3>
                                {/* <p className='catalogDescription'>{eachGear.year}</p> */}
                            </div>
                        </div>


                    );
                })}
            </div>
        </div>
    );
}

// this allows us to use <App /> in index.js
export default All_Gear;
