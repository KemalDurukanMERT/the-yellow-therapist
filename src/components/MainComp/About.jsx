import React, { useState } from "react";
import gif from "../../assets/giphy.gif"

const About = () => {
  const [answer1, setAnswer1] = useState(false);
  const [answer2, setAnswer2] = useState(false);
  const [answer3, setAnswer3] = useState(false);
  return (
    <div className="about m-5 p-5">
      <div className="header fs-1 fw-bold text-left">About TYT</div>
      <div className="mt-3">
        The Yellow Therapist is an integrated platform that aspires to uplift
        the existing state of mental health services of Bangladesh. Removing as
        many obstacles as possible between the one who needs help and the one
        who can provide- is what we are striving for. In our platform, the
        therapists and the ones who need the therapy can easily get in touch
        with each other. At the end of the day, it's the connection that will
        bring positive outcomes. We are relentlessly working for a better
        tomorrow where no soul suffers, where every heart is at peace.
      </div>
      <div className="header fs-3 fw-bold text-left mt-5">
        Questions maybe circling in your mind:
      </div>
      <div className="questions mt-3">
        <ul>
          <li onClick={()=> setAnswer1(!answer1)} className="question">
            <u>
              Yellow therapist reminds me of yellow journalists, why yellow?
            </u>
          </li>
          <div className={answer1 ? "explain d-block mb-3" : "explain d-none"}>
            As you could guess, we get that a lot. But we chose yellow because
            yellow is famously the happiest color, yellow is the symbol of
            happiness. So the therapists work here are yellow therapists in the
            best possible way, far from yellow journalists. So, no worries.
            Let's spread happiness.{" "}
          </div>
          <li onClick={()=> setAnswer2(!answer2)} className="question">
            <u>
              This web design makes me sad, why is it so dull? Or, I don't like
              the design. Or, did you not pay your web designer?
            </u>
          </li>
          <div className={answer2 ? "explain d-block mb-3" : "explain d-none"}>
            We are really sorry that you felt that way. But to assure you, this
            is not our final design. We tend to bring the platform to the public
            as fast as possible, so we had no choice but to find perfection in
            the imperfect, just for now. And we are working relentlessly to make
            the platform better and better. Thanks for being with us.
          </div>
          <li onClick={()=> setAnswer3(!answer3)} className="question">
            <u> Wait a minute, who are you people? </u>
          </li>
          <div className={answer3 ? "explain d-block mb-3" : "explain d-none"}><img src={gif} alt="" width={"200px"}></img></div>
        </ul>
      </div>
    </div>
  );
};

export default About;
