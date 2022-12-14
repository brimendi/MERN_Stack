import React, { useState } from 'react' //importing react and using state <must have>
// rafce 
const Form = () => {
//Set State for info inputs
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [emailaddress, setEmailAddress] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmPassword] = useState("")
//Set state for input errors
    const [firstNameError, setFirstNameError] = useState("")
    const [lastNameError, setLastNameError] = useState("")
    const [emailAddressError, setEmailAddressError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("")

//Error Messages Logic
    const firstNameMessage = (e) => { //must add e to use event
        setFirstName(e.target.value) //setting the input here instead of html form <OnChange>
        if(e.target.value.length < 2){ 
            setFirstNameError("First name must be at least 2 characters")
        }else{
            setFirstNameError("") // if validated 
        }
        if(!e.target.value){ //*** SENSEI BONUS  *** only show validations if typed into 
            setFirstNameError("")
        }
    }

    const lastNameMessage = (e) => {
        setLastName(e.target.value)
        if(e.target.value.length < 2){
            setLastNameError("Last name must be at least 2 characters")
        }else{
            setLastNameError("")
        }
        if(!e.target.value){
            setLastNameError("")
        }
    }

    const emailAddressMessage = (e) => {
        setEmailAddress(e.target.value)
        if(e.target.value.length < 5){
            setEmailAddressError("Email must be at least 5 characters")
        }else{
            setEmailAddressError("")
        }
        if(!e.target.value){
            setEmailAddressError("")
        }
    }

    const passwordMessage=(e)=> {
        setPassword(e.target.value);
        if(e.target.value.length<8){
            setPasswordError("Password must be at least 8 characters")
        }
        else {
            setPasswordError("");
        }
        if(!e.target.value){
            setPasswordError("")
        }    
    }

    const confirmPasswordMessage=(e)=> {
        setConfirmPassword(e.target.value);
        if(e.target.value !== password){
            setConfirmPasswordError("Passwords must match");
        }
        else {
            setConfirmPasswordError("");
        }
        if(!e.target.value){
            setConfirmPasswordError("")
        }
    }
    //Page Content
    return(
        <div>
            {/* Form Start  */}
        <form>
            <div>
                <label>First Name: </label> 
                <input 
                    type="text" 
                    name="firstname" 
                    value={firstname} 
                    onChange={firstNameMessage} //Where the validations are pulled and implemented
                />
                <span 
                    style={{color: "red"}}  //makes validations red
                >
                    {firstNameError}
                </span>
            </div>
            <div>
                <label>Last Name: </label> 
                <input 
                    type="text"
                    name="lastname" 
                    value={lastname} 
                    onChange={ lastNameMessage}
                />
                <span 
                    style={{color: "red"}}
                >
                    {lastNameError}
                </span>
            </div>
            <div>
                <label>Email Address: </label> 
                <input 
                    type="text" 
                    name="emailaddress" 
                    value={emailaddress} 
                    onChange={emailAddressMessage }
                />
                <span 
                    style={{color: "red"}}
                >
                    {emailAddressError}
                </span>
            </div>
            <div>
                <label>Password: </label>
                <input 
                    type="text"
                    name="password" 
                    value={password} 
                    onChange={ passwordMessage } 
                />
                <span 
                    style={{color: "red"}}
                >
                    {passwordError}
                </span>
            </div>
            <div>
                <label>Confirm Password: </label>
                <input 
                    type="text" 
                    name="confirmpassword" 
                    value={confirmpassword} 
                    onChange={ confirmPasswordMessage }
                />
                <span 
                    style={{color: "red"}}
                >
                    {confirmPasswordError}
                </span>
                
            </div>
        </form>
    </div>
);
}


export default Form;//<musthave>
