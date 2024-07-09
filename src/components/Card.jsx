import React from 'react';
import list from '../Data';
import { Link } from 'react-router-dom';


const Card = ({ addToCart }) => {
  return (
    <div className='mb-[100px]'>
      <Link to="/cart">
      <button className="mx-4 lg:mx-[100px] flex justify-center items-center text-white bg-green-500 px-[40px] py-[10px] rounded-[50px] mt-[20px] hover:bg-transparent hover:border hover:border-green-500 hover:text-green-500">View your cart</button>
      </Link>
      <div className="mx-auto px-4 gap-x-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid lg:grid-cols-3 lg:px-[100px] xl:grid-cols-4 ">
        {list.map((item) => (
          <div key={item.id} className="mt-10 bg-[#d9d9d9] rounded">
            <img src={item.image} alt="" className="rounded-t w-full h-[150px]" />
            <div className="px-1 mt-3">
              <div className="flex justify-between">
                <h1 className="font-poppins font-semibold">{item.name}</h1>
                <p className="font-poppins text-[10px]">{item.place}</p>
              </div>
              <p className="font-poppins text-[12px] mt-2">{item.description}</p>
              <p className="font-poppins mt-4 font-semibold">{item.price} Rwf</p>
            </div>
            <div className="px-1 mt-4 w-full">
              <div className="gradient-border-button w-full">
                <button
                  className="text-white bg-green-500 px-[10px] py-[10px] w-full rounded-[50px] mt-[20px] hover:bg-transparent hover:border hover:border-green-500 hover:text-green-500"
                  onClick={() => addToCart(item)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
