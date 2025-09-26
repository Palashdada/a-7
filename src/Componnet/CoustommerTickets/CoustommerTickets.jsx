import React, { use } from "react";
import TicketsCards from "./TicketsCards";

const CoustommerTickets = ({ ticketPromis }) => {
  const ticketDatas = use(ticketPromis);

  return (
    <div className="w-[1200px] mx-auto ">
      <h1 className=" text-[#34485A] text-2xl font-semibold ">
        Customer Tickets
      </h1>
      <div className=" grid grid-cols-2 w-9/12 gap-4 mt-5">
        {ticketDatas.map((data) => {
          return <TicketsCards data={data}></TicketsCards>;
        })}
      </div>
    </div>
  );
};

export default CoustommerTickets;
