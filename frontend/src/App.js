import logo from './logo.svg';
import './App.css';
import Clothes from './ProductsPages/Clothes';
import Shoes from './ProductsPages/Shoes';
import AllRoute from './ProductsPages/AllRoute';
import Furniture from './ProductsPages/Furniture';
import Gardens from './ProductsPages/Gardens';
import Sale from './ProductsPages/Sale';

function App() {
  return (
    <div className="App">
      <AllRoute/>
   <Clothes/>
   <Shoes/>
   <Furniture/>
   <Gardens />
   <Sale />
    </div>
  );
}

export default App;
