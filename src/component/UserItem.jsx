import { observer } from 'mobx-react';
import '../App.css';
import ButBackTextWish from '../component/ButBacktTextWish';
import PersonStore from '../store/PersonStore';

const UserItem = observer(({person}) =>{
  return (
    <div className='UserItem'>
        <div>
            <img src={person.photo}/>
        </div>
        <div className='UserSerchName'>
            {person.name}
        </div>
    </div>
  );
})

export default UserItem;