
import "./App.css";

import Navbar from "./Components/Navbar";
import AllRoute from "./ProductsPages/AllRoute";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
// import { Dropdown } from "bootstrap";
import MenSubNav from "./Components/Dropedown";

function App() {
  return (
    <div className="App">


    <Navbar/>
    <AllRoute/>
    <Footer/>
    


       <Navbar/> 
      <AllRoute/>
      <Footer/>
    </div>
  );
}

export default App;

