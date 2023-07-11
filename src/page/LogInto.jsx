import { Link } from 'react-router-dom';
import '../App.css';

function LogInto() {
  return (
    <div>
    
    <div className="reg">
      <h1 className='mainText'>Wish List</h1>
      <div className='regBigBlock'>
        <div className='inputReg'>
          <div >
            <p className='regText'>Enter user name</p>
            <input className='regUser'/>
          </div>
          <div className='regTextInput'>
            <p className='regText'>Enter your parol</p>
            <input  className='regUser'/>
          </div>
        </div>
          <p className='ifYouHaveAccount'>Don`t you have an account?<Link to="/">to register</Link></p>
          <button className='ButtCreateAcc'>Log Into</button>
        </div>
      </div>
    </div>
  );
}

export default LogInto;