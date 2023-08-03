import { Link } from 'react-router-dom';
import '../App.css';
import { observer } from "mobx-react-lite";

const WishItem = observer(({ wishList,onDelete }) => {

  const handleDel=()=>{
    onDelete(wishList.wishId)
  }
  
  return (
    <div className='wishItemWrapper'>
      <div className='linkItem'>
        <Link to={`/wishId/${wishList.wishId}`} className='link WishItem' key={wishList.wishId}>
          <div className='ItemName'>{wishList.wishName}</div>
          <div className='ItemPrice'>{wishList.price} грн</div>
        </Link>
      </div>
        <button onClick={handleDel} className='buttonItem'>Delete</button>
    </div>
  );
})

export default WishItem;