import React from 'react';

const Profile = ({ users, something}) => {

    // console.log(this.props);

    // const { users } = props; Props can be destructured in the component declaration

    const userList = users.map(user => {
        return (
            <div className="profile" key={user.id}> 
                <h2>Name: { user.name }</h2>
                <h2>Age: { user.age }</h2>
            </div>
        )
    })

    return (
        <div className="userList">
            { userList }
        </div>
    )
}

export default Profile;