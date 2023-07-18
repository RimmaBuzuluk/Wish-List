import '../App.css';
import { observer } from "mobx-react-lite";


const WishItem=observer(({wishList})=> {
    

  return (
    <div className='WishItem'>
        <div className='ItemName'>{wishList.wishName}</div>
        <div className='ItemPrice'>{wishList.price} грн</div>
    </div>
  );
})

export default WishItem;