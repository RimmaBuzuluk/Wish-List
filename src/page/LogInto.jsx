import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import PersonStore from '../store/PersonStore';
import UserStore from "../store/UserStore"
import React, { useState } from 'react';
import { observer } from "mobx-react-lite";


const LogInto= observer(()=> {
  const [userName, setUserName]=useState('')
  const [userPassword, setUserPassword]=useState('')
  const [isLoggedIn, setIsLoggedIn]=useState(false)
  const [error,setError]=useState(' ')

  // console.log(UserStore.setCurrentUser)

  const navigate=useNavigate();
  
  const HandleChange = (e) => {
    const inputValue = e.target.value;
    setUserName(inputValue);
  
    e.preventDefault();
    // console.log("userName=", inputValue);

  };

  const HandleChangePassword = (e) => {
    const inputValue = e.target.value;
    setUserPassword(inputValue);
  }
  

 

  const handleLogin = (e) => {
    e.preventDefault();
    const user = PersonStore.people.find((person) => person.email === userName);
  
    if (user && user.parol === userPassword) {
      // console.log("we have this user");
      setError("")
      UserStore.setCurrentUser(user);
// console.log(UserStore.currentUser);
      navigate('/mainPage')
      
    } else {
      console.log("we don't have this user");
      setError("Invalid login or password")
    }
  };
  return (
    <div>
    
    <div className="reg">
      <h1 className='mainText'>Wish List</h1>
      <div className='regBigBlock'>
          <div className='inputReg'>
            <div >
              <p className='regText'>Enter user name</p>
              <input className='regUser' value={userName} onChange={HandleChange}/>
            </div>
            <div className='regTextInput'>
              <p className='regText'>Enter your parol</p>
              <input  className='regUser' value={userPassword} onChange={HandleChangePassword}/>
            </div>
          </div >

          {error && <div style={{color:'red'}}>{error}</div>}
          
            <p className='ifYouHaveAccount'>Don`t you have an account?<Link to="/">to register</Link></p>
            <button className='ButtCreateAcc' type='submit' onClick={handleLogin}><Link>Log Into</Link></button>
        </div>
      </div>
    </div>
  );
})

export default LogInto;