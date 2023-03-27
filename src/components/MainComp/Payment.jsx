import React from "react";
import {FaCcMastercard, FaCcVisa} from "react-icons/fa"
import {MdOutlinePayment, MdOutlinePayments} from "react-icons/md"
import verify from "../../assets/verify.png"

const Payment = () => {
  return (
    <div className="payments mt-3 text-center">
      <div className="text-secondary fw-bold mb-4">
        Secure and easy payment with wide range of checkout choices
      </div>
      <div className="logos-area d-flex align-items-center justify-content-center flex-wrap">
        <div className="Pay fw-bold fs-4">Pay With</div>
        <div className="logos d-flex gap-3">
          <div className="logo fs-1  border bg-warning d-flex justify-content-center align-items-center"><FaCcVisa/></div>
          <div className="logo fs-1 border bg-warning d-flex justify-content-center align-items-center"><FaCcMastercard/></div>
          <div className="logo fs-1  border bg-warning d-flex justify-content-center align-items-center"><MdOutlinePayment/></div>
          <div className="logo fs-1  border bg-warning d-flex justify-content-center align-items-center"><MdOutlinePayments/></div>
        </div>
        <div className="verify">
          <img src={verify} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Payment;
