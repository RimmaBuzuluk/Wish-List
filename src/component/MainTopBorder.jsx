import { Link } from 'react-router-dom';
import '../App.css';
import Cookies from 'js-cookie';
import UserStore from '../store/UserStore';

function MainTopBorder() {
  const handleLogout = () => {
    Cookies.remove('loggedInUser');
    UserStore.setCurrentUser(null);
  };

  return (
    <div>
      {/* Використовуємо посилання <Link> і передаємо йому шлях */}
      <Link to="/logInto">
        <button
          className='button'
          style={{ color: 'black', border: 'none', float: 'right', margin: '0px 0px 300px 0px' }}
          onClick={handleLogout}
        >
          EXIT
        </button>
      </Link>
    </div>
  );
}

export default MainTopBorder;
