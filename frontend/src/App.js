
import "./App.css";

import AllRoute from "./ProductsPages/AllRoute";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
// import { Dropdown } from "bootstrap";
function App() {
  return (
    <div className="App">
       
      <Navbar />

      <AllRoute/>
      <Footer/>
    </div>
  );
}

export default App;

