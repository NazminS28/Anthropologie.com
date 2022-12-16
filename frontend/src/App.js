
import "./App.css";
import AllRoute from "./ProductsPages/AllRoute"
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import SingleProductPage from "./ProductsPages/SingleProductPage";

function App() {
  return (
    <div className="App">

       <Navbar/>/
      <AllRoute/>
      <Footer/>
    </div>
  );
}

export default App;

