import React from "react";
import img from "../assets/vector1.png";

const Hirro = ({ inProgress }) => {
  return (
    <div className="w-[1200px] mx-auto md:flex grid gap-6 mt-10">
      <div className=" w-120 md:w-[45%] h-[250px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  items-center text-center flex flex-col justify-center rounded-2xl text-2xl text-white  relative ">
        <img className=" absolute left-0 " src={img} alt="" />
        <img className="absolute  scale-x-[-1] right-0  " src={img} alt="" />

        <h1 className="text-2xl">In-Progress</h1>
        <p className=" text-6xl ">{inProgress.length}</p>
      </div>
      <div className=" w-120 md:w-[45%] h-[250px] bg-gradient-to-r from-[#54CF68] to-[#00827A]  items-center text-center flex flex-col justify-center rounded-2xl text-2xl text-white relative ">
        <img className=" absolute left-0 " src={img} alt="" />
        <img className="absolute  scale-x-[-1] right-0  " src={img} alt="" />
        <h1 className="text-2xl">Resolved</h1>
        <p className=" text-6xl ">0</p>
      </div>
    </div>
  );
};

export default Hirro;
