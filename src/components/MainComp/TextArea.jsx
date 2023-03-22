import React from "react";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";

const TextArea = () => {
  return (
    <div className="text-container">
      <div className="text-area m-5 d-flex gap-3 flex-column align-items-center">
        <div className="text d-flex  justify-content-center align-items-center flex-wrap">
          <div className="image1  d-flex justify-content-center">
            <img src={image1} alt="" width={"350px"} />
          </div>
          <div className="text1  d-flex flex-column justify-content-center">
            <div className="hdr fs-2 fw-bolder">A bridge between...</div>
            <div className="fs-5">
              A platform serving both of who seeks professional help for their
              mental well being and the professional therapists who are always
              ready to help. We're providing a smooth bridge between these two.
            </div>
          </div>
        </div>
        <div className="textcode2 d-flex justify-content-center flex-wrap">
          <div className="image2 d-flex justify-content-center">
            <img src={image2} alt="" width={"250px"} />
          </div>
          <div className="text2 d-flex flex-column justify-content-center">
            <div className="hdr fs-2 fw-bolder">those who need help...</div>
            <div className="fs-5">
              Something ails? Hey, seeking help is the most humane thing we can
              do. It's not always easy on our own. This is the place where you
              get the proper help you need
            </div>
          </div>
        </div>
        <div className="text d-flex justify-content-center flex-wrap">
          <div className="image3 d-flex justify-content-center">
            <img src={image3} alt="" width={"300px"} />
          </div>
          <div className="text3 d-flex flex-column justify-content-center">
            <div className="hdr fs-2 fw-bolder">and those who can provide.</div>
            <div className="fs-5">
              Are you a professional therapist? We're providing a structured
              platform to reach out to those who need your help. An independant
              platform to work on your own schedule and demand.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextArea;
