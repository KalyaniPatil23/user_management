import React from 'react';
import UserCard from './UserCard';
import "./UserCard.css"

const UserTable = ({ users, deleteUser, setEditingUser, setFormVisible }) => {
  return (
    <div className="user-card-container">
        <div className="user-card" style={{borderRadius:"5px 5px 0px 0px"}}>
      <div className="user-card-body user-card-heading">
        <p style={{width: "150px", textAlign: "center"}}>Sr. No.</p>
        <p style={{width: "300px"}}>Name</p>
        <p style={{width: "250px"}}>Number</p>
        <p style={{paddingLeft: "10px"}}>Actions</p>
      </div>
    </div>
      {users.map((user, index) => (
        <UserCard
          key={index}
          index={index}
          user={user}
          deleteUser={deleteUser}
          setEditingUser={setEditingUser}
          setFormVisible={setFormVisible}
        />
      ))}
    </div>
  );
};

export default UserTable;
