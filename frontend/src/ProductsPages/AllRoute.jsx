import React from 'react'
import { Routes,Route } from 'react-router-dom'
import ClothesSingle from './ClothesSingle'
import Homepage from "../pages/Homepage";
import Login from "../Components/Login";

const AllRoute  = () => {
  return (
    <Routes>
        <Route path="/cloth/:id"   element={<ClothesSingle/>}/>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>
    </Routes>
  )
}

export default AllRoute