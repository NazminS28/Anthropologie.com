import React from 'react'
import { Routes,Route } from 'react-router-dom'
import ClothesSingle from './ClothesSingle'
import Homepage from "../pages/Homepage";
import Clothes from './Clothes';
import Shoes from './Shoes';
import Furniture from './Furniture';
import Gardens from './Gardens';
import Sale from './Sale';
import GardensSingle from './GardensSingle';
import FurnitureSingle from './FurnitureSingle';
import SaleSingle from './SaleSingle';
import CartPage from '../Components/CartPage';

import AdminAdd from '../AdminPage/AdminAdd';
import Address from '../Components/Address';
import Shippingdetail from '../Components/Shippingdetail';
import Paymentcard from '../Components/PaymentCard';
import Verifyotp from '../Components/Verifyotp';
import Successpage from '../Components/Successpage';
import Placed from '../Components/Placed';
import Order from '../Components/Order';


const AllRoute  = () => {
  return (
    <Routes>
        <Route path="/cloth"   element={<Clothes/>}/>
        <Route path="/shoes"   element={<Shoes/>}/>
        <Route path="/furniture"   element={<Furniture/>}/>
        <Route path="/gardens"   element={<Gardens/>}/>
        <Route path="/sale"   element={<Sale/>}/>
        <Route path="/cloth/:id"   element={<ClothesSingle/>}/>
        <Route path="/gardens/:id"   element={<GardensSingle/>}/>
        <Route path="/furniture/:id"   element={<FurnitureSingle/>}/>
        <Route path="/sale/:id"   element={<SaleSingle/>}/>
        <Route path='/cartPage' element={<CartPage/>}/>

        <Route path="/" element={<Homepage />}></Route>
        <Route path="/admin" element={<AdminAdd />}></Route>

        <Route path="/address" element={<Address />}></Route>
        <Route path='/shippingdetail' element={<Shippingdetail />}></Route>
        <Route path="/paymentcard" element={<Paymentcard/>}></Route>
        <Route path="/verifyotp" element={<Verifyotp/>}></Route>
        <Route path="/successpage" element={<Successpage/>}></Route>
        <Route path="/order" element={<Order/>}></Route>

    </Routes>
  )
}

export default AllRoute