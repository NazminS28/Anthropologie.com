import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import AllRoute from "./ProductsPages/AllRoute";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">

    <Navbar/>
    <AllRoute/>
    <Footer/>
    

    </div>
  );
}

export default App;