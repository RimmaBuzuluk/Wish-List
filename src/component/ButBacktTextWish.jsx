import { Link } from 'react-router-dom';
import '../App.css';
import React from 'react';

function ButBackTextWish() {
  return (
    <div className='header'>
        <Link to={"/mainPage"}>
          <button className='buttonBack'>Back</button>
        </Link>
        <div className='WishListText'>Wish List</div>
      </div>
  );
}

export default  ButBackTextWish;