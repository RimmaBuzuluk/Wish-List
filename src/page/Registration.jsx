
import { Link } from 'react-router-dom';
import '../App.css';
// import MainPage from './MainPage';
import { useState } from 'react';

function Registration() {

    const[email, setEmail]=useState('')
    const[password, setPassword]=useState('')
    const[emailDirty, setEmailDirty]=useState(false)
    const[passwordDirty, setPasswordDirty]=useState(false)
    const[emailError,setEmailError]=useState("cann`t be empty")
    const[passwordError,setPasswordError]=useState("cann`t be empty")


    const blurHandler=(e=>{
        switch (e.target.name){
            case "email": setEmailDirty(true)
            break
            case "password":setPasswordDirty(true)
            break
        }
    })
    

  return (
    <div className="reg">
        <h1 className='mainText'>Wish List</h1>
        <h3 className='registrationText'> registration</h3>
        <div className='regBigBlock'>
            <div className='inputReg'>
            
                <div >
                    <p className='regText'>Create user email</p>
                    {(emailDirty && emailError) && <div style={{color:'red'}}>{emailError}</div>}
                    <input onBlur={e=>blurHandler(e)} name="email" type='text' className='regUser'/>
                </div>
                
                <div className='regTextInput'>
                    <p className='regText'>Create your password</p>
                    {(passwordDirty && passwordError) && <div style={{color:'red'}}>{passwordError}</div>}
                    <input onBlur={e=>blurHandler(e)} name="password"  className='regUser'/>
                </div>
            </div>
            <p className='ifYouHaveAccount'>Do you already have an account?<Link to="/logInto">Log in</Link></p>
            <button className='ButtCreateAcc'>Create</button>
        </div>
    </div>
  );
}

export default Registration;