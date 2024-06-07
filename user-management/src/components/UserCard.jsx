import React from 'react';

const UserCard = ({ user, index, deleteUser, setEditingUser, setFormVisible }) => {
  const handleEdit = () => {
    setEditingUser({ ...user, index });
    setFormVisible(true);
  };

  return (
    <div className="user-card">
      <div className="user-card-body">
        <p className="user-card-text" style={{width: "150px", textAlign: "center"}}>{user.id}</p>
        <p className="user-card-text" style={{width: "300px"}}>{user.name}</p>
        <p className="user-card-text" style={{width: "250px"}}>{user.phone}</p>
        <div className="user-card-actions">
            <button className="edit user-card-text" onClick={handleEdit}>Edit</button>
            <button className="delete user-card-text" onClick={()=>{deleteUser(index)}}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
