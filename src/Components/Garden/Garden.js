import React, { useState } from 'react';
import Plant1 from '../../Assets/garden-plant-1.png';
import Plant2 from '../../Assets/garden-plant-2.png';
import Plant3 from '../../Assets/garden-plant-3.png';
import './garden.css';

const Garden = () => {
  const [plantSwing, setPlantSwing] = useState(false)

  setTimeout(() => {
    setPlantSwing(true)
  }, 3000);
  return (
    <div className="garden" style={{height: "490px", width: "100%"}}>
      <div className="row">
        <div className="col d-flex justify-content-center align-items-center" style={{height: "80px"}}><img src={Plant1} className={`${plantSwing && 'plant-swing'} plantHome-1`} alt="plant-pic" style={{height: "70px"}} /> </div>
        <div className="col d-flex justify-content-center align-items-center" style={{height: "80px"}}><img src={Plant1} className={`${plantSwing && 'plant-swing'} plantHome-1`} alt="plant-pic" style={{height: "70px"}} />
          <img src={Plant1} className={`${plantSwing && 'plant-swing'} plantHome-1`} alt="plant-pic" style={{height: "70px"}} /> </div>
        <div className="col d-flex justify-content-center align-items-center" style={{height: "80px"}}></div>
        <div className="col d-flex justify-content-center align-items-center" style={{height: "80px"}}></div>
      </div>
      <div className="row">
        <div className="col d-flex justify-content-center align-items-center" style={{height: "80px"}}><img src={Plant3} className={`${plantSwing && 'plant-swing'} plantHome-1`} alt="plant-pic" style={{height: "70px"}} /> </div>
        <div className="col d-flex justify-content-center align-items-center" style={{height: "80px"}}></div>
        <div className="col d-flex justify-content-center align-items-center" style={{height: "80px"}}></div>
        <div className="col d-flex justify-content-center align-items-center" style={{height: "80px"}}><img src={Plant3} className={`${plantSwing && 'plant-swing'} plantHome-1`} alt="plant-pic" style={{height: "70px"}} /> </div>
      </div>
      <div className="row">
        <div className="col d-flex justify-content-center align-items-center" style={{height: "80px"}}></div>
        <div className="col d-flex justify-content-center align-items-center" style={{height: "80px"}}><img src={Plant2} className={`${plantSwing && 'plant-swing'} plantHome-1`} alt="plant-pic" style={{height: "70px"}} /> </div>
        <div className="col d-flex justify-content-center align-items-center" style={{height: "80px"}}></div>
        <div className="col d-flex justify-content-center align-items-center" style={{height: "80px"}}></div>
      </div>
      <div className="row">
        <div className="col d-flex justify-content-center align-items-center" style={{height: "80px"}}><img src={Plant1} className={`${plantSwing && 'plant-swing'} plantHome-1`} alt="plant-pic" style={{height: "70px"}} /> </div>
        <div className="col d-flex justify-content-center align-items-center" style={{height: "80px"}}></div>
        <div className="col d-flex justify-content-center align-items-center" style={{height: "80px"}}></div>
        <div className="col d-flex justify-content-center align-items-center" style={{height: "80px"}}></div>
      </div>
      <div className="row">
        <div className="col d-flex justify-content-center align-items-center" style={{height: "80px"}}></div>
        <div className="col d-flex justify-content-center align-items-center" style={{height: "80px"}}><img src={Plant3} className={`${plantSwing && 'plant-swing'} plantHome-1`} alt="plant-pic" style={{height: "70px"}} /> </div>
        <div className="col d-flex justify-content-center align-items-center" style={{height: "80px"}}></div>
        <div className="col d-flex justify-content-center align-items-center" style={{height: "80px"}}><img src={Plant3} className={`${plantSwing && 'plant-swing'} plantHome-1`} alt="plant-pic" style={{height: "70px"}} /><img src={Plant3} className={`${plantSwing && 'plant-swing'} plantHome-1`} alt="plant-pic" style={{height: "70px"}} /> </div>
      </div>
      <div className="row">
        <div className="col d-flex justify-content-center align-items-center" style={{height: "80px"}}></div>
        <div className="col d-flex justify-content-center align-items-center" style={{height: "80px"}}><img src={Plant2} className={`${plantSwing && 'plant-swing'} plantHome-1`} alt="plant-pic" style={{height: "70px"}} /> </div>
        <div className="col d-flex justify-content-center align-items-center" style={{height: "80px"}}><img src={Plant2} className={`${plantSwing && 'plant-swing'} plantHome-1`} alt="plant-pic" style={{height: "70px"}} /> </div>
        <div className="col d-flex justify-content-center align-items-center" style={{height: "80px"}}></div>
      </div>
    </div>
  );
};

export default Garden;
