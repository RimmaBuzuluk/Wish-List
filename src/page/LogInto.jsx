import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

import PersonStore from '../store/PersonStore';
import React, { useState } from 'react';

function LogInto() {
  const [userName, setUserName]=useState(' ')

  

  const navigate=useNavigate();
  
  const HandleChange = (e) => {
    const inputValue = e.target.value;
    setUserName(inputValue);
  
    e.preventDefault();
    console.log("userName=", inputValue);
  
    const user = PersonStore.people.find((person) => person.email === inputValue);
  
    if (user) {
      console.log("we have this user");
    } else {
      console.log("we don't have this user");
    }
  };
  

 
  return (
    <div>
    
    <div className="reg">
      <h1 className='mainText'>Wish List</h1>
      <div className='regBigBlock'>
        {/* <form onSubmit={handleSubmit}> */}
          <div className='inputReg'>
            <div >
              <p className='regText'>Enter user name</p>
              <input className='regUser' value={userName} onChange={HandleChange}/>
            </div>
            <div className='regTextInput'>
              <p className='regText'>Enter your parol</p>
              <input  className='regUser'/>
            </div>
          </div >
          
            <p className='ifYouHaveAccount'>Don`t you have an account?<Link to="/">to register</Link></p>
            <button className='ButtCreateAcc' type='submit'><Link>Log Into</Link></button>
        {/* </form> */}
        </div>
      </div>
    </div>
  );
}

export default LogInto;