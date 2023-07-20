import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import "../App.css";
import UserItem from "./UserItem";
import PersonStore from "../store/PersonStore";

const UserList = observer(() => {
    
  return (
    <div className="UserList">
       {PersonStore.people.map((person)=>(
             <UserItem key={person.id} person={person}/>
        ))}
    </div>
  );
});

export default UserList