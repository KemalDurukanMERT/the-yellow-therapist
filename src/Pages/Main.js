import React from "react";
import SayHi from "../components/MainComp/SayHi";
import "../components/MainComp/Main.css";
import Discounts from "../components/MainComp/Discounts";
import TextArea from "../components/MainComp/TextArea";
import Payment from "../components/MainComp/Payment";
import About from "../components/MainComp/About";


const Main = () => {
  return (
    <div className="Mainside d-flex flex-column justify-content-center align-items-center">
      <Discounts/>
      <SayHi />
      <TextArea/>
      <Payment/>
      <About/>
    </div>
  );
};

export default Main;
