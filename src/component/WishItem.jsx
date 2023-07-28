import { Link } from 'react-router-dom';
import '../App.css';
import { observer } from "mobx-react-lite";

const WishItem = observer(({ wishList }) => {
  
  return (
    <div className=''>
      <Link to={`/wishId/${wishList.wishId}`} className='link WishItem' key={wishList.wishId}>
        <div className='ItemName'>{wishList.wishName}</div>
        <div className='ItemPrice'>{wishList.price} грн</div>
      </Link>
    </div>
  );
})

export default WishItem;