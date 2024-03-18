import React from "react";
import Plants from "../../../Components/Garden/Plants";
import { useLocation } from "react-router-dom";

function Garden({data, garden}) {
  const location = useLocation();
  const path = location.pathname.includes("view");


  return (
    <>
      <div className="app m-0">
        <div className="garden">
          <div className="row row-cols-5">
            {garden?.squares?.map((elm, ind) => {
              return (
                <div key={ind}style={{height:"50px"}} className={`col ${path && "col-height"}`}>
                  { elm?.goal && <Plants data={data} goal={elm.goal} />}
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
