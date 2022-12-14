import React, { useState } from 'react'
import addressStyle from './address.module.css'
import { BsBoxSeam } from 'react-icons/bs';
import PaymentBox from './Payment';

 
 
 

const Address = () => {

  return <>

    <div className={addressStyle.container}>
      <div className={addressStyle.main}>
        <div className={addressStyle.font}>
          <div style={{ fontSize: "1.25rem", marginRight: "0.5rem", height:"0.5rem" }}><BsBoxSeam /></div>
          <h3 style={{ height:"10px" ,marginTop:"0px"}}>Ship</h3>
        </div>
        <hr className={addressStyle.new1} />

        <h5 className={addressStyle.box2}>Shipping Address</h5>
        <span className={addressStyle.box1}>Country/Region*</span><br />
        <select name="country" id="country" required className={addressStyle.box3} >
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
        <div className={addressStyle.boxs1}>
          <div>
            <span className={addressStyle.box1}>First Name*</span><br />
            <input  name="first" required type="text" className={addressStyle.box7} />
          </div>
          <div>
            <span className={addressStyle.box1}>Last Name*</span><br />
            <input  name="last" required type="text" className={addressStyle.box7} />
          </div>
        </div>

        <span className={addressStyle.box1}>Street Address*</span><br />
        <input  name="address" required type="text" placeholder='35 character limit,continue below.' className={addressStyle.boxs2} />
        <br />
        <span className={addressStyle.box1}>Address2*</span><br />
        <input  name="address2" required type="text" placeholder="Building, Suite or Apartment Number" className={addressStyle.boxs2} />
        <br />
        <input required type="checkbox" className={addressStyle.box5} /><span className={addressStyle.box1}>PO Box</span>
        <br />
        <div className={addressStyle.boxs1}>
          <div>
            <span className={addressStyle.box1}>City*</span><br />
            <input  name="city" required type="text" className={addressStyle.box7} />
          </div>
          <div>
            <span className={addressStyle.box1}>Province or Region*</span><br />
            <input  name="province" required type="text" placeholder='Province or Region' className={addressStyle.box7} />
          </div>
        </div>

        <span className={addressStyle.box1}>Postcode*</span><br />
        <input  name="postcode" required type="text" className={addressStyle.box7} />
        <br />
        <span className={addressStyle.box1}>Daytime Phone*</span><br />
        <input  name="phone" required type="text" placeholder="Do not enter a country code" className={addressStyle.box7} />

      </div>
     
      
     
      <div className={addressStyle.main2}>
        
       <PaymentBox  top="200px"  title="SHIP TO THIS ADDRESS "/>
      
      </div>
    </div>
  </>
  
  
}

export default Address