/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Plant1 from '../../Assets/What-Are-Plants.jpg'
import Plant2 from '../../Assets/plants-1.png'
import Plant3 from '../../Assets/plants-2.png'
import Plant4 from '../../Assets/plants-3.png'
import Plant5  from '../../Assets/plants-4.png'
import Plant6 from '../../Assets/plants-5.png'
import './secondsection.css'
function SecondSection({userLightTheme}) {
    return (
        <section className={`${!userLightTheme && 'theme-bg-dark'} py-5 plant`}>
        <div className="container">
          <h2 className="about-heading fw700 text-center mb-0">
            Plants tree virtually by{" "}
            <span className="text-color">achieving goals </span>{" "}
          </h2>
          <p className="font20 fw400 about-paragrap py-3 text-center">
            Lorem ipsum dolor sit amet consecteturadipisicing elit. Illum enim minus a
            in explicabo beatae
          </p>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div  className={ ` ${userLightTheme ? 'card' : ' card-dark cardhome' } overflow-hidden   rounded-3 p-3`}>
                <a  href="#" className="zoom-img">
                  <img
                    src={Plant1}
                    alt="img-6"
                    className="w-100 rounded-3"
                  />
                </a>
                <h3 className="text-center plants-name text-color font24  fw700 pt-4">
                  Plant Name
                </h3>
                <p className="text-center font18  fw400 parahgrah-color">
                  Lorem ipsum dolor sit amet consecteturadipisicing elit. Illum enim
                  minus a in explicabo beatae, consectetur iusto aut?
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
            <div className={ `overflow-hidden ${userLightTheme ? 'card' : ' card-dark cardhome' }   rounded-3 p-3`}>
                <a  className="zoom-img">
                  <img
                    src={Plant2}
                    alt="img-6"
                    className="w-100 rounded-3"
                  />
                </a>
                <h3 className="text-center plants-name text-color font24  fw700 pt-4">
                  Plant Name
                </h3>
                <p className="text-center font18  fw400 parahgrah-color">
                  Lorem ipsum dolor sit amet consecteturadipisicing elit. Illum enim
                  minus a in explicabo beatae, consectetur iusto aut?
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
            <div className={ `overflow-hidden ${userLightTheme ? 'card' : ' card-dark cardhome' }   rounded-3 p-3`}>
                <a href="shop.html" className="zoom-img">
                  <img
                     src={Plant3}
                    alt="img-6"
                    className="w-100 rounded-3"
                  />
                </a>
                <h3 className="text-center plants-name text-color font24  fw700 pt-4">
                  Plant Name
                </h3>
                <p className="text-center font18  fw400 parahgrah-color">
                  Lorem ipsum dolor sit amet consecteturadipisicing elit. Illum enim
                  minus a in explicabo beatae, consectetur iusto aut?
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
            <div className={ `overflow-hidden ${userLightTheme ? 'card' : ' card-dark cardhome' }   rounded-3 p-3`}>
                <a href="shop.html" className="zoom-img">
                  <img
                    src={Plant4}
                    alt="img-6"
                    className="w-100 rounded-3"
                  />
                </a>
                <h3 className="text-center plants-name text-color font24  fw700 pt-4">
                  Plant Name
                </h3>
                <p className="text-center font18  fw400 parahgrah-color">
                  Lorem ipsum dolor sit amet consecteturadipisicing elit. Illum enim
                  minus a in explicabo beatae, consectetur iusto aut?
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
            <div className={ `overflow-hidden ${userLightTheme ? 'card' : ' card-dark cardhome' }   rounded-3 p-3`}>
                <a href="shop.html" className="zoom-img">
                  <img
                     src={Plant5}
                    alt="img-6"
                    className="w-100 rounded-3"
                  />
                </a>
                <h3 className="text-center plants-name text-color font24  fw700 pt-4">
                  Plant Name
                </h3>
                <p className="text-center font18  fw400 parahgrah-color">
                  Lorem ipsum dolor sit amet consecteturadipisicing elit. Illum enim
                  minus a in explicabo beatae, consectetur iusto aut?
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
            <div className={ `overflow-hidden ${userLightTheme ? 'card' : ' card-dark cardhome' }   rounded-3 p-3`}>
                <a href="shop.html" className="zoom-img">
                  <img
                     src={Plant6}
                    alt="img-6"
                    className="w-100 rounded-3"
                  />
                </a>
                <h3 className="text-center plants-name text-color font24  fw700 pt-4">
                  Plant Name
                </h3>
                <p className="text-center font18  fw400 parahgrah-color">
                  Lorem ipsum dolor sit amet consecteturadipisicing elit. Illum enim
                  minus a in explicabo beatae, consectetur iusto aut?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default SecondSection