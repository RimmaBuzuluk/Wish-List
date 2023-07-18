import '../App.css';
import { observer } from "mobx-react-lite";
import WishItem from './WishItem';
import { useState } from 'react';
import PersonStore from '../store/PersonStore';



const WishList=observer(({ user })=> {
  // const user=PersonStore.selectedPerson;

  // const [sortBy, setSortBy]=useState(null)

  const sortByAlphabet=()=>{

    // const [sortBy, setSortBy] = useState(null);

    const sortedList=[...user.wishList].sort((a,b)=>a.wishName.localeCompare(b.wishName))
    // .sort((a,b)=>a.wishName.localeCompare(b.wishName));
    PersonStore.sortWishlistAlphabetically(user.id)
    console.log(sortedList)
  }

  
//  const sortByPrice=()=>{
//     const sortedList=[...user.wishList].sort((a,b)=>a.price-b.price);
//     setSortBy(sortedList)
//   } 
    
  return (
    <div className='WishList'>
        <div className='buttonAndTextList'>
            <h3 className='MyWishText'>My wish list</h3>
            <button className='MyWishButton'>NEW</button>
        </div>
        <div className='ButtonAlfPrice'>
          <button className='buttonAlfavit BFilter' onClick={sortByAlphabet}>alfavit</button>
          {/* <button className='buttonPrice BFilter' onClick={sortByPrice}>price</button> */}
        </div>
        <div className='wishItemContainer'>
        {user.wishList.map((wishList) => (
    
    <WishItem  key={wishList.id} wishList={wishList}/>
))}
        </div>
    </div>
  );
})

export default WishList;