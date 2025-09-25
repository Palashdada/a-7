import "./App.css";
import CoustommerTickets from "./Componnet/CoustommerTickets/CoustommerTickets";
import Footer from "./Componnet/Footer";
import Hirro from "./Componnet/Hirro";
import Navbar from "./Componnet/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hirro></Hirro>
      <CoustommerTickets></CoustommerTickets>
      <Footer></Footer>
    </>
  );
}

export default App;
