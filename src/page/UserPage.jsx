import '../App.css';
import { observer } from "mobx-react-lite";
import PersonStore from '../store/PersonStore';
import { useParams } from 'react-router-dom';
import TopBorder from '../component/TopBordrder';
import WishItem from '../component/WishItem';
import WishItemUser from './WishItemUser';
import UserStore from '../store/UserStore';



const UserPage=observer(()=> {
    const { userId } = useParams();

    const user = PersonStore.people.find((people) => people.id === parseInt(userId))

    UserStore.setCurrentUserGuest(user);

    


  
  return (
    <div className='mainPlace'>
      <TopBorder/>
      <div className='userInfo'>
      <div className='fotoBlok'>
        <img className='mainPhotoUser' src={user.photo} alt="Description of the image" />
      </div>
      <div className='inputDescription'>
        <div className='nameUserDesc'>{user.name}</div>
        <input className='InputDescription'/>
      </div>
    </div>
    {/* ////////////////////// */}
    <div className='WishList'>
      <div className='buttonAndTextList'>
        <h3 className='MyWishText'>{user.name}'s wish list</h3>
      </div>
      <div className='wishItemContainer'>
      {user.wishList.map((wishList) => (
          <WishItemUser key={wishList.wishId} wishList={wishList}/>
        ))}
      </div>
    </div>

    </div>
  );
})

export default UserPage;