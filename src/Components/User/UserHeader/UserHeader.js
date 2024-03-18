import React from "react";
import { BsJustify } from "react-icons/bs";
import GreLes from "../../../Assets/gre-les.svg";
import { IoNotificationsSharp } from "react-icons/io5";
import { BsFillMoonFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa6";
import { UserStore } from "../../../Storage/UserStorage";
import { Button } from "react-bootstrap";

function UserHeader({
  shortSidebarToggle,
  setShortSidebarToggle,
  OpenSidebar,
}) {
  const { userTheme, setUserTheme, handleLogout } = UserStore();

  return (
    <div
      style={{
        boxShadow: `0 6px 7px -3px rgba(${
          userTheme ? "0, 0, 0, 0.35" : "255, 255, 255, 0.35"
        })`,
      }}
      className={`header  ${userTheme ? "dark-theme" : "light-theme"}'}`}
    >
      <div className="menu-icson">
        {!shortSidebarToggle ? (
          <>
            <div
              className={`  ${
                shortSidebarToggle && "sidebar-title"
              } d-flex justify-content-center  `}
            >
              <div
                className="svg-container cursor-pointer"
                style={{ width: "40px", height: "40px" }}
                onClick={() => setShortSidebarToggle(!shortSidebarToggle)}
              >
                <svg
                  style={{
                    width: 20,
                    height: 20,
                    overflow: "visible",
                    opacity: 1,
                    zIndex: 1,
                    fill: "rgb(255, 255, 255)",
                  }}
                  viewBox="0 0 512 512"
                >
                  <path d="M64 95.1H0c0 123.8 100.3 224 224 224v128C224 465.6 238.4 480 255.1 480S288 465.6 288 448V320C288 196.3 187.7 95.1 64 95.1zM448 32c-84.25 0-157.4 46.5-195.8 115.3c27.75 30.12 48.25 66.88 59 107.5C424 243.1 512 147.9 512 32H448z" />
                </svg>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="d-md-flex justify-content-between align-items-baseline mt-2 d-none  ">
              <p className="sidebar-text mb-1">Virtual Garden</p>
              <img
                className="cursor-pointer ms-4"
                onClick={() => setShortSidebarToggle(!shortSidebarToggle)}
                src={GreLes}
                alt="new"
              />
            </div>
          </>
        )}
      </div>

      <div className="header-left"></div>
      <div className=" header-right d-flex align-items-center gap-3">
        <div
          className="cursor-pointer"
          onClick={() => setUserTheme(prev => !prev)}
        >
          {" "}
          {userTheme ? (
            <FaSun className="icon" />
          ) : (
            <BsFillMoonFill className="icon" />
          )}
        </div>
        <IoNotificationsSharp className="icon" />
        <Button variant="outline-danger" onClick={handleLogout}>
          Logout
        </Button>
        <div
          className="toggle-box  d-lg-none    cursor-pointer"
          onClick={OpenSidebar}
        >
          <BsJustify className=" header-toggle" color="black" size={20} />
        </div>
      </div>
    </div>
  );
}

export default UserHeader;
