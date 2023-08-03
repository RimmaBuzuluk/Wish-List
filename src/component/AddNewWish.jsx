import '../App.css';
import { observer } from "mobx-react-lite";
import PersonStore from '../store/PersonStore';
import UserStore from '../store/UserStore';
import { useState } from 'react';

const AddNewWish = observer(({onUpdateWishList, wishIdCounter, setWishIdCounter}) => {

    const user=UserStore.currentUser
    // console.log(user)
    const [newName, setNewName]=useState("")
    const [newPrice, setNewPrice]=useState("")
    const [newDescription, setNewDescription]=useState("")
    const [newLink, setNewLink]=useState("")



    const handleAdd = () => {
        if (newName.trim() !== "" && newPrice.trim() !==""  && newDescription.trim()!=="" && newLink.trim() !=="") {
          const newWish = {
            wishId: wishIdCounter,
            wishName: newName,
            price: newPrice,
            description: newDescription,
            link: newLink
          };

          PersonStore.addWish(user.id, newWish)
          setWishIdCounter((prevCounter)=>prevCounter+1)
        
          setNewName("");
          setNewPrice("");
          setNewDescription("");
          setNewLink("");

          onUpdateWishList();
        }
      };


  return (
    <div className='AddNewWish'>
        <h3>Add new wish</h3>
        <div>
            <div>
                <div>add wish name</div>
                <input value={newName} onChange={(e)=>setNewName(e.target.value)}/>
            </div>
            <div>
                <div>add wish price </div>
                <input value={newPrice} onChange={(e)=>setNewPrice(e.target.value)}/>
            </div>
            <div>
                <div>add wish description</div>
                <input value={newDescription} onChange={(e)=>setNewDescription(e.target.value)}/>
            </div>
            <div>
                <div>add wish link</div>
                <input value={newLink} onChange={(e)=>setNewLink(e.target.value)} />
            </div>
            
        </div>
        <button onClick={handleAdd}>add</button>
    </div>
  );
})

export default AddNewWish;
