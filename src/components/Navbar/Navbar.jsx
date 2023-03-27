import React, { useState } from "react";
import logo from "../../assets/logo.png";
import Timer from "./Timer";
import "./Navbar.css";
import { BiTask } from "react-icons/bi";
import { BsFillPeopleFill, BsFillFileTextFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown, IoIosArrowUp, IoMdPerson } from "react-icons/io";
import { MdContactSupport } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { SiSpringsecurity } from "react-icons/si";
import { AiOutlinePoweroff } from "react-icons/ai";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="navbar-side d-flex flex-column align-items-center">
      <div className="upper-side p-3 d-flex justify-content-between align-items-center shadow">
        <img src={logo} alt="" width={"170px"} />
        <div className="date-area text-center">
          <Timer />
        </div>
      </div>
      <IconContext.Provider value={{ color: "#ffd050" }}>
        <div className="bottom-side text-warning">
          <div className="bottom-container">
            <div className="bottom-short d-flex justify-content-center text-center">
              <div>
                <Link as className="x nav1" to={"therapists"}>
                  <span>
                    <BsFillPeopleFill />
                  </span>
                  Therapist
                </Link>
              </div>
              <div className="x nav2">
                <span>
                  <BiTask />
                </span>
                Appointments
              </div>
              <div className="x nav3">
                <span>
                  <CgProfile />
                </span>
                Profile
              </div>
              <div className="x nav4" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? (
                  <span>
                    <IoIosArrowDown />
                  </span>
                ) : (
                  <span>
                    <IoIosArrowUp />
                  </span>
                )}
                {menuOpen ? "Hide Menu" : "Full Menu"}
              </div>
            </div>
            <div
              className={
                menuOpen
                  ? "bottom-full d-flex justify-content-start text-center flex-wrap"
                  : "d-none"
              }
            >
              <div className="x nav5">
                <span>
                  <IoMdPerson />
                </span>
                About TYT
              </div>
              <div className="x nav6">
                <span>
                  <MdContactSupport />
                </span>
                Contact
              </div>
              <div className="x nav7">
                <span>
                  <FaGraduationCap />
                </span>
                TYTFS
              </div>
              <div className="x nav8">
                <span>
                  <BsFillFileTextFill />
                </span>
                Terms and Conditions
              </div>
              <div className="x nav9">
                <span>
                  <SiSpringsecurity />
                </span>
                Privacy Policy
              </div>
              <div className="x nav10">
                <span>
                  <AiOutlinePoweroff />
                </span>
                Logout
              </div>
            </div>
          </div>
        </div>
      </IconContext.Provider>
      <div className="floater d-flex flex-column gap-3">
        <a
          href="https://theyellowtherapist.com/rumuna"
          className="rumuna  rounded-pill shadow"
        >
          RUMUNA
        </a>
        <a
          href="https://vent.theyellowtherapist.com/"
          className="rumuna rounded-pill shadow"
        >
          TYT Vent
        </a>
      </div>
    </div>
  );
};

export default Navbar;
