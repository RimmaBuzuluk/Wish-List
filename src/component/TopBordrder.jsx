import { Link } from 'react-router-dom';
import '../App.css';
import React from 'react';

function TopBorder() {
  return (
    <div className='topBorder'>
      <p className='WishListMain'>Wish List</p>
      <Link to='/serchPage' className='buttSerch'>Search</Link>
    </div>
  );
}

export default TopBorder;