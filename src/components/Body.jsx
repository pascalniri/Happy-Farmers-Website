import React from 'react'
import { Link } from 'react-router-dom'


const Body = () => {
  return (
    <>
    <div className="container">
      <div className='body-contents'>
        <div>
            <h2>Welcome to</h2><br></br>
            <h1>HAPPY FARMERS</h1>
        </div>
        <Link to={`${'/shop'}`}><button>Shop Now</button></Link>
      </div>
      </div> 
    </>
  )
}

export default Body