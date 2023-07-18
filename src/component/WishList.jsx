import '../App.css';
import { observer } from "mobx-react-lite";
import WishItem from './WishItem';
const WishList=observer(({ user })=> {
    
console.log(user)
  return (
    <div className='WishList'>
        <div className='buttonAndTextList'>
            <h3 className='MyWishText'>My wish list</h3>
            <button className='MyWishButton'>NEW</button>
        </div>
        <div className='ButtonAlfPrice'>
          <button className='buttonAlfavit BFilter'>alfavit</button>
          <button className='buttonPrice BFilter'>price</button>
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