// import React, { use } from "react";
import TicketsCards from "./TicketsCards";
import TaskStatus from "./TaskStatus";

const CoustommerTickets = ({
  // ticketPromis,
  setInProgress,
  inProgress,
  setResolved,
  resolved,
  ticket,
  setTicket,
}) => {
  // const ticketDatas = use(ticketPromis);

  return (
    <div className="w-[1200px] mx-auto md:flex justify-center ">
      <div>
        <h1 className=" text-[#34485A] text-2xl font-semibold ">
          Customer Tickets
        </h1>
        <div className=" grid md:grid-cols-2 w-11/12 gap-4 mt-5 max-w-fit">
          {ticket.map((data) => (
            <TicketsCards
              key={data.id}
              data={data}
              setInProgress={setInProgress}
              inProgress={inProgress}
              setTicket={setTicket}
            ></TicketsCards>
          ))}
        </div>
      </div>
      <div className="">
        <TaskStatus
          setResolved={setResolved}
          inProgress={inProgress}
          setInProgress={setInProgress}
          resolved={resolved}
          setTicket={setTicket}
        ></TaskStatus>
      </div>
    </div>
  );
};

export default CoustommerTickets;
