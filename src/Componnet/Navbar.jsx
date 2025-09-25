import React from "react";

const Navbar = () => {
  return (
    <div className=" shadow ">
      <div className="md:flex justify-between w-[1200px] mx-auto">
        <div className="  items-center bg-[#FFFFFF]">
          <h1 className=" font-bold text-2xl text-[#130B2D] ">
            CS- Ticket System
          </h1>
        </div>
        <div className=" md:flex items-center ">
          <div>
            <a className=" mr-4 " href="">
              Home
            </a>
            <a className=" mr-4 " href="">
              FAQ
            </a>
            <a className=" mr-4 " href="">
              Changelog
            </a>
            <a className=" mr-4 " href="">
              Blog
            </a>
            <a className=" mr-4 " href="">
              Download
            </a>
            <a className=" mr-4 " href="">
              Contact
            </a>
          </div>
          <button className=" mr-4 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] w-[145px] h-[43px] rounded-2xl text-[#FFFFFF] ">
            + New Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
