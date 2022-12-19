import { Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import styles from "./payment.module.css"

const Payment = (props) => {
  const {handleClick,spinner}=props;
  const [showpromo,setshowpromo]=useState(false);
  const [paymentdata, setpaymentdata] = useState(JSON.parse(localStorage.getItem("paymentdata"))||{subtotal:localStorage.getItem("Carts")||0,shipping:50,tax:12,total:1,promo:0});
  localStorage.setItem("paymentdata",JSON.stringify(paymentdata))
  let [promoapply,setpromoapply]=useState(JSON.parse(localStorage.getItem("promoapply"))||false)
  localStorage.setItem("promoapply",JSON.stringify(promoapply));
  const[promodata,setpromodata]=useState("")
  const handleChange =()=>{
    let cartdata =  JSON.parse(localStorage.getItem("Cart"))|| [];
    console.log(cartdata)
    // let to =  cartdata.reduce(function(acc,el){
    //     return acc + (el.total||el.price);
    // },0)||100;
  //  setpaymentdata((paymentdata)=>{return{...paymentdata,subtotal:to}})
    console.log(paymentdata)
  setpaymentdata((paymentdata)=>{return{...paymentdata,total:(paymentdata.subtotal+paymentdata.shipping+(Math.floor((paymentdata.subtotal/100)*paymentdata.tax))-(Math.floor((paymentdata.subtotal/100)*paymentdata.promo)))}})

}
const handlepromo=()=>{
  let promodata1=promodata.slice(0,5).toLowerCase();
  let promodata2=promodata.slice(5,7);

  console.log(promodata,promodata1,promodata2)
  if(promodata1+promodata2=="masai10"){
    setpromoapply(true);
    setpaymentdata({...paymentdata,promo:10})
    handleChange();
  }else if(promodata1+promodata2=="masai20"){
    setpromoapply(true);
    setpaymentdata({...paymentdata,promo:20})
    handleChange();
  }else if(promodata1+promodata2=="masai30"){
    setpromoapply(true);
    setpaymentdata({...paymentdata,promo:30})
    handleChange();
  }else{
    alert("This is not a valid Promo Code.")
  }
}
//console.log(paymentdata)
useEffect(() => {
  handleChange();
},[]);


  return (
    <div className={styles.payment} >
      <div>
        <h2 >Order Summary</h2>
      </div>
      <div>
        <div>
          <span>Subtotal</span>
          <span style={{ float: "right" }}>${paymentdata.subtotal}</span>
        </div>
        <div>
          <span>Shipping</span>
          <span style={{ float: "right" }}>${paymentdata.shipping}</span>
        </div>
        <div>
          <span>Estimated Tax</span>
          <span style={{ float: "right" }}>{paymentdata.tax}%</span>
        </div>
        <div>
          <span>Promo</span>
          <span style={{ float: "right" }}>{paymentdata.promo==0?0:paymentdata.promo}%</span>
        </div>
        <div>
          <span style={{ color: "black" }}>Total</span>
          <span style={{ color: "black", float: "right" }}>${paymentdata.total.toFixed(2)}</span>
        </div>
        <div>
         {spinner? <Spinner className={styles.spinner} />:<button className={styles.btn} style={{}} onClick={()=>handleClick()}>
            {props.title}{" "}
          </button>}
          <div >
            <img
              height="10px"
              width="50px"
              src="https://www.anthropologie.com/static/v3/images/paypal-logo-ef75c426f33092b001a8a3d1a90d391f.svg"
              alt=""
            />
          </div>
        </div>

        <hr />

        <div>
          <div style={{ border: "none" }}>
            <h2>
              <button
              onClick={()=>setshowpromo((showpromo)=>(!showpromo))}
              className={styles.btnPromo}
                type="button"
                style={{ padding: "0rem 0.25rem" }}
              >
                Promo Code
              </button>
            </h2>
            <div>
             { showpromo&&<div style={{ padding: "1rem 0.25rem" }}>
                <input type="text"style={{border:"1px solid"}} value={promodata} onChange={(e)=>setpromodata(e.target.value)}/>
                <button onClick={handlepromo}
                className={styles.btn}
                >Apply</button>
              </div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
