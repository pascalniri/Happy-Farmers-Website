import React from "react";

const Body = () => {
  const bg = {
    backgroundImage: "url('/bg.jpg')",
    height: "100vh", // Use 100vh to make the div fill the viewport height
    width: "100%",
    backgroundSize: "cover", // This will ensure the image covers the whole div
    backgroundPosition: "center" // This will center the image in the div
  };

  return (
    <div style={bg} className="w-full h-full flex flex-col text-center justify-center items-center">
      <div className="font-outfit">
        <h2 className="text-white text-[50px]">Welcome to</h2>
        <h1 className="text-white text-[50px] font-bold">
          HAPPY <span className="text-green-500">FARMERS</span>
        </h1>
      </div>
      <button className="mt-[40px] bg-green-500 px-[50px] py-[10px] rounded-[50px] text-[white] hover:bg-white hover:text-green-500">SHOP NOW</button>
    </div>
  );
};

export default Body;
