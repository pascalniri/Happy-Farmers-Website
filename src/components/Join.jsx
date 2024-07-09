import React from "react";
import { useState } from "react";
import axiosClient from "./GlobalApi";
import { Link } from "react-router-dom";

const Join = () => {

  const vendor = {
    backgroundImage: "url('/vendor.jpg')",
    height: "100vh", // Use 100vh to make the div fill the viewport height
    width: "100%",
    backgroundSize: "cover", // This will ensure the image covers the whole div
    backgroundPosition: "center" // This will center the image in the div
  };


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [deliver, setDeliver] = useState("");
  const [role, setRole] = useState("");

  const SIGN_UP_URL = "/vendors";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmail("");
    setName("");
    setPhone("");
    setRole("");
    setDeliver("");

    try {
      const response = await axiosClient.post(SIGN_UP_URL, {
        name,
        email,
        phone,
        deliver,
        role,
      });
      console.log(response);
    } catch (err) {
      if (!err?.response) {
        alert("No server response");
      } else if (err.response.status === 409) {
        alert("Your order was received successfully");
      } else if (err.response.status === 400) {
        alert("Email already exist!, try another");
      } else if (err.response.status === "failed") {
        alert(err.response.message);
      }
    }
  };

  return (
    <section style={vendor} className="font-outfit">
      <div className="px-4 sm:px-[50px] lg:px-[100px] flex flex-row justify-between items-center min-h-full">
        <div className="text-white w-full">
        <h2 className="text-[30px] font-bold mb-[30px]">Are You a Hotel, Motel or a Restourant.</h2>
        <p>
          We`d love to share more about our business model, traction and
          sustainable growth.
          Once we`ve confirmed your subscription, you'll gain access to
          exclusive materials, news and updates.
        </p>
        <Link to="/vendors" >
          <button className="bg-green-500 px-[30px] py-[10px] rounded-[50px] mt-[40px] text-white hover:bg-transparent hover:border hover:border-green-500 hover:text-green-500">Go back</button>
        </Link>
        </div>
        <form className="flex flex-col w-full px-[30px] py-[50px] bg-gray-500 rounded-[20px] bg-opacity-30 backdrop-blur-md" onSubmit={handleSubmit}>
          <label className="mt-[20px]">Vendor`s Name</label>
          <input
            type="text"
            value={name}
            required
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
            className="px-[10px] py-[10px] rounded"
          />
          <label className="mt-[20px]">Email</label>
          <input
            type="email"
            required
            value={email}
            placeholder="Enter your email address"
            onChange={(e) => setEmail(e.target.value)}
            className="px-[10px] py-[10px] rounded"
          />
          <label className="mt-[20px]">Phone Number</label>
          <input
            type="text"
            placeholder="+2507..."
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="px-[10px] py-[10px] rounded"
          />
          <div className="mt-[20px]">
            <label className="mt-[20px]">You Want Them</label> <br />
            <select
              name=""
              id="option"
              required
              value={deliver}
              onChange={(e) => setDeliver(e.target.value)}
              className="px-[10px] py-[10px] rounded"
            >
              <option>Choose</option>
              <option>Daily</option>
              <option>Weekly</option>
              <option>Monthly</option>
            </select>
            <select
              name=""
              id="option"
              required
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="px-[10px] py-[10px] ml-[20px] rounded "
            >
              <option>Select a role</option>
              <option>Supplier</option>
              <option>Buyer</option>
            </select>
          </div>
          <button className="bg-green-500 px-[10px] py-[10px] rounded-[50px] mt-[40px] text-white hover:bg-transparent hover:border hover:border-green-500 hover:text-green-500">SUBMIT</button>
        </form>
      </div>
    </section>
  );
};

export default Join;
