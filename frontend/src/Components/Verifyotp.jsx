import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './verifyotp.module.css'

const Verifyotp = () => {
  const [inputOtp, setinputOtp] = useState("")
  const [otp,setotp] = useState("")
  const navigate = useNavigate();
    
  useEffect(()=>{
    let otp= generateOTP()
    function generateOTP() {
        var string = '0123456789'
        let OTP = '';
        var len = string.length;
        for (let i = 0; i < 6; i++ ) {
            OTP += string[Math.floor(Math.random() * len)];
        }
        return OTP;
    }
    setotp(otp)
    let id=setTimeout(()=>{
        alert(`" ${(otp+"").split("").join(" ")} " is your OTP valid for only 10 second`)
        }, 10000);
     const callback=()=>{
        clearTimeout(id)
     }   
    return  callback;   
    
   },[]) 

  
  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(otp,inputOtp)
   if(inputOtp===otp){
     alert("Otp match Successfully")
     navigate("/successpage");
   }else{
     alert("Invalid OTP try again")  
     window.location.reload();   
   }
  }
  
  return (<>
    <div className={style.otpBox}>
      <div>
        <p className={`${style.para} ${style.para1}`} >One-Time Password(OTP)</p>
        <p className={`${style.para} ${style.para2}`} >
          6-digit code has been sent on your registered mobile number wait for 10 second
        </p>
      </div>
      <form  className={style.My} onSubmit={handleSubmit}>
        <div className={style.inputOTP}>
          <p className={style.para} >Enter You OTP : -</p>
          <input value={inputOtp} onChange={(e)=>setinputOtp(e.target.value)} className={style.otp} type="number"  required />
        </div>
        <input type="submit" value="Submit OTP" className={style.btn} />
      </form>
    </div>

  </>)

}

export default Verifyotp