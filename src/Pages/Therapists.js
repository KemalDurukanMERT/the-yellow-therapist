import React, { useState } from "react";
import { BsFillBagFill } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import data from "../data/data";
import "./Therapist.css";

const Therapists = () => {
  const [detail, setDetail] = useState(false);
  return (
    <div className="therapist-area d-flex flex-column justify-content-center align-items-center gap-3">
      {data.map((therapist, index) => {
        return (
          <div
            key={index}
            className="therapist-main border border-dark shadow d-flex flex-column justify-content-center align-items-center"
          >
            <div className="therapist w-100 justify-content-around d-flex gap-5  p-5">
              <div className="image-area">
                <img
                  className="rounded-circle border border-dark"
                  src={therapist.image}
                  alt=""
                />
              </div>
              <div className="info-area">
                <div className="name fs-1">{therapist.name}</div>
                <div className="infoside fs-4 text-secondary mt-3">
                  <div className="username">
                    {therapist.username} | experience: {therapist.experience}{" "}
                    years
                  </div>
                </div>
                <br />
                <br />
                <br />
                <div className="std">
                  <div className="fs-3">For Students:</div>
                  <div className="fs-5">
                    First Session:{" "}
                    <span className="text-warning">
                      BDT 1250{" "}
                      <span className="border border-warning rounded-pill px-3 py-1">
                        50% OFF
                      </span>
                    </span>
                  </div>
                  <div className="fs-5">
                    From Second Session:{" "}
                    <span className="text-success">BDT 900 </span>
                  </div>
                  <br />
                  <br />
                  <div className="fs-3">For Everyone:</div>
                  <div className="fs-5">
                    First Session:{" "}
                    <span className="text-success">
                      <del>BDT 2500</del> BDT 2000{" "}
                      <span className="border border-success rounded-pill px-3 py-1 d-inline-block">
                        20% OFF
                      </span>
                      !
                    </span>
                  </div>
                  <div className="fs-5">
                    From Second Session:{" "}
                    <span className="text-success">BDT 1600 </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="features d-flex  flex-wrap justify-content-center align-items-center gap-3 mb-3 p-3">
              {therapist.features?.map((feature, index) => {
                return (
                  <div
                    className="feature border border-warning rounded-pill text-warning px-3 py-1"
                    key={index}
                  >
                    {feature}
                  </div>
                );
              })}
            </div>
            <div className={detail ? "d-flex p-3" : "d-none"}>
              <div className="work-experience">
                <div className="fs-4 text-warning d-flex align-items-center gap-3"><BsFillBagFill /> Experience</div>
                <ul>
                  <li>Psychosocial Expert at Mayalogy Limited</li>
                  <li>Psychosocial Supervisor at Durbin HealthTech Limited</li>
                </ul>
              </div>
              <div className="education">
                <div className="fs-4 text-warning d-flex align-items-center gap-3"><FaGraduationCap />Education</div>
                <ul>
                  <li>MSc, University of Dhaka</li>
                </ul>
              </div>
            </div>
            <div className="buttons w-100 d-flex text-center">
              <div className="show w-50 p-3" onClick={() => setDetail(!detail)}>
                Show Details
              </div>
              <div className="appointment w-50 p-3">Make Appointment</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Therapists;
