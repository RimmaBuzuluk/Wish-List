import {Link, useParams } from 'react-router-dom';
import '../App.css';
import { observer } from "mobx-react-lite";
import UserStore from '../store/UserStore';
import ButBackTextWish from '../component/ButBacktTextWish';

const WishInformationUser = observer(() => {
  const { wishIdUser } = useParams();

  const user=UserStore.currentUserGuest
  const wish = user.wishList.find((wish) => wish.wishId === parseInt(wishIdUser));
  

  return (
    <div className='NewWishList'>
      <div className='header'>
      <Link to={`/userPage/${user.id}`}>
          <button className='buttonBack'>Back</button>
        </Link>
        <div className='WishListText'>Wish List</div>
      </div>
      <div className='InfName'>Information about {user.name}`s wish</div>
      <div className='WishInfList'>
        <div className='AllInformWishs'>
          {/* //////////////// */}
          <div className='informNameBlock'>
            <div className='infName'>Wish name</div>
            <div className='InfBlock'>
              <div className='InfB'>{wish.wishName}</div>
              <button className='InfButt'>r</button>
            </div>
          </div>
          {/* ////////////////////// */}
          <div className='informNameBlock'>
            <div className='infName'>Price wish</div>
            <div className='InfBlock'>
              <div className='InfB'>{wish.price}</div>
              <button className='InfButt'>r</button>
            </div>
          </div>
          {/* ////////////////////// */}
          <div className='informNameBlock'>
            <div className='infName'>Description wish</div>
            <div className='InfBlock'>
              <div className='InfB'>{wish.description}</div>
              <button className='InfButt'>r</button>
            </div>
          </div>
          {/* ////////////////////// */}
          <div className='informNameBlock'>
            <div className='infName'>Wish link</div>
            <div className='InfBlock'>
              <div className='InfB'>{wish.link}</div>
              <button className='InfButt'>r</button>
            </div>
          </div>
          {/* ////////////////////// */}
        </div>
      </div> 
    </div>
  );
});

export default WishInformationUser;