import { Link } from 'react-router-dom';
import '../App.css';

import { observer } from "mobx-react-lite";
import UserStore from '../store/UserStore';
import UserMainInformation from '../component/UserMainInformation';
import WishList from '../component/WishList';
import TopBorder from '../component/TopBordrder';

const MainPage=observer(()=> {
const currentUser=UserStore.currentUser


if (!currentUser) {
  return <div>Loading...</div>; // или другая заглушка в случае отсутствия текущего пользователя
}

  return (
    <div className='mainPlace'>
      <TopBorder/>
      <div className='mainContent'>
        <UserMainInformation user={currentUser} />
        <div className='spacer' />
        <WishList user={currentUser} />
      </div>
    </div>
  );
})

export default MainPage;