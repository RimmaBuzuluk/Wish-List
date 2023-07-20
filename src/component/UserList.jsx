import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import "../App.css";
import UserItem from "./UserItem";
import PersonStore from "../store/PersonStore";
import SearchUser from "../page/SearchUser";

const UserList = observer(() => {

  const [searchUser, setSearchUser]=useState("")
  const people=PersonStore.people
 

  const handleSearch=(e)=>{
    setSearchUser(e.target.value)
  }

  const filteredData=people.filter((people)=>
  people.name.toLowerCase().includes(searchUser.toLowerCase()))
    
  return (
    <div className="UserList">
      <div className="SearchContainer">
        <input className='SearchInput' type='text'
          value={searchUser} 
          placeholder='Enter the username you are looking for' 
          onChange={handleSearch}
          />
        </div>
        <div className="UserItemList">
          {filteredData.map((person)=>(
                <UserItem key={person.id} person={person}/>
            ))}
        </div>
    </div>
  );
});

export default UserList