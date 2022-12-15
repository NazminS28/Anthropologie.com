import logo from "./logo.svg";
import "./App.css";
import Address from "./Components/Address";
import PlaceOrder from "./Components/PlaceOrder";
import { Route, Routes } from "react-router-dom";
import ShipDetail from "./Components/ShipDetail";
import PaymentCard from "./Components/PaymentCard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/address" element={<Address />}></Route>
        <Route path='/shippingPage' element={<ShipDetail/>}></Route>
        <Route path="/paymentcard" element={<PaymentCard/>}></Route>
        <Route path="/success" element={<PlaceOrder />}></Route>
      </Routes>
    </div>
  );
}

export default App;
