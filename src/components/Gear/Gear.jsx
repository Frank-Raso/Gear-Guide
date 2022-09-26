import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./Gear.css";
import { Avatar } from "@material-ui/core";
import { useState } from "react";

function Gear() {
  const user = useSelector((store) => store.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const allGear = useSelector((store) => store.allGear);
  const [gear, setGear] = useState(undefined);
  let { id } = useParams();
  
  useEffect(() => {
    console.log(id);
    dispatch({ type: "GEAR_CONT", payload: id });
    dispatch({ type: "FETCH_ALL_GEAR" });
  }, []);

  useEffect(() => {
    for (let i = 0; i < allGear.length; i++) {
      if (allGear[i].id == id) {
        setGear(allGear[i]);
        break;
      }
    }
  },[allGear]);

  const delete_Gear = async () => {
    if (window.confirm("Are you sure you want to delete this gear?")) {
      dispatch({ type: "DELETE_GEAR", payload: id });
      setTimeout(function () {
        history.push("/");
      }, 1);
    }
  };
  const minusOne = () => {
    for (let i = 0; i < allGear.length; i++) {
      if (allGear[i].id == gear.id && i == 0) {
        // we're at the first element, go home instead
        history.push("/")
      } else if(allGear[i].id == gear.id) {
        // we're somewhere in the middle
        history.push(`/gear/${allGear[i-1].id}`);
      }
    }
  };
  const plusOne = () => {
    for (let i = 0; i < allGear.length; i++) {
      if (allGear[i].id == gear.id && i == allGear.length - 1) {
        // we're at the last element, go home instead
        history.push("/")
      } else if(allGear[i].id == gear.id) {
        // we're somewhere in the middle
        history.push(`/gear/${allGear[i+1].id}`);
      }
    }
  };
  const whereTheSidewalkEnds = () => {
    history.push("/profile");
  };
  const editGear = () => {
    console.log("/In edit");
    history.push(`/edit/${gear.id}`);
  };

  const upDel = () => {
    console.log("upDel");
    if (user.id === gear.user_id) {
      console.log("true");
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

  return (
    <div className="gear_page">
      {gear == undefined  ? (
        <div>
          <h1 className="spinner"></h1>
        </div>
      ) : (
        <div className="card">
          <img className="arrowL" src="left-arrow.png" onClick={minusOne} />
          <img className="arrowR" src="right-arrow.png" onClick={plusOne} />
          <h2>{gear.title}</h2>
          <h3>{gear.year}</h3>
          <img className="gearImg" src={gear.image} alt="" />
          <p>{gear.review}</p>
          <div>{upDel()}</div>
        </div>
      )}
    </div>
  );
}
export default Gear;
