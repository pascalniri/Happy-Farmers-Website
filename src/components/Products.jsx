import React from 'react'
import { useDispatch } from 'react-redux';
import { addtocart } from '../redux/cartAction';


const Products = ({id, image, name, price}) => {

    const dispatch = useDispatch();
  return (
    <div>
       <img src={image} alt=""  style={{width:'200px'}}/>
        <h4>{name}</h4>
        <p>{price} Rwf</p>
        <button onClick={() => dispatch(addtocart(id, image, name, price))} >Add To Cart</button>
    </div>
  )
}

export default Products