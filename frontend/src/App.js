import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Footer from "./components/Footer";
import Header from "./components/Header";
import "./assets/styles/index.css";
import CreateContact from "./screen/CreateContact";
import AllContacts from "./screen/AllContacts";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
       <div>
       <Outlet />
       </div>
      </main>
      <ToastContainer />
      <Footer />
    </>
  );
}

export default App;
