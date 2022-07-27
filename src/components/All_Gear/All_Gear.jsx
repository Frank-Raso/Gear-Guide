import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

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
        <div className="container">
            <h2>All Gear</h2>
            <section className="gear">

            <div>
                {gear.map(eachGear => {
                    return (
                        <div  key={eachGear.id} >
                            <div className='catalog'>
                                <h3 onClick={() => gearR(eachGear.id)} className='catalogTitle' >{eachGear.year}  :  {eachGear.title}</h3>
                                {/* <p className='catalogDescription'>{eachGear.year}</p> */}
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
export default All_Gear;
