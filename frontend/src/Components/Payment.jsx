import React, { useState } from "react";
import styles from "./payment.css";

const Payment = (props) => {
  const [total, settTotal] = useState(0);

  return (
    <div className={styles.mainDiv} style={{ top: `${props.top}` }}>
      <div>
        <h2 className={styles.orderSummary}>Order Summary</h2>
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
          <button className={styles.button} onClick={() => props.clickMe()}>
            {props.title}{" "}
          </button>
          <div className={styles.payPal}>
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
                type="button"
                style={{ backgroundColor: "white", padding: "0rem 0.25rem" }}
              >
                Promo Code
              </button>
            </h2>
            <div>
              <div style={{ padding: "1rem 0.25rem" }}>
                <input className={styles.promoCode} type="text" />
                <button className={styles.applyBtn}>Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
