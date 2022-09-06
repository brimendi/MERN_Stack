import React, { useState } from 'react'
import Display from './Display'

const Form = () => {
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [emailaddress, setEmailAddress] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmPassword] = useState("")
    return(
        <div>
    <form>
            <div>
                <label>First Name: </label> 
                <input type="text" name="firstname" value={firstname} onChange={(e)=>setFirstName(e.target.value) } />
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" name="lastname" value={lastname} onChange={ (e) => setLastName(e.target.value) }/>
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" name="emailaddress" value={emailaddress} onChange={ (e) => setEmailAddress(e.target.value) }/>
            </div>
            <div>
                <label>Password: </label>
                <input type="text" name="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" name="confirmpassword" value={confirmpassword} onChange={ (e) => setConfirmPassword(e.target.value) }/>
            </div>
        </form>
        <Display firstname={firstname} lastname={lastname} emailaddress={emailaddress} password={password} confirmpassword={confirmpassword}/>
    </div>
);
}


export default Form;

