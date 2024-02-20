




















import React from 'react'

const Cart = () => {
  return (
    <div>Cart</div>
  )
}

export default Cart













































// import React, { useState, useEffect, useContext }  from 'react'
// import './css-folder/Cart.css';
// import axiosClient from './GlobalApi';
// import { ShopContext } from './context/Shop-context';


// const Cart = () => {
// const {cartItems} = useContext(ShopContext);
//   return (
//      <div className='cartt'>
//         <div>
//             <h1>Your Cart Items</h1>
//         </div>
//         <div className='cartItems'>
//         {response.map((item)=>{
//            const {_id,image,price,name} = item
//            return(
//           <div className='cart-container' key={_id}>
//         <div>
//         <div className='cart-subcontainer'>
//           <Link to={`/op/${_id}`}>
//           <img src={image} /> 
//           <h3>{name}</h3>
//           <h3>{price}</h3>
//           </Link>
//           <button onClick={()=> AddToCart(_id)}>
//               Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
//           </button>

//        </div>
//        </div>
//       </div>
//         )
//       })}
//         </div>
//      </div>
//     );
       
  
  
// }

// export default Cart