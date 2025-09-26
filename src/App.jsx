import { Suspense } from "react";
import "./App.css";
import CoustommerTickets from "./Componnet/CoustommerTickets/CoustommerTickets";
import Footer from "./Componnet/Footer";
import Hirro from "./Componnet/Hirro";
import Navbar from "./Componnet/Navbar";

function App() {
  const ticketPromis = fetch("/ticket.json").then((res) => res.json());
  return (
    <>
      <Navbar></Navbar>
      <Hirro></Hirro>
      <Suspense>
        <CoustommerTickets ticketPromis={ticketPromis}></CoustommerTickets>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
