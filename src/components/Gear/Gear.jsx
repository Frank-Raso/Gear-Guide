import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './Gear.css';
import { Avatar } from '@material-ui/core';
import { useState } from 'react';
import allRocks from '../../redux/reducers/allRocks.reducer';

function Gear() {
  const likes = useSelector((store) => store.allRocks);
  const rocks = useSelector((store) => store.rocks);
  const user = useSelector((store) => store.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const allGear = useSelector((store) => store.allGear);
  const [gear, setGear] = useState(undefined);
  const [rock, setRock] = useState(undefined);
  let { id } = useParams();

  useEffect(() => {
    console.log(id);
    dispatch({ type: 'GEAR_CONT', payload: id });
    dispatch({ type: 'FETCH_ALL_GEAR' });
    dispatch({ type: 'FETCH_ROCKS' });
  }, []);

  useEffect(() => {
    for (let i = 0; i < allGear.length; i++) {
      if (allGear[i].id == id) {
        setGear(allGear[i]);
        break;
      }
    }
  }, [allGear]);

  const minusOne = () => {
    for (let i = 0; i < allGear.length; i++) {
      if (allGear[i].id == gear.id && i == 0) {
        // we're at the first element, go home instead
        history.push('/');
      } else if (allGear[i].id == gear.id) {
        // we're somewhere in the middle
        history.push(`/gear/${allGear[i - 1].id}`);
      }
    }
  };

  const plusOne = () => {
    for (let i = 0; i < allGear.length; i++) {
      if (allGear[i].id == gear.id && i == allGear.length - 1) {
        // we're at the last element, go home instead
        history.push('/');
      } else if (allGear[i].id == gear.id) {
        // we're somewhere in the middle
        history.push(`/gear/${allGear[i + 1].id}`);
      }
    }
  };

  const doesItRock = () => {
    if (user.id === gear.user_id) {
      return;
    }
    for (let i = 0; i < likes.length; i++) {
      if (likes[i].user_id === user.id && likes[i].gear_id === gear.id) {
        console.log('Found a match!');
        return <img className="rock" src="rock_rock.png" onClick={unlike} />;
      }
    }
    console.log('No match found!');
    return <img className="rock" src="not_rock.png" onClick={like} />;
  };

  const like = () => {
    console.log('like');
    const payload = {
      user_id: user.id,
      gear_id: gear.id,
    };
    dispatch({ type: 'ROCKS', payload: payload });
  };

  const unlike = () => {
    //not yet working still needs saga and server side/routers
    console.log('unlike');
    const payload = {
      user_id: user.id,
      gear_id: gear.id,
    };
    dispatch({ type: 'NOT_ROCKS', payload: payload });
  };

  const delete_Gear = async () => {
    if (window.confirm('Are you sure you want to delete this gear?')) {
      dispatch({ type: 'DELETE_GEAR', payload: id });
      setTimeout(function () {
        history.push('/');
      }, 1);
    }
  };

  const editGear = () => {
    console.log('/In edit');
    history.push(`/edit/${gear.id}`);
  };

  const upDel = () => {
    console.log('upDel');
    if (user.id === gear.user_id) {
      console.log('true');
      return (
        <div>
          <Button variant="contained" color="primary" onClick={delete_Gear}>
            Delete
          </Button>
          <Button variant="contained" color="primary" onClick={editGear}>
            Edit
          </Button>
        </div>
      );
    }
  };

  const gearProfile = () => {
    dispatch({ type: 'FETCH_COLLECTION', payload: gear.user_id });
    history.push(`/collection/${gear.user_id}`);
  };

  return (
    <div className="gear_page">
      {gear == undefined ? (
        <div>
          <h1 className="spinner"></h1>
        </div>
      ) : (
        <div className="card">
          <Avatar className="avatar2" onClick={gearProfile}>
            {gear.user_name[0]}
          </Avatar>
          <img className="arrowL" src="left-arrow.png" onClick={minusOne} />
          <img className="arrowR" src="right-arrow.png" onClick={plusOne} />
          <h2>{gear.title}</h2>
          <h3>{gear.year}</h3>
          <img className="gearImg" src={gear.image} alt="" />
          <p>{gear.review}</p>
          <div>{doesItRock()}</div>
          <div className="buttons-container">{upDel()}</div>
        </div>
      )}
    </div>
  );
}
export default Gear;
