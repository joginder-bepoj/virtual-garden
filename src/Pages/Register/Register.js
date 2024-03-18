import React, { useEffect, useState } from "react";
import "./register.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { UserStore } from "../../Storage/UserStorage";
import axios from "axios";
import { toast } from "sonner";
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";

function Register() {
  const location = useLocation();
  const { userTheme, userType } = UserStore();
  const [registerFormStep, setRegisterFormStep] = useState(location?.state?.value || 1);

  

  const initialData = {
    fullName: "",
    email: "",
    dob: "",
    userName: "",
    password: "",
    confirmPassword: "",
    phone: "",
  };

  const navigate = useNavigate();

  const [otp, setOtp] = useState("");
  const [user, setUser] = useState();

  const [formData, setFormData] = useState(initialData);
  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorDob, setErrorDob] = useState(false);
  const [userName, setUserName] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);
  const [errorOtp, setErrorOtp] = useState(false);

  const handleChange = (e) => {
    setFormData((preState) => ({
      ...preState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (registerFormStep === 1) {
      if (formData.fullName === "") {
        setErrorName(true);
      } else if (formData.email === "" && !formData.email.includes("@")) {
        setErrorName(false);
        setErrorEmail(true);
      } else if (formData.dob === "") {
        setErrorName(false);
        setErrorEmail(false);
        setErrorDob(true);
      } else {
        setErrorName(false);
        setErrorEmail(false);
        setErrorDob(false);
        setRegisterFormStep(2);
      }
    } else if (registerFormStep === 2) {
      if (formData.userName === "") {
        setUserName(true);
      } else if (formData.password === "" || formData.password.length < 7) {
        setUserName(false);
        setErrorPassword(true);
      } else if (formData.password !== formData.confirmPassword) {
        setUserName(false);
        setErrorPassword(true);
      } else if (formData.phone === "" || formData.phone < 10) {
        setUserName(false);
        setErrorPassword(false);
        setErrorPhone(true);
      } else {
        setUserName(false);
        setErrorPassword(false);
        setErrorPhone(false);
        try {
          const res = await axios.post(
            `${process.env.REACT_APP_BASE_URL}/api/user/register`,
            {
              email: formData.email,
              name: formData.fullName,
              userName: formData.userName,
              userPassword: formData.password,
              confirmPassword: formData.confirmPassword,
              number: formData.phone,
              dob: formData.dob,
            }
          );
          if (res.data) {
            setUser(res.data.user);
            setRegisterFormStep(3);
          }
        } catch (error) {
          ;
        }
      }
    } else if (registerFormStep === 3) {
      setRegisterFormStep(4);
    } else {
      if (otp === "" || otp.length < 6) {
        setErrorOtp(true);
      } else {
        setErrorOtp(false);
        try {
          const res = await axios.post(
            `${process.env.REACT_APP_BASE_URL}/api/user/verify`,
            { email:  location?.state?.email || formData.email, otp: otp }
          );
          if (res.data) {
            toast.success("user verfied successfully. Now plaese login");
            navigate("/login");
          }
        } catch (error) {
          ;
        }
      }
    }
  };

  useEffect(() => {
    if (userType) userType === "user" ? navigate("/user") : navigate("/admin");
  }, [navigate, userType]);

  return (
    <div className="login-main">
      <Navbar />
      <div className="login-container">
        <div
          className={`${
            userTheme ? "theme-bg-light" : "theme-bg-dark"
          } login-box`}
        >
          <div className=" login_form d-flex justify-content-between gap-2 m-4 align-items-center">
            <div
              className={
                userTheme ? "steper-active-light" : "steper-active-dark"
              }
            ></div>
            <div
              className={`${
                registerFormStep >= 2
                  ? userTheme
                    ? "steper-active-light"
                    : "steper-active-dark"
                  : userTheme
                  ? "steper-light"
                  : "steper-dark"
              }`}
            ></div>
            <div
              className={`${
                registerFormStep >= 3
                  ? userTheme
                    ? "steper-active-light"
                    : "steper-active-dark"
                  : userTheme
                  ? "steper-light"
                  : "steper-dark"
              }`}
            ></div>
          </div>
          <div className="d-flex justify-content-center position-relative">
            {((registerFormStep > 1 && registerFormStep < 3) || registerFormStep === 4) && (
              <IoIosArrowRoundBack
                size={35}
                className="position-absolute start-0 ms-3 cursor-pointer"
                onClick={() => setRegisterFormStep(registerFormStep - 1)}
              />
            )}
            <h3 className="text-center">Register new user</h3>
          </div>
          <div className="d-flex justify-content-center align-items-center p-3">
            <div className="svg-container">
              <svg
                style={{
                  width: 30,
                  height: 30,
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
          <div className="text-center">
            {registerFormStep === 3 &&  (
                <div className="text-muted">
                    <h4>Download Google Authenticator</h4>
                    <p style={{ fontSize: "0.9rem" }}>
                    Google Authenticator is available <br /> Google Play{" "}
                    <FaGooglePlay /> and App Store <FaAppStoreIos />
                    </p>
              </div>
            )}
             {registerFormStep === 4 && (
              <>
                <h4>Open Google Authenticator</h4>
                <p>Please enter your six digit code</p>
              </>
            )}
          </div>

          <form className="login_form" onSubmit={handleRegister}>
            {registerFormStep === 1 && (
              <>
                <label className="my-1 mt-3">Full Name</label>
                <div className="login_input_container">
                  {errorName && (
                    <p style={{ color: "red", fontSize: "12px", margin: 0 }}>
                      *Please Enter Your Name
                    </p>
                  )}
                  <input
                    name="fullName"
                    onChange={handleChange}
                    className={`${
                      userTheme ? "theme-bg-light border" : "theme-bg-dark"
                    } ${errorName && "error-border"} login_input`}
                    type="text"
                    autoComplete="off"
                  />
                </div>
                <label className="my-1 mt-3">Email</label>
                <div className="login_input_container">
                  {errorEmail && (
                    <p style={{ color: "red", fontSize: "12px", margin: 0 }}>
                      *Please Entry Your Email.
                    </p>
                  )}
                  <input
                    name="email"
                    onChange={handleChange}
                    className={`${
                      userTheme ? "theme-bg-light border" : "theme-bg-dark"
                    } ${errorEmail && "error-border"} login_input`}
                    type="email"
                  />
                </div>
                <label className="my-1 mt-3">DOB</label>
                <div className="login_input_container">
                  {errorDob && (
                    <p style={{ color: "red", fontSize: "12px", margin: 0 }}>
                      *Please Entry Your DOB.
                    </p>
                  )}
                  <input
                    name="dob"
                    onChange={handleChange}
                    className={`${
                      userTheme ? "theme-bg-light border" : "theme-bg-dark"
                    } ${errorDob && "error-border"} login_input`}
                    type="date"
                  />
                </div>
              </>
            )}
            {registerFormStep === 2 && (
              <>
                <label className="my-1 mt-3">User Name</label>
                <div className="login_input_container">
                  {userName && (
                    <p style={{ color: "red", fontSize: "12px", margin: 0 }}>
                      *Please Entry Your UserName
                    </p>
                  )}
                  <input
                    name="userName"
                    onChange={handleChange}
                    className={`${
                      userTheme ? "theme-bg-light border" : "theme-bg-dark"
                    } ${userName && "error-border"} login_input`}
                    type="text"
                  />
                </div>
                <label className="my-1 mt-3">Password</label>
                <div className="login_input_container">
                  {errorPassword && (
                    <p style={{ color: "red", fontSize: "12px", margin: 0 }}>
                      *Please Enter Password
                    </p>
                  )}
                  <input
                    name="password"
                    onChange={handleChange}
                    className={`${
                      userTheme ? "theme-bg-light border" : "theme-bg-dark"
                    } ${errorPassword && "error-border"} login_input`}
                    type="password"
                  />
                </div>
                <label className="my-1 mt-3">Confirm Password</label>
                <div className="login_input_container">
                  <input
                    name="confirmPassword"
                    onChange={handleChange}
                    className={`${
                      userTheme ? "theme-bg-light border" : "theme-bg-dark"
                    } ${
                      formData.password !== formData.confirmPassword &&
                      "error-border"
                    } login_input`}
                    type="password"
                  />
                </div>
                
                <label className="my-1 mt-3">Phone</label>
                <div className="login_input_container">
                  {errorPhone && (
                    <p style={{ color: "red", fontSize: "12px", margin: 0 }}>
                      *Invaild phone number
                    </p>
                  )}
                  <input
                    name="phone"
                    onChange={handleChange}
                    className={`${
                      userTheme ? "theme-bg-light border" : "theme-bg-dark"
                    } ${errorPhone && "error-border"} login_input`}
                    type="number"
                  />
                </div>
              </>
            )}
            {registerFormStep === 3 && (
              <>
                <div className="text-center text-muted">
                  <h5>Scan QRCode in Authenticator App</h5>
                </div>
                <div className="d-flex justify-content-center">
                  <img src={location?.state?.qrcode || user?.qrcode} alt="qrCode" />
                </div>
              </>
            )}

            {registerFormStep === 4 && (
              <>
                <div className="login_input_container">
                  <input
                    name="otp"
                    onChange={(e) => setOtp(e.target.value)}
                    className={`${
                      userTheme ? "theme-bg-light border" : "theme-bg-dark"
                    } ${errorOtp && "error-border"} login_input`}
                    type="text"
                  />
                </div>

                {errorOtp && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    *Invaild Code
                  </p>
                )}
              </>
            )}

            {registerFormStep === 5 && (
              <>
                <div className="done">
                  <h1>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512"
                    >
                      {" "}
                      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z " />
                    </svg>{" "}
                    Done
                  </h1>
                </div>
              </>
            )}
            {registerFormStep < 2 && (
              <p className="login_registerLink text-center pt-2" style={{fontSize:'14px'}}>
                {" "}
                Already have account ?<Link to={"/login"}> Login now</Link>
              </p>
            )}
            <div className="text-center mt-3 mb-4">
              <button type="sumbit" className="register-btn ">
                {registerFormStep >= 4 ? "Verify" : "Next"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
