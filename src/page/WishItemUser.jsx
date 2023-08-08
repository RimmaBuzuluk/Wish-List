import { Link } from 'react-router-dom';
import '../App.css';
import { observer } from "mobx-react-lite";

const WishItemUser = observer(({ wishList}) => {



  return (
    <div className='wishItemWrapper'>
      <div className='linkItem'>
        <Link to={`/wishIdUser/${wishList.wishId}`} className='link WishItem' key={wishList.wishId}>
          <div className='ItemName'>{wishList.wishName}</div>
          <div className='ItemPrice'>{wishList.price} грн</div>
        </Link>
      </div>
    </div>
  );
})

export default WishItemUser;