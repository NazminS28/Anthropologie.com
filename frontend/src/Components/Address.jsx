import React, { useState } from 'react'
import style from './address.module.css'
import { BsBoxSeam } from 'react-icons/bs';
import Payment from './Payment';
import { useNavigate } from 'react-router-dom';

const Address = () => {

  const [address,setAddress]=useState(JSON.parse(localStorage.getItem("address"))||{country:"",firstname:"",lastname:"",streetaddress1:"",
  streetaddress2:"",city:"",province:"",region:"",postcode:"",phone:""})
  const navigate=useNavigate();
  const [spinner,setspinner]=useState(false);
  console.log(address)
  const handleClick=()=>{
    setspinner(true)
    setTimeout(()=>{
      setspinner(false)
      if((address.country!=="")&&(address.firstname!=="")&&(address.lastname!=="")&&
      ((address.streetaddress1!=="")||(address.streetaddress2!==""))&&
      (address.city!=="")&&(address.province!=="")&&
      (address.postcode!=="")&&(address.postcode.length==6)&&(address.phone!=="")&&(address.phone.length==10)){
      localStorage.setItem("address",JSON.stringify(address))
      navigate("/shippingdetail")
  }else if(address.country===""){
        alert("select country");
  }else if(address.firstname===""){
        alert("Enter First Name");
  }else if(address.lastname===""){
        alert("Enter last Name");
  }else if((address.streetaddress1==="")&&(address.streetaddress2==="")){
         alert("Enter Address");
  }else if(address.city===""){
    alert("Enter City");
  }else if(address.province===""){
    alert("Enter Province");
  }else if(address.postcode===""||address.postcode.length<6){
    alert("Enter a Valid Postcode");
  }else if(address.phone===""||address.phone.length<10){
    alert("Enter a Valit Phone no");
  }
    },3000)
    
    // document.getElementById("address-form").submit()
  }
  const chageFormData=(e)=>{
    const fn1=()=>{
      let {name,value}=e.target;
      console.log(name,value)
      setAddress({...address,[name]:value.trim()})
    }
    fn1()
    // let id;
    // clearTimeout(id)
    // id=setTimeout(()=>{fn1()},3000);
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
        <form  id='address-form'>
        <select value={address.country} onChange={(e)=>chageFormData(e)} name="country" id="country" required className={style.box3} >
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
            <input  name="firstname" value={address.firstname} onChange={(e)=>chageFormData(e)} required type="text" className={style.box7} />
          </div>
          <div>
            <span className={style.box1}>Last Name*</span><br />
            <input  name="lastname" value={address.lastname} onChange={(e)=>chageFormData(e)}  required type="text" className={style.box7} />
          </div>
        </div>

        <span className={style.box1}>Street Address*</span><br />
        <input  name="streetaddress1" value={address.streetaddress1} onChange={(e)=>chageFormData(e)}  required type="text" placeholder='35 character limit, write address separated by comma.' className={style.boxs2} />
        <br />
        <span className={style.box1}>Address2*</span><br />
        <input  name="streetaddress2" value={address.streetaddress2} onChange={(e)=>chageFormData(e)}  required type="text" placeholder="write address separated by comma,Building, Suite or Apartment Number" className={style.boxs2} />
        <br />
        <input required type="checkbox" className={style.box5} /><span className={style.box1}>PO Box</span>
        <br />
        <div className={style.boxs1}>
          <div>
            <span className={style.box1}>City*</span><br />
            <input  name="city" value={address.city} onChange={(e)=>chageFormData(e)}  required type="text" className={style.box7} />
          </div>
          <div>
            <span className={style.box1}>Province or Region*</span><br />
            <input  name="province" value={address.province} onChange={(e)=>chageFormData(e)}  required type="text" placeholder='Province or Region' className={style.box7} />
          </div>
        </div>

        <span className={style.box1}>Postcode*</span><br />
        <input  name="postcode" value={address.postcode} onChange={(e)=>{(e.target.value.length<7) && chageFormData(e)}}  required type="text" className={style.box7} />
        <br />
        <span className={style.box1}>Daytime Phone*</span><br />
        <input  name="phone" value={address.phone} onChange={(e)=>{(e.target.value.length<11) && chageFormData(e)}}  required type="text" placeholder="Do not enter a country code" className={style.box7} />

        </form>
       
      </div>
     
      
     
      <div className={style.main2}>
        
       <Payment  top="200px" handleClick={handleClick} spinner={spinner} title="SHIP TO THIS ADDRESS "/>
      
      </div>
    </div>
  </>
  
  
}

export default Address