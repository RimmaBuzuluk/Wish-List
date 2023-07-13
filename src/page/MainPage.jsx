import { Link } from 'react-router-dom';
import '../App.css';
import TopBorder from '../component/TopBord';
import UserInf from '../component/UserInf';

function MainPage() {
  return (
    <div>
      <TopBorder/>
      <UserInf />
    </div>
  );
}

export default MainPage;