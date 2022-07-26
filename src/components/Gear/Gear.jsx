import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Button } from '@material-ui/core';

function Gear() {
    const user = useSelector((store) => store.user);
    const history = useHistory();
    const dispatch = useDispatch();
    const gear = useSelector((store) => store.eachGear);
    let { id } = useParams();

    useEffect(() => {
        console.log(id);
        dispatch({ type: 'GEAR_CONT', payload: id });
    }, []);
    const upDel = () => {
        console.log('upDel');
        if (user.id === gear[0].user_id) {
            console.log('true');
            return (
                <div>
                    <Button variant="contained" color="primary" onClick={() => dispatch({ type: 'DELETE_GEAR', payload: id })}>Delete</Button>
                    <Button variant="contained" color="primary" onClick={() => dispatch({ type: 'EDIT_GEAR', payload: id })}>Edit</Button>
                </div>
            );
        }

    }


    return (
        <div className='gear_page' >

            {gear.length === 0 ?
                <h1 className='spinner'></h1> :
                <div className='card' >
                    <h2>{gear[0].title}</h2>
                    <h3>{gear[0].year}</h3>
                    {/* <p>{gear[0].image}</p> */}
                    <p>{gear[0].type_id}</p>
                    <p>{gear[0].review}</p>
                    <div>{upDel()}</div>
                </div>
            }

        </div>
    );
}
export default Gear;
{/* <p>{gear[0].user_id}</p> */ }
                    // <p>{user.id}</p>