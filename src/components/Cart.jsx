import React, { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";

const Cart = ({ cart, removeFromCart }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  const calculateTotalAmount = () => {
    return Object.values(cart).reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    // Handle checkout logic here
    alert(`Name: ${name}, Contact: ${contact}, Total Amount: Rwf ${calculateTotalAmount()}`);
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="font-outfit mb-[100px] mt-10 p-4 rounded flex flex-col justify-center items-center">
        <h2 className="font-poppins font-semibold mb-4 text-[30px]">Your cart</h2>
        {Object.keys(cart).length === 0 ? (
          <div className="flex flex-col justify-center items-center">
            <p className="font-poppins">Nothing in the cart!</p>
            <div className="gradient-border-button mt-[30px]">
              <Link to='/shop' className="btn-content text-[12px]">Shop now</Link>
            </div>
          </div>
        ) : (
          <>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid lg:grid-cols-4 gap-[20px]">
              {Object.values(cart).map((item) => (
                <div key={item.id}>
                  <div className="flex flex-col rounded w-[100%] bg-[#d9d9d9] font-poppins mb-4">
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
                      <p className="font-poppins mt-4 font-semibold">Rwf {item.price}</p>
                      <p>Quantity: {item.quantity}</p>
                      <div className="gradient-border-button w-full">
                        <button
                          className="text-white bg-green-500 px-[10px] py-[10px] w-full rounded-[50px] mt-[20px] hover:bg-transparent hover:border hover:border-green-500 hover:text-green-500"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 rounded bg-white shadow-md w-full max-w-md text-center">
              <h3 className="font-poppins font-semibold text-[20px]">Total Amount</h3>
              <p className="font-poppins text-[18px]">Rwf {calculateTotalAmount()}</p>
              <button
                className="mt-4 bg-green-500 hover:bg-transparent text-white hover:text-green-500 py-2 px-[30px] rounded-[50px] hover:border hover:border-green-500 focus:outline-none focus:shadow-outline"
                onClick={() => setIsModalOpen(true)}
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Checkout"
        className="flex justify-center items-center h-screen"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Checkout</h2>
          <form onSubmit={handleCheckout}>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Contact</label>
              <input
                type="text"
                required
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <p className="text-gray-700 font-medium">Total Amount: Rwf {calculateTotalAmount()}</p>
            </div>
            <div className="flex items-center font-outfit w-[400px] justify-between">
              <button
                type="submit"
                className="bg-green-500 hover:bg-transparent text-white hover:text-green-500 py-2 px-[30px] rounded-[50px] hover:border hover:border-green-500 focus:outline-none focus:shadow-outline"
              >
                Confirm
              </button>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="bg-red-500 hover:bg-transparent text-white hover:text-red-500 py-2 px-[30px] rounded-[50px] hover:border hover:border-red-500 focus:outline-none focus:shadow-outline"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Cart;
