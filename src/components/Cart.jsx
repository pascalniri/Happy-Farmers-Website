import React from "react";

import { Link } from "react-router-dom";

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div>
  
    <div className=" mb-[100px] mt-10  p-4 rounded flex flex-col justify-center items-center">
      
      <h2 className="font-poppins font-semibold mb-4 text-[30px]">Your cart</h2>
      {Object.keys(cart).length === 0 ? (
        <div className="flex flex-col justify-center items-center">
          <p className="font-poppins">Nothing in the cart!</p>
          <div className="gradient-border-button  mt-[30px]">
          <Link to='/' className="btn-content text-[12px] ">Shop now</Link>

          </div>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid lg:grid-cols-4 gap-[20px]">
          {Object.values(cart).map((item) => (
            <div className="">
              <div
                key={item.id}
                className="flex flex-col rounded w-[100%] bg-[#d9d9d9] font-poppins mb-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[100%] h-[150px] rounded-t"
                />
                <div className="px-2 mt-3">
                  <div className="flex justify-between">
                  <h3 className="font-poppins font-semibold">{item.name}</h3>
                  <p className="font-poppins text-[10px]">{item.place}</p>
                  </div>
                  <p className="text-[12px] mt-2">{item.description}</p>
                  <p className="font-poppins mt-4 font-semibold">$ {item.price}</p>
                  {/* <p>Quantity: {item.quantity}</p> */}
                  

                  <div className="flex gap-5">
                  <div className="gradient-border-button w-full">
                  <button
                    className="bg-[#d9d9d9] text-black btn-content w-full text-[10px] "
                  
                  >
                    Owner details
                  </button>
                  </div>
                  <div className="gradient-border-button w-full">
                  <button
                    className="bg-[#d9d9d9] text-black btn-content w-full text-[10px] "
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default Cart;
