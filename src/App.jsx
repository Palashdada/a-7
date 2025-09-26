import { Suspense, useState } from "react";
import "./App.css";
import CoustommerTickets from "./Componnet/CoustommerTickets/CoustommerTickets";
import Footer from "./Componnet/Footer";
import Hirro from "./Componnet/Hirro";
import Navbar from "./Componnet/Navbar";
import { ToastContainer } from "react-toastify";

function App() {
  let [inProgress, setInProgress] = useState([]);
  const ticketPromis = fetch("/ticket.json").then((res) => res.json());
  return (
    <>
      <Navbar></Navbar>
      <Hirro inProgress={inProgress}></Hirro>
      <Suspense>
        <CoustommerTickets
          ticketPromis={ticketPromis}
          inProgress={inProgress}
          setInProgress={setInProgress}
        ></CoustommerTickets>
      </Suspense>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
