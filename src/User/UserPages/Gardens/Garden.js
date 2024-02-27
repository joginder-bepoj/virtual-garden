import React from "react";
import Plants from "../../../Components/Garden/Plants";
import { useLocation } from "react-router-dom";

function Garden({data}) {
  const progress = 25;
  const label = progress < 10 ? 1 : progress < 20 ? 2 : progress < 30 && 3;
  const location = useLocation();
  const path = location.pathname;

  const gardenLength = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];

  return (
    <>
      <div className="app m-0">
        <div className="garden">
          <div className="row row-cols-5">
            {gardenLength.map((elm, ind) => {
              return (
                <div key={ind} className={`col ${path.includes("view") && "col-height"}`}>
                  {progress >= ind && progress < 30 && <Plants data={data} label={label} />}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Garden;
