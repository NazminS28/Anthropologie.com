import React from 'react'
import { useNavigate } from 'react-router-dom'
import Payment from './Payment'
import style from './ShipDetail.module.css'

const ShipDetail = () => {
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate("/paymentcard")
  }


   let data = JSON.parse(localStorage.getItem("cartData")) || [];

//   const data1 =JSON.parse(localStorage.getItem("data"))
 
  
  return (<>
    <div className={style.container}>
      <div className={style.main}>
        <h5>Shipping To {"dummy"} {"dummy"}</h5>
        <div className={style.box}>
          <div className={style.box1}>
            <p>{"dummy"}{"dummy"} </p>
            <p>{"dummy"}</p>
            <p>{"dummy"}</p>
            <p>{"dummy"}/ {"dummy"} /{"dummy"}</p>
            <p>{"dummy"}</p>
            <p>{"dummy"}</p>
          </div>
          <div className={style.box2}>
            <p>Express and Overnight orders placed after 1 PM ET typically ship the next business day.</p>
          </div>
          <div className={style.box3}>
            <h6>7-12 business days - $60.00</h6>
            <p>Standard International</p>
            <p>Your order will be delivered by your local postal service and carrier brokerage fees may apply. Duties & taxes will be assessed upon delivery and may be nonrefundable. Order total in checkout is calculated in USD.</p>
          </div>
         
         
          <div style={{width:"100%",borderBottom:"1px solid #d3d3d3",borderTop:"1px solid #d3d3d3"}}>
            <div className={style.items}>
                <p className="my-0">Item</p>
            </div>
            <div className={style.itamTags}>
                <p className="my-0">Item price</p>
                <p className="my-0">Quantity</p>
                <p className="my-0">Total Price</p>
            </div>
        </div>
        {/* map data here */}
        </div>
      </div>

      {/* <!-- ------------------------second part----------------------------------  --> */}

      <div className={style.main2}>
       <Payment  top="200px" handleClick={handleClick} title="Continue to Payment"/>
      </div>
    </div>
  </>)
}

export default ShipDetail