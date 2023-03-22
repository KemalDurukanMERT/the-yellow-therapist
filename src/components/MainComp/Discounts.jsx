import React from 'react'
import student_dsc from "../../assets/student_tyt.png";
import everyone_dsc from "../../assets/everyone_tyt.png";

const Discounts = () => {
  return (
    <div className="discounts">
        <div className="discount-left">
          <img className="half-image" src={student_dsc} alt="" />
          <div className="fs-1 fw-bolder">Get Up to 50% OFF!</div>
          <div>Are you a member of our partner student club?</div>
        </div>
        <div className="discount-right">
          <img className="half-image" src={everyone_dsc} alt="" />
          <div className="fs-1 fw-bolder">Get 20% OFF!</div>
          <div>Book your first session with us</div>
        </div>
      </div>
  )
}

export default Discounts