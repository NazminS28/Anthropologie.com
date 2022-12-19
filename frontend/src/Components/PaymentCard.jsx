import React, { useState } from 'react'
import Payment from './Payment'
import style from './paymentcard.module.css'
import { useNavigate } from 'react-router-dom'
 

const Paymentcard = () => {
//   let d = JSON.parse(localStorage.getItem("cartData")) || [];
//   const data1 =JSON.parse(localStorage.getItem("data"))
   let address=JSON.parse(localStorage.getItem("address"))
   const carddata={cardnumber:"",expmonth:"",expyear:"",cvv:""};
   const [carddetails,setcarddetails]=useState(carddata)
   const [spinner,setspinner]=useState(false);
   const [radioBtn,setredioBtn]=useState("")
   const navigate = useNavigate();
   console.log(carddetails)
  const changeRadioValue=()=>{
      
  }
  const handleClick = ()=>{
    setspinner(true)
    setTimeout(()=>{
      setspinner(false)
      if(radioBtn!==""){
        if(radioBtn==="card"){
           if((carddetails.cardnumber.length==16)&&(carddetails.expmonth!=="")&&(carddetails.expyear!=="")&&(carddetails.cvv.length==3)){
            navigate("/verifyotp")
           }else if(carddetails.cardnumber.length!=16){
            alert("Enter valid card number")
           }else if((carddetails.expmonth==""||"--Month--"==carddetails.expmonth)){
            alert("Select expire month")
           }else if((carddetails.expyear==""||"--Year--"==carddetails.expyear)){
            alert("Select expire year")
           }else if((carddetails.cvv!=3)){
            alert("Enter a valid cvv")
           }
        }else{
          navigate("/verifyotp")
        }
      }else{
        alert("Please select any payment method.")
      }
   
  },3000)
    
  }

  return (<>
    <div className={style.container}>
      <div className={style.main}>
        <h5>Payment Method</h5>
        <div style={{border:"0.0005rem  "}}>
        <div className={style.div5}>
        <input type="radio" onChange={()=>{setredioBtn("card");setcarddetails(carddata)}} name="radio" />
        <span className={style.card}>Credit Card</span><br />
        <div>
          <div >
            <div >
              <span className={style.div1}>CARD NUMBER*</span>
              <input required className={style.div2} type="number" placeholder='xxxx xxxx xxxx xxxx' value={carddetails.cardnumber} onChange={(e)=> (radioBtn=="card") && (e.target.value.length<17) && setcarddetails({...carddetails,cardnumber:e.target.value})} /> <br />
              <div className={style.dateBox}>
                <div>
                  <span className={style.div1}>Expiration Date/Month*</span><br />
                  <select name="" value={carddetails.expmonth} onChange={(e)=>(radioBtn=="card")&&setcarddetails({...carddetails,expmonth:e.target.value})}  className={style.div3}>
                    <option value="--Month--">--Month--</option>
                    <option value="01-January">01-January</option>
                    <option value="02-February">02-February</option>
                    <option value="03-March">03-March</option>
                    <option value="04-April">04-April</option>
                    <option value="05-May">05-May</option>
                    <option value="06-June">06-June</option>
                    <option value="07-July">07-July</option>
                    <option value="08-August">08-August</option>
                    <option value="09-September">09-September</option>
                    <option value="10-October">10-October</option>
                    <option value="11-November">11-November</option>
                    <option value="12-December">12-December</option>
                  </select>
                </div>
                <div>
                  <span className={style.div1}>Year*</span><br />
                  <select name="" value={carddetails.expyear} onChange={(e)=>(radioBtn=="card")&&setcarddetails({...carddetails,expyear:e.target.value})} className={style.div3} style={{ width: "35vh" }}>
                    <option value="--Year--">--Year--</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                    <option value="2031">2031</option>
                    <option value="2032">2032</option>
                  </select>
                </div>
                <div>
                  <span className={style.div1}>CVV*</span><br />
                  <input  required   value={carddetails.cvv} onChange={(e)=>(radioBtn=="card")&& (e.target.value.length<4) && setcarddetails({...carddetails,cvv:e.target.value})} className={style.div3} style={{ width: "27vh", borderRadius: "0px" }} type="number" placeholder='***'/>
                </div>
              </div>
            </div>
            <div className={style.div4}>
              <h5>Billing Address</h5>
              <p style={{marginTop:"0.8rem"}}>{"Name-   "} {address.firstname} {address.lastname} </p>
            <p style={{marginTop:"0.8rem"}}>{"Address-   "} {address.streetaddress1?address.streetaddress1:address.streetaddress2}</p>
            <p style={{marginTop:"0.8rem"}}>{"Province-   "} {address.province}</p>
            {/* <p style={{marginTop:"0.8rem"}}>{"dummy"}/ {"dummy"} /{"dummy"}</p> */}
            <p style={{marginTop:"0.8rem"}}>{"Phone no-   "} {address.phone}</p>
            <p style={{marginTop:"0.8rem",marginBottom:"1rem"}}>{"Pin-   "} {address.postcode}</p>
            </div>
          </div>
        </div>
        </div>
         <div className={style.div5}>
        <input  required type="radio" onChange={()=>{setredioBtn("paypal");setcarddetails(carddata)}} name="radio"/><img style={{display:"inline"}} className={style.div6} src="https://www.anthropologie.com/static/v3/images/paypal-logo-ef75c426f33092b001a8a3d1a90d391f.svg" alt="" /><br />
        </div>
        <div className={style.div5}>
        <input  required type="radio" onChange={()=>{setredioBtn("klarna");setcarddetails(carddata)}} name="radio"/><span><img style={{display:"inline"}} className={style.div6} src="https://www.anthropologie.com/static/v3/images/klarna-logo-e1f1797f9730029d90fccb75c4be22cc.svg" alt="" /></span><br />
        </div>
                 <div className={style.div5}>
        <input  required type="radio" onChange={()=>{setredioBtn("afterpay");setcarddetails(carddata)}}name="radio"/><span><img style={{display:"inline"}} className={style.div6} src="https://www.anthropologie.com/static/v3/images/afterpay-logo-7904b549fb7a2a970c606efc9f1e8260.svg" alt="" /></span><br />
        </div>
 
        </div>
      </div>

      {/* <!-- ------------------------second part----------------------------------  --> */}

      <div className={style.main2}>
       <Payment  top="200px" handleClick={handleClick} spinner={spinner} title="Order Placed"/>
      </div>
    </div>


  </>)
}

export default Paymentcard 