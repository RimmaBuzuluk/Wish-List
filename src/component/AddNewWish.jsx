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
        <h3 className='AddNewWishH3'>Add new wish</h3>
        <div>
            <div className='InpTextNewWish'>
                <div className='textNewWish'>add wish name</div>
                <input className="inputNewWish" value={newName} onChange={(e)=>setNewName(e.target.value)}/>
            </div>
            <div className='InpTextNewWish'>
                <div className='textNewWish'>add wish price </div>
                <input className="inputNewWish" value={newPrice} onChange={(e)=>setNewPrice(e.target.value)}/>
            </div>
            <div className='InpTextNewWish'>
                <div className='textNewWish'>add wish description</div>
                <input className="inputNewWish" value={newDescription} onChange={(e)=>setNewDescription(e.target.value)}/>
            </div>
            <div className='InpTextNewWish'>
                <div className='textNewWish'>add wish link</div>
                <input className="inputNewWish" value={newLink} onChange={(e)=>setNewLink(e.target.value)} />
            </div>
            
        </div>
        <button className='ButtonNewWish' onClick={handleAdd}>Add</button>
    </div>
  );
})

export default AddNewWish;
