// import logo from './logo.svg';
import "./App.css";
import Cart from "./Cart";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Cars from "./Cars";
// import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Navbar";
import Details from "./Details";
import Search from "./Search";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Cart />} />
        <Route path="/About" element={<About />} />
        <Route path="/Cars" element={<Cars />} />
        <Route path="/Search" element={<Search  />} />
        <Route path="/Details/:id" element={<Details />} />
    
      </Routes>
    </>
  );
}

export default App;
