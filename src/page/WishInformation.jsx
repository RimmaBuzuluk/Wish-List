import { useLocation, useParams } from 'react-router-dom';
import '../App.css';
import { observer } from "mobx-react-lite";
import PersonStore from '../store/PersonStore';
import UserStore from '../store/UserStore';

const WishInformation = observer(() => {
  const { wishId } = useParams();

  // console.log(wishId)

  const user = UserStore.currentUser;

  if (!user) {
    return <div>Користувача не знайдено.</div>;
  }

  if (!wishId) {
    return <div>Недійсний ідентифікатор бажання.</div>;
  }

  const wish = user.wishList.find((wish) => wish.wishId === parseInt(wishId));

  console.log(wish)

  if (!wish) {
    return <div>Бажання не знайдено.</div>;
  }

  return (
    <div className='NewWishList'>
    {wish.wishName}
    {wish.price}
    </div>
  );
});

export default WishInformation;
