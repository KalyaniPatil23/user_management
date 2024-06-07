import React, { useEffect, useState } from "react";
import { FiPhone } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineChevronLeft } from "react-icons/hi";
import './UserForm.css';

const UserForm = ({ users, addUser, editUser, editingUser, setFormVisible }) => {
    const [user, setUser] = useState({ id: users[users.length - 1].id + 1, name: "", phone: "" });

    useEffect(() => {
        if (editingUser) {
            setUser(editingUser);
        }
    }, [editingUser])

    const handleSubmit = (event) => {
        event.preventDefault();
        if (user.name != "" && user.phone != "") {
            if (editingUser) {
                editUser(user);
            } else {
                addUser(user)
            }
            setUser({ id: null, name: "", phone: "" })
        } else {
            alert("Please provide all fields!")
        }
    }

    const handleCancel = () => {
        setFormVisible(false);
        setUser({ id: null, name: "", phone: "" });
    }

    return (
        <>
            <div className='heading-card'>
                <HiOutlineChevronLeft className="cancel-icon" onClick={handleCancel} />
                <h6 className='component-heading'>{editingUser ? `Update ${user.name}` : "Add New User"}</h6>
            </div>
            <div className="form-container">
                <form className="user-form" onSubmit={handleSubmit}>
                    <div className="custom-input">
                        <IoPersonOutline className="input-icon" />
                        <input
                            value={user.name}
                            onChange={(event) => setUser({ ...user, name: event.target.value })}
                            type="text"
                            placeholder="User Name"
                            className="input-field" />

                    </div>
                    <div className="custom-input" style={{ marginTop: "10px" }}>
                        <FiPhone className="input-icon" />
                        <input
                            value={user.phone}
                            onChange={(event) => setUser({ ...user, phone: event.target.value })}
                            type="text" placeholder="Phone Number" className="input-field" />
                    </div>
                </form>
            </div>
            {editUser && <button type="submit" className="discard-btn" onClick={() => { setUser({ ...user, name: "", phone: "" }) }}>Discard changes</button>}
            <button type="submit" className="add-user-btn user-form-button" style={{ position: "absolute", top: "630px", right: "189px" }} onClick={handleSubmit}>{editingUser ? 'Update' : 'Submit'}</button>
        </>
    )
}

export default UserForm