import React from 'react'

function Profile (props) {
    return (
        <div>
            <h2>Contact Details</h2>
            <p>Name: <b>{props.userName}</b></p>
            <p>Email: <b>{props.email}</b></p>
            <p>Phone: <b>{props.phone}</b></p>
        </div>
    )
}

export default Profile;
