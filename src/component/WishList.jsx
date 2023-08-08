import '../App.css';
import { observer } from "mobx-react-lite";
import WishItem from './WishItem';
import { useState } from 'react';
import PersonStore from '../store/PersonStore';
import AddNewWish from './AddNewWish';
import UserStore from '../store/UserStore';

const WishList = observer(({ user }) => {
  const [sortedWishList, setSortedWishList] = useState([...user.wishList]);
  const [addWish,setAddWish]=useState(false)
  const [wishIdCounter, setWishIdCounter]=useState(5)

  const sortByAlphabet = () => {
    const sortedList = sortedWishList.sort((a, b) => a.wishName.localeCompare(b.wishName));
    PersonStore.sortWishlistAlphabetically(user.id);
    setSortedWishList(sortedList);
  };

  const sortByPrice = () => {
    const sortedList = sortedWishList.sort((a, b) => a.price - b.price)
    PersonStore.sortWishlistPrice(user.id)
    setSortedWishList(sortedList)
  }

  const handleAdd=()=>{
    setAddWish((preveState)=> !preveState)
    
  }

  const handleDelete=(wishId)=>{
    PersonStore.removeWishItem(user.id, wishId)
    setSortedWishList(sortedWishList.filter((wish)=>wish.wishId !==wishId))
  }
  
  const updeteWishList=()=>{
    setSortedWishList([...user.wishList])
  }

 
 

  return (
    <div className='WishList'>
      <div className='buttonAndTextList'>
        <h3 className='MyWishText'>My wish list</h3>
        <button className='MyWishButton' onClick={handleAdd}>NEW</button>
      </div>
      {(addWish) && <div><AddNewWish sortedWishList={sortedWishList} onUpdateWishList={updeteWishList} wishIdCounter={wishIdCounter} setWishIdCounter={setWishIdCounter}/></div>}
      <div className='ButtonAlfPrice'>
        <button className='buttonAlfavit BFilter' onClick={sortByAlphabet}>alphabet</button>
        <button className='buttonPrice BFilter' onClick={sortByPrice}>price</button>
      </div>
      <div className='wishItemContainer'>
        {sortedWishList.map((wishList) => (
          <WishItem key={wishList.wishId} wishList={wishList} onDelete={handleDelete}/>
        ))}
      </div>
    </div>
  );
})

export default WishList;