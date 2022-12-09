import React from "react";
import { useParams } from "react-router-dom";

function Thankyou() {
  const orderId = useParams().orderId;
  return (
    <div>
      <div>Thankyou</div>
      <div>
        <h3>Your order number is</h3>
        <h1>{orderId}</h1>
      </div>
    </div>
  );
}

export default Thankyou;
