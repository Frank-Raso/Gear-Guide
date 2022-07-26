import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

function Gear() {

    const history = useHistory();
    const dispatch = useDispatch();
    const gear = useSelector((store) => store.eachGear);
    let { id } = useParams();

    useEffect(() => {
        console.log(id);
        dispatch({ type: 'GEAR_CONT', payload: id });
    }, []);
    const back = () => {
        console.log('back');
        history.push('/profile');
    }

    return (
        <div className='gear_page' >
            <button onClick={back}>Back to Profile</button>
            {gear.length === 0 ?
                <h1 className='spinner'></h1> :
                <div className='card' >
                    <h2>{gear[0].year}</h2>
                    <h3>{gear[0].title}</h3>
                    {/* <p>{gear[0].img}</p> */}
                    <p>{gear[0].review}</p>
                    </div>
                    }
        </div>
    );
}
export default Gear;
