import React from "react";
import "./hero.css";
import Garden from "../Garden/Garden";
import { NavLink} from "react-router-dom";

function Hero({ userTheme }) {

  return (
    <section
      className={`${
        !userTheme && "theme-bg-dark"
      } banner-sec position-relative`}
    >
      <div className="container">
        <div className="row py-5">
          <div className="col-md-7 align-self-center">
            <div className="right-box">
              <h1 className="banner-heading-1 fw700">
                Create your virtual garden
              </h1>
              <p className="font20 fw400 banner-heading-2 py-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem
                ipsum dolor sit amet,
              </p>
              <div className="d-inline-block">
                <NavLink to="/login">
                  <button className="font20 create-garden me-2 px-2 px-md-4 p-2 border-0 text-white">
                    Create Garden
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <Garden />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
