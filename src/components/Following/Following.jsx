import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import './Following.css';

function Following() {
  const history = useHistory();
  const dispatch = useDispatch();
  const gear = useSelector((store) => store.ampGear);
  const user = useSelector((store) => store.user);
  const likes = useSelector((store) => store.allRocks);
  const allGear = useSelector((store) => store.allGear);
  const following = useSelector((store) => store.allFollowers);

  const currentUserFollowing = following.filter(
    (followedUser) => followedUser.follower_id === user.id
  );

  const followedUserNames = currentUserFollowing
    .map((followedUser) => {
      const matchedGear = allGear.find(
        (gear) => gear.user_id === followedUser.followee_id
      );
      return matchedGear ? matchedGear.user_name : null;
    })
    .filter((userName) => userName !== null);

  useEffect(() => {
    dispatch({ type: 'FETCH_GEAR' });
    dispatch({ type: 'FETCH_FOLLOWERS' });
    dispatch({ type: 'FETCH_ROCKS' });
    dispatch({ type: 'FETCH_ALL_GEAR' });
  }, []);

  useEffect(() => {
    console.log(`following: `, following);
  }, [following]);

  return (
    <div className="followingContainer">
      {currentUserFollowing.length === 0 ? (
        <div>
          <h2>{user.username} is not following anyone yet!</h2>
        </div>
      ) : (
        <div>
          <h2>{user.username} is Following:</h2>
          <div className="followingList">
            {followedUserNames.map((userName, index) => (
              <p
              onClick={() =>
                history.push(
                  `/collection/${currentUserFollowing[index].followee_id}`
                )
              }
              key={index}
            >
              <Avatar className='followingAvatar'>{userName[0]}</Avatar> {userName}
            </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Following;
