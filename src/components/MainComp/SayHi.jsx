import React from "react";

const SayHi = () => {
  return (
    <div className="sayHi d-flex flex-column justify-content-center align-items-center">
      <div className="header fs-4 fw-bold text-secondary">
        What are you looking for?
      </div>
      <div className="d-flex justify-content-center align-items-center flex-column flex-md-row">
        <div className="need-button btn px-4 rounded m-4 border border-3 py-2 border-warning text-warning fw-bolder">
          I need a therapist
        </div>
        <div className="">Or,</div>
        <div className="job-button btn btn-warning text-light m-4 px-4 py-2 fw-bolder">
          I am a therapist
        </div>
      </div>
    </div>
  );
};

export default SayHi;
