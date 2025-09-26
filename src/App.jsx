import { Suspense, useEffect, useState } from "react";
import "./App.css";
import CoustommerTickets from "./Componnet/CoustommerTickets/CoustommerTickets";
import Footer from "./Componnet/Footer";
import Hirro from "./Componnet/Hirro";
import Navbar from "./Componnet/Navbar";
import { ToastContainer } from "react-toastify";

function App() {
  let [inProgress, setInProgress] = useState([]);
  let [resolved, setResolved] = useState([]);
  // const ticketPromis = fetch("/ticket.json").then((res) => res.json());
  let [ticket, setTicket] = useState([]);
  useEffect(() => {
    fetch("/ticket.json")
      .then((res) => res.json())
      .then((data) => {
        setTicket(data);
      });
  });

  return (
    <>
      <Navbar></Navbar>
      <Hirro inProgress={inProgress} resolved={resolved}></Hirro>
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <CoustommerTickets
          // ticketPromis={ticketPromis}
          inProgress={inProgress}
          setInProgress={setInProgress}
          setResolved={setResolved}
          resolved={resolved}
          ticket={ticket}
        ></CoustommerTickets>
      </Suspense>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
