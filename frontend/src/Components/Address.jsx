import React, { useState } from 'react'
import style from './address.module.css'
import { BsBoxSeam } from 'react-icons/bs';
import Payment from './Payment';
import { useNavigate } from 'react-router-dom';

 
 
 

const Address = () => {

  const navigate=useNavigate();
  const handleClick=()=>{
   navigate("/shippingPage")
  }
  return <>

    <div className={style.container}>
      <div className={style.main}>
        <div className={style.font}>
          <div style={{ fontSize: "1.25rem", marginRight: "0.5rem", height:"0.5rem" }}><BsBoxSeam /></div>
          <h3 style={{ height:"10px" ,marginTop:"0px"}}>Ship</h3>
        </div>
        <hr className={style.new1} />

        <h5 className={style.box2}>Shipping Address</h5>
        <span className={style.box1}>Country/Region*</span><br />
        <select name="country" id="country" required className={style.box3} >
          <option value=""></option>
          <option value="India">India</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Afghanistan">Afghanistan</option>
          <option value="Iraq">Iraq</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="Bhutan">Bhutan</option>
          <option value="China">China</option>
          <option value="Hong Kong">Hong Kong</option>
        </select>
        <br />
        <div className={style.boxs1}>
          <div>
            <span className={style.box1}>First Name*</span><br />
            <input  name="first" required type="text" className={style.box7} />
          </div>
          <div>
            <span className={style.box1}>Last Name*</span><br />
            <input  name="last" required type="text" className={style.box7} />
          </div>
        </div>

        <span className={style.box1}>Street Address*</span><br />
        <input  name="address" required type="text" placeholder='35 character limit,continue below.' className={style.boxs2} />
        <br />
        <span className={style.box1}>Address2*</span><br />
        <input  name="address2" required type="text" placeholder="Building, Suite or Apartment Number" className={style.boxs2} />
        <br />
        <input required type="checkbox" className={style.box5} /><span className={style.box1}>PO Box</span>
        <br />
        <div className={style.boxs1}>
          <div>
            <span className={style.box1}>City*</span><br />
            <input  name="city" required type="text" className={style.box7} />
          </div>
          <div>
            <span className={style.box1}>Province or Region*</span><br />
            <input  name="province" required type="text" placeholder='Province or Region' className={style.box7} />
          </div>
        </div>

        <span className={style.box1}>Postcode*</span><br />
        <input  name="postcode" required type="text" className={style.box7} />
        <br />
        <span className={style.box1}>Daytime Phone*</span><br />
        <input  name="phone" required type="text" placeholder="Do not enter a country code" className={style.box7} />

      </div>
     
      
     
      <div className={style.main2}>
        
       <Payment  top="200px" handleClick={handleClick} title="SHIP TO THIS ADDRESS "/>
      
      </div>
    </div>
  </>
  
  
}

export default Address