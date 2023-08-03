import { Link } from 'react-router-dom';
import '../App.css';
import { observer } from "mobx-react-lite";

const WishItem = observer(({ wishList,onDelete }) => {

  const handleDel=()=>{
    onDelete(wishList.wishId)
  }
  
  return (
    <div className='wishItemContainer'>
      <Link to={`/wishId/${wishList.wishId}`} className='link WishItem' key={wishList.wishId}>
        <div className='ItemName'>{wishList.wishName}</div>
        <div className='ItemPrice'>{wishList.price} грн</div>
      </Link>
      <button onClick={handleDel}>Delete</button>
    </div>
  );
})

export default WishItem;