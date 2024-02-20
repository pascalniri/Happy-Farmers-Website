import React from 'react'
import { useSelector } from 'react-redux';
import { getTotal } from '../redux/cartReducer';

const SubTotal = () => {
    const cart = useSelector(state => state.cart)

  return (
    <div className='subtotal'>
        <div className='subtotal_area'>
            <p>Subtotal ({cart.cart.length} item(s)) : {getTotal(cart.cart)}</p>
            <button>Proceed To Checkout</button>
        </div>

    </div>
  )
}

export default SubTotal