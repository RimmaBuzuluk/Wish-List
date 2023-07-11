
import { Link } from 'react-router-dom';
import '../App.css';

function Registration() {
  return (
    <div className="reg">
        <h1 className='mainText'>Wish List</h1>
        <div className='regBigBlock'>
            <div className='inputReg'>
                <div >
                    <p className='regText'>Create user name</p>
                    <input className='regUser'/>
                </div>
                <div className='regTextInput'>
                    <p className='regText'>Create your parol</p>
                    <input  className='regUser'/>
                </div>
                <div className='regTextInput'>
                    <p className='regText'>Repeat the password</p>
                    <input  className='regUser'/>
                </div>
            </div>
            <p className='ifYouHaveAccount'>Do you already have an account?<Link to="/logInto">Log in</Link></p>
            <button className='ButtCreateAcc'>Create</button>
        </div>
    </div>
  );
}

export default Registration;