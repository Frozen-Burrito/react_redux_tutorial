import React from 'react';

import './usersList.css';

const Profile = ({ users, deleteUser}) => {

    // console.log(this.props);

    // const { users } = props; Props can be destructured in the component declaration

    // const userList = users.map(user => {
    //     if (user.age > 18) {
    //         return (
    //             <div className="profile" key={user.id}> 
    //                 <h2>Name: { user.name }</h2>
    //                 <h2>Age: { user.age }</h2>
    //             </div>
    //         )
            
    //     } else return null;
    // })

    const userList = users.map(user => {
        return user.age > 18 ? (
            <div className="profile" key={user.id}> 
                <h3>Name: { user.name }</h3>
                <h3>Age: { user.age }</h3>
                <button onClick={() => {deleteUser(user.id)}}>Delete</button>
            </div>
        ) : null;
    })

    return (
        <div className="userList">
            { userList }
        </div>
    )
}

export default Profile;