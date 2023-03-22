import React from "react";

const Payment = () => {
  return (
    <div className="payments mt-3">
      <div className="text-secondary fw-bold">
        Secure and easy payment with wide range of checkout choices
      </div>
      <div className="logos-area d-flex">
        <div className="Pay fw-bold fs-4">Pay With</div>
        <div className="logos">
          <div className="logo"></div>
          <div className="logo"></div>
          <div className="logo"></div>
          <div className="logo"></div>
          <div className="logo"></div>
        </div>
        <div className="verify"></div>
      </div>
    </div>
  );
};

export default Payment;
