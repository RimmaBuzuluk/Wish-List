import { observer } from 'mobx-react';
import '../App.css';
import ButBackTextWish from '../component/ButBacktTextWish';
import PersonStore from '../store/PersonStore';
import UserStore from '../store/UserStore';

const UserItem = observer(({person}) =>{

  const isCurrentUser=person.id===UserStore.currentUser.id

  // console.log(UserStore.currentUser)
  return (
    <div className='UserItem'>
      <div className='checkMarkContainer'>
          {isCurrentUser && <div className='checkMark'>*</div>}
       </div>
        <div>
            <img src={person.photo}/>
        </div>
        <div className='UserSearchName'>
            {person.name}
        </div>
    </div>
  );
})

export default UserItem;