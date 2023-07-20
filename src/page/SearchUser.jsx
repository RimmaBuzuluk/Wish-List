import { useState } from 'react';
import '../App.css';
import ButBackTextWish from '../component/ButBacktTextWish';
import UserList from '../component/UserList';
import PersonStore from '../store/PersonStore';


function SearchUser() {
  
  return (
    <div className='SearchUser'>
        <ButBackTextWish/>
        
          <div className='TextSearchUser'>Search User</div>
          <div className='UserListContainer'>
            <UserList/>
          </div>
        
    </div>
  );
}

export default SearchUser;