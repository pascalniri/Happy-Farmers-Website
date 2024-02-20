import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SubTotal from './SubTotal';
import { removefromcart } from '../redux/cartAction';

const Checkout = () => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
  return (
    <div className='checkout'>
         <div className='checkout_item'>
           {cart.cart.map(item =>{
            return(
                <div className='checkout_product'>
                  
                  
                    <img src={item.image} alt="" />
                    <h4>{item.name}</h4>
                    <p>{item.price}</p>
                    <button onClick={(item) => dispatch(removefromcart(item.id))}>Remove From Cart</button>
   
                </div>
            )
           })}
         </div>
         <div className='subtotal'>
            <SubTotal />
         </div>
    </div>
  )
}

export default Checkout