
import "./App.css";

import CartPage from "./Components/CartPage";

import AllRoute from "./ProductsPages/AllRoute"
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="App">

     <CartPage/>
       <Navbar/> 
      <AllRoute/>
      <Footer/>

    </div>
  );
}

export default App;