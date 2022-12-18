
import "./App.css";

import AllRoute from "./ProductsPages/AllRoute";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { RespNav } from "./Components/respnav";

function App() {
  return (
    <div className="App">
      <div className="resp-nav">
       <RespNav/>
       
      </div>
      <div className="main-nav">   
      <Navbar />
      </div>
      <AllRoute/>
      <Footer/>
      
    </div>
  );
}

export default App;

