import '../App.css';
import TopBorder from './TopBord';

function UserInf() {
  return (
    <div className='userInfo'>
      <div className='fotoBlok'>
        <img className='mainPhotoUser' src="https://www.svgrepo.com/show/382095/female-avatar-girl-face-woman-user-4.svg" alt="Description of the image" />
      </div>
      <div className='inputDescription'>
        <div className='nameUserDesc'>user name</div>
        {/* <input/> */}
      </div>
    </div>
  );
}

export default UserInf;