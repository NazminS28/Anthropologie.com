import React from 'react'
import { Routes,Route } from 'react-router-dom'
import ClothesSingle from './ClothesSingle'

const AllRoute  = () => {
  return (
    <Routes>
        <Route path="/cloth/:id"   element={<ClothesSingle/>}/>
    </Routes>
  )
}

export default AllRoute