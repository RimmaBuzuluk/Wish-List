import '../App.css';
import { observer } from "mobx-react-lite";
import WishItem from './WishItem';
import { useState } from 'react';
import PersonStore from '../store/PersonStore';

const WishList = observer(({ user }) => {
  const [sortedWishList, setSortedWishList] = useState([...user.wishList]);
  const [addWish,setAddWish]=useState(false)

  const sortByAlphabet = () => {
    const sortedList = [...user.wishList].sort((a, b) => a.wishName.localeCompare(b.wishName));
    PersonStore.sortWishlistAlphabetically(user.id);
    setSortedWishList(sortedList);
  };

  const sortByPrice = () => {
    const sortedList = [...user.wishList].sort((a, b) => a.price - b.price)
    PersonStore.sortWishlistPrice(user.id)
    setSortedWishList(sortedList)
  }

  const handleAdd=()=>{
    setAddWish((preveState)=> !preveState)
    
  }
  

  return (
    <div className='WishList'>
      <div className='buttonAndTextList'>
        <h3 className='MyWishText'>My wish list</h3>
        <button className='MyWishButton' onClick={handleAdd}>NEW</button>
      </div>
      {(addWish) && <div style={{color:'red'}}>hello</div>}
      <div className='ButtonAlfPrice'>
        <button className='buttonAlfavit BFilter' onClick={sortByAlphabet}>alphabet</button>
        <button className='buttonPrice BFilter' onClick={sortByPrice}>price</button>
      </div>
      <div className='wishItemContainer'>
        {sortedWishList.map((wishList) => (
          <WishItem key={wishList.wishId} wishList={wishList} /> // Кожен елемент списку має унікальний ключ
        ))}
      </div>
    </div>
  );
})

export default WishList;
