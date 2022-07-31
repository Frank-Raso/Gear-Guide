import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './Gear.css';
import { Avatar } from '@material-ui/core';


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

    const delete_Gear = async () => {
        if (window.confirm('Are you sure you want to delete this gear?')) {
            dispatch({ type: 'DELETE_GEAR', payload: id });
            setTimeout(function () {
                history.push('/');
            }, 1);

        }
    }
    const minusOne = () => {
        let Mid;
        Mid = Number(id) - 1;
        history.push(`/gear/${Mid}`);
    }
    const plusOne = () => {
        let Pid;
        Pid = Number(id) + 1;
        history.push(`/gear/${Pid}`);
    }
    const whereTheSidewalkEnds = () => {
        history.push('/profile');
    }
    const editGear = () => {
        console.log('/In edit')
        history.push(`/edit/${id}`);
    }

    const upDel = () => {
        console.log('upDel');
        if (user.id === gear[0].user_id) {
            console.log('true');
            return (
                <div>
                    <Button variant="contained" color="primary" onClick={delete_Gear}>Delete</Button>
                    <Button variant="contained" color="primary" onClick={editGear}>Edit</Button>
                </div>
            );
        }

    }


    return (
        <div className='gear_page' >

            {gear.length === 0 ?
                <div> 
                <h1 className='spinner'></h1></div> :
                <div className='card' >


                    <img className='arrowL' src="left-arrow.png" onClick={minusOne} />
                    <img className='arrowR' src="right-arrow.png" onClick={plusOne} />
                    <h2>{gear[0].title}</h2>
                    <h3>{gear[0].year}</h3>
                    <img className='gearImg' src={gear[0].image} alt="" />
                    <p>{gear[0].review}</p>
                    <div>{upDel()}</div>

                </div>
            }
        </div>
    );
}
export default Gear;