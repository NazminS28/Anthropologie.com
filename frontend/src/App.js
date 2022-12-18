
import "./App.css";

import AllRoute from "./ProductsPages/AllRoute";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
// import { Dropdown } from "bootstrap";
import MenSubNav from "./Components/Dropedown";
import Clodata from "./ProductsPages/Clodata";

function App() {
  return (
    <div className="App">
    {/* <Clodata/> */}
       <Navbar/> 
      <AllRoute/>
      <Footer/>
    </div>
  );
}

export default App;

