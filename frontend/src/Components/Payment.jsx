import React, { useState } from "react";
import styles from "./payment.module.css"

const Payment = (props) => {
  const [total, settTotal] = useState(0);
  const {handleClick}=props;

  return (
    <div className={styles.payment} style={{ top: `${props.top}` }}>
      <div>
        <h2 >Order Summary</h2>
      </div>
      <div>
        <div>
          <span>Subtotal</span>
          <span style={{ float: "right" }}>${total}</span>
        </div>
        <div>
          <span>Shipping</span>
          <span style={{ float: "right" }}>TBD</span>
        </div>
        <div>
          <span>Estimated Tax</span>
          <span style={{ float: "right" }}>$0.00</span>
        </div>
        <div>
          <span style={{ color: "black" }}>Total</span>
          <span style={{ color: "black", float: "right" }}>${total}</span>
        </div>
        <div>
          <button className={styles.btn} style={{}} onClick={()=>handleClick()}>
            {props.title}{" "}
          </button>
          <div >
            <img
              height="25px"
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
              className={styles.btnPromo}
                type="button"
                style={{ padding: "0rem 0.25rem" }}
              >
                Promo Code
              </button>
            </h2>
            <div>
              <div style={{ padding: "1rem 0.25rem" }}>
                <input type="text" />
                <button >Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
