import { Link, useLocation, useParams } from 'react-router-dom';
import '../App.css';
import { observer } from "mobx-react-lite";
import PersonStore from '../store/PersonStore';
import UserStore from '../store/UserStore';
import ButBackTextWish from '../component/ButBacktTextWish';

const WishInformation = observer(() => {
  const { wishId } = useParams();


  const user = UserStore.currentUser;

  if (!user) {
    return <div>Користувача не знайдено.</div>;
  }

  if (!wishId) {
    return <div>Недійсний ідентифікатор бажання.</div>;
  }

  const wish = user.wishList.find((wish) => wish.wishId === parseInt(wishId));

  if (!wish) {
    return <div>Бажання не знайдено.</div>;
  }

  return (
    <div className='NewWishList'>
      <ButBackTextWish/>
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

export default WishInformation;