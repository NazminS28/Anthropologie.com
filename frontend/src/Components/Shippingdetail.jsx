import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Payment from './Payment'
import style from './shippingdetail.module.css'

const Shippingdetail = () => {
  const [spinner,setspinner]=useState(false);
  const navigate = useNavigate();
  const handleClick = ()=>{
    setspinner(true)
    setTimeout(()=>{
      setspinner(false)
    
    navigate("/paymentcard")
  },3000)
  }


   let data = JSON.parse(localStorage.getItem("cartData")) || [];

//   const data1 =JSON.parse(localStorage.getItem("data"))
 let address=JSON.parse(localStorage.getItem("address"))
  
  return (<>
    <div className={style.container}>
      <div className={style.main}>
        <h5>Shipping To {address.firstname} {address.lastname}</h5>
        <div className={style.div}>
          <div className={style.div1}>
            <p style={{marginTop:"0.8rem"}}>{"Name-   "} {address.firstname} {address.lastname} </p>
            <p style={{marginTop:"0.8rem"}}>{"Address-   "} {address.streetaddress1?address.streetaddress1:address.streetaddress2}</p>
            <p style={{marginTop:"0.8rem"}}>{"Province-   "} {address.province}</p>
            {/* <p style={{marginTop:"0.8rem"}}>{"dummy"}/ {"dummy"} /{"dummy"}</p> */}
            <p style={{marginTop:"0.8rem"}}>{"Phone no-   "} {address.phone}</p>
            <p style={{marginTop:"0.8rem",marginBottom:"1rem"}}>{"Pin-   "} {address.postcode}</p>
          <Link to="/address"><button className={style.btn}>edit</button></Link>
          </div>
          <div className={style.div2}>
            <p>Express and Overnight orders placed after 1 PM ET typically ship the next business day.</p>
          </div>
          <div className={style.div3}>
            <h6>7-12 business days - $60.00</h6>
            <p>Standard International</p>
            <p>Your order will be delivered by your local postal service and carrier brokerage fees may apply. Duties & taxes will be assessed upon delivery and may be nonrefundable. Order total in checkout is calculated in USD.</p>
          </div>
         
         
        
        {/* map data here */}
        </div>
      </div>

      {/* <!-- ------------------------second part----------------------------------  --> */}

      <div className={style.main2}>
       <Payment  top="200px" handleClick={handleClick} spinner={spinner} title="Continue to Payment"/>
      </div>
    </div>
  </>)
}

export default Shippingdetail