import { observer } from 'mobx-react';
import '../App.css';
import ButBackTextWish from '../component/ButBacktTextWish';
import PersonStore from '../store/PersonStore';
import UserStore from '../store/UserStore';
import { Link } from 'react-router-dom';

const UserItem = observer(({person}) =>{

  const isCurrentUser=person.id===UserStore.currentUser.id

  return (
    <div className='UserItem'>
      <div className='checkMarkContainer'>
        {isCurrentUser && <div className='checkMark'>*</div>}
      </div>
      <Link to={isCurrentUser ? '/mainPage' : `/userPage/${person.id}`}>

        <div>
          <img src={person.photo}/>
        </div>
      </Link>
      <div className='UserSearchName'>
        {person.name}
      </div>
    </div>
  );
})

export default UserItem;