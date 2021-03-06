import React from 'react';
import {useSelector} from 'react-redux';

const RoomUsersList = () => {
  const users = useSelector((state) => state.room.users);

  return (
    <div>
      {users.map((user) => (
        <p key={user.id}>{user.id}</p>
      ))}
    </div>
  );
};

export default RoomUsersList;
