import '../App.css';
import ButBackTextWish from '../component/ButBacktTextWish';
import UserList from '../component/UserList';


function SerchUser() {
  return (
    <div className='SerchUser'>
        <ButBackTextWish/>
        <div className='TextSerchUser'>Serch User</div>
        <input className='SerchInput' type='text'/>
        <UserList/>
    </div>
  );
}

export default SerchUser;