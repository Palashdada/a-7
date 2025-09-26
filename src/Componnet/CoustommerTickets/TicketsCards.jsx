import React from "react";
import { toast } from "react-toastify";

const TicketsCards = ({ data, inProgress, setInProgress }) => {
  let clickHandel = (card) => {
    if (!inProgress.find((c) => c.id === card.id))
      setInProgress([...inProgress, card]);
    toast("added to In-Progress");
  };
  return (
    <div
      onClick={() => clickHandel(data)}
      className=" hover:scale-110 transform transition duration-300 "
    >
      <div className="bg-white rounded-2xl shadow p-2 ">
        <div className="flex justify-between">
          <h1 className="text-[#001931]"> {data.title} </h1>
          <button className="bg-[#B9F8CF] text-[#0B5E06] rounded-2xl p-2">
            {" "}
            {data.status}{" "}
          </button>
        </div>
        <p className="text-[#627382]">{data.description}</p>
        <div className=" flex  justify-between">
          <div className=" flex gap-2 ">
            <h1 className="text-[#627382]">#{data.id} </h1>
            <p className="text-[#F83044]"> {data.priority} </p>
          </div>
          <div className=" flex gap-4 ">
            <h1 className="text-[#627382]">{data.customer} </h1>
            <p className="text-[#627382]">{data.createdAt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketsCards;
