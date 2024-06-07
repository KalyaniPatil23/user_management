import React, { useState } from 'react';
import './App.css';
import UserTable from './components/UserTable';
import UserForm from './components/UserForm';
import data from './data';

const App = () => {
  const [users, setUsers] = useState(data);
  const [editingUser, setEditingUser] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const addUser = (user) => {
    setUsers([...users, user]);
    setIsFormVisible(false);
  };

  const deleteUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  const editUser = ( updatedUser) => {
    let index = updatedUser.index;
    delete updatedUser.index
    const updatedUsers = users.map((user, i) => (i === index ? updatedUser : user));
    setUsers(updatedUsers);
    setEditingUser(null);
    setIsFormVisible(false);
  };

  return (
    <div>
      {isFormVisible ?
        <UserForm
          addUser={addUser}
          editUser={editUser}
          editingUser={editingUser}
          users={users}
          setFormVisible={setIsFormVisible}
        />
        :
        <>
          <div className='heading-card'>
            <h6 className='component-heading'>Active Users</h6>
            <button className='add-user-btn' onClick={() => setIsFormVisible(true)}>Add New User</button>
          </div>
          <UserTable
            users={users}
            deleteUser={deleteUser}
            setEditingUser={setEditingUser}
            setFormVisible={setIsFormVisible} />
        </>}
    </div>
  );
};

export default App;
