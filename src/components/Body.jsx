import React from 'react';
import './css-folder/Body.css';
import { Link } from 'react-router-dom';
const Body = () => {
  return (
    <>
    <div className="container">
      <div className='body-contents'>
        <div>
            <h2>Welcome to</h2><br></br>
            <h1>HAPPY <span>FARMERS</span></h1>
        </div>
        <Link to="/shop"><button>SHOP NOW</button></Link>
      </div>
      </div> 
    </>
  )
}

export default Body