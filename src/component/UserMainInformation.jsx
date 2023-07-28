import '../App.css';

function UserMainInformation({user}) {
    
  return (
    <div className='userInfo'>
      <div className='fotoBlok'>
        <img className='mainPhotoUser' src={user.photo} alt="Description of the image" />
      </div>
      <div className='inputDescription'>
        <div className='nameUserDesc'>{user.name}</div>
        <input className='InputDescription'/>
      </div>
    </div>
  );
}

export default UserMainInformation;