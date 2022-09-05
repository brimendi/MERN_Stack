import React from 'react'

const Display = (props) => {
    return (
    <div>
        <h1>Your Form Data</h1>
        <p>First Name: {props.firstname}</p>
        <p>Last Name: {props.lastname}</p>
        <p>Email Address: {props.emailaddress}</p>
        <p>Password: {props.password}</p>
        <p>Confirm Password: {props.confirmpassword}</p>
    </div>
    )
}

export default Display;