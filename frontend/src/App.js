import "./App.css";
import Address from "./Components/Address";
import { Route, Routes } from "react-router-dom";
import Successpage from "./Components/Successpage";
import Paymentcard from "./Components/Paymentcard";
import Shippingdetail from "./Components/Shippingdetail";
import Verifyotp from "./Components/Verifyotp";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/address" element={<Address />}></Route>
        <Route path='/shippingdetail' element={<Shippingdetail/>}></Route>
        <Route path="/paymentcard" element={<Paymentcard/>}></Route>
        <Route path="/verifyotp" element={<Verifyotp/>}></Route>
        <Route path="/successpage" element={<Successpage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
