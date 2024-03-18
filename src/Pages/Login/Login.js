import React, { useEffect, useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { UserStore } from "../../Storage/UserStorage";
import axios from "axios"
import { toast } from "sonner";
import Spinner from "../../Components/Spinner";

function Login() {
    const { userTheme, userType } = UserStore();
    const initialData = {
        email: false,
        password: false,
    };
    const navigate = useNavigate();

    const [formData, setFormData] = useState(initialData);
    const [userEmail_phone, setUserEmail_Phone] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [otp, setOtp] = useState()
    const [loginDone, setLoginDone] = useState(null)

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            if (
                userEmail_phone === "" &&
                userEmail_phone.length < 5 &&
                !userEmail_phone.includes("@")
            ) {
                setIsLoading(false);
                return setFormData({ ...formData, email: true });
            } else if (password === "" || password.length < 6) {
                setIsLoading(false);
                return setFormData({
                    ...formData,
                    password: true,
                    email: false,
                });
            } else {
                setFormData({ ...formData, password: false, email: false });

                const res = await axios.post(
                    `${process.env.REACT_APP_BASE_URL}/api/user/login`,
                    { email: userEmail_phone, userPassword: password }
                );
                setIsLoading(false);
                if (res.data.status) {
                    setLoginDone(true)
                } else {
                    setIsLoading(false);
                    toast.error("Please check Email and Password are correct");
                }
            }
        } catch (error) {
            setIsLoading(false);
            if(error.response.data.otp && error.response.status === 401){
                navigate("/register", { state:  {value: 3, qrcode: error.response.data.qrcode, email: userEmail_phone}})
            }else{
                toast.error("Please check Email and Password are correct");
            }
        }
    };


    const handleVerify = async (e) => {
        e.preventDefault();
        setIsLoading(true)

        try {
            if(otp.length < 6 || otp === ""){
                setIsLoading(false)
               return toast.error("Please enter valid token")
            }else{
                const res = await axios.post(
                    `${process.env.REACT_APP_BASE_URL}/api/user/verifylogin`,
                    { email: userEmail_phone, otp: otp }
                ); 
                if (res.data){
                    setIsLoading(false)
                    res.data?.userType === "user"
                        ? navigate("/user")
                        : navigate("/admin");
                    localStorage.setItem("userID", JSON.stringify(res.data?._id));
                    localStorage.setItem(
                        "userType",
                        JSON.stringify(res.data?.userType)
                    );
                }
            }
        } catch (error) {
            toast.error("Please enter valid token"); 
            setIsLoading(false)
        }
    };

    useEffect(() => {
        if (userType) userType === "user" ? navigate("/user") : navigate("/admin");
    }, [navigate, userType]);

    return (
        <>
            <div className="login-main">
                <Navbar />
                <div className="login-container">
                    <div
                        className={`${userTheme ? "theme-bg-light" : "theme-bg-dark"
                            } login-box`}
                    >
                        <h3 className="text-center m-2 mt-5">Login</h3>
                        <div className="d-flex justify-content-center m-3 align-items-center">
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
                        {isLoading && (
                            <Spinner />
                        )}
                        {loginDone ? (<form className="d-flex flex-column justify-content-center align-items-center ">
                            <h5>Enter your 2FA code</h5>
                            <p className="text-center text-muted" style={{ fontSize: '14px' }}>Please enter two factor token <br /> from  Google Authanticator to verify token</p>

                            <label className="my-2 ms-4 align-self-baseline">Email / Phone</label>
                            <input
                                style={{ width: '90%' }}
                                className={` ${userTheme ? "theme-bg-light border" : "theme-bg-dark"
                                    } login_input ${formData.email && "error-border"} `}
                                name="email"
                                value={userEmail_phone}
                                type="email"
                                disabled
                            />

                            <label className="my-2 ms-4 align-self-baseline">Token</label>
                            <input
                                style={{ width: '90%' }}
                                maxLength={6}
                                name="otp"
                                onChange={(e) => setOtp(e.target.value)}
                                className={`${userTheme ? "theme-bg-light border" : "theme-bg-dark"
                                    }  login_input`}
                                type="text"
                            />

                            <div className="text-center mt-4 mb-5">
                                <button
                                    onClick={handleVerify}
                                    className={`register-btn ${!userTheme ? "theme-bg-light border" : "theme-bg-dark"
                                        }`}
                                >
                                    Verify
                                </button>
                            </div>

                        </form>) :
                            (<form className="login_form" onSubmit={handleLogin}>
                                <label className="my-2">Email / Phone</label>
                                <input
                                    className={` ${userTheme ? "theme-bg-light border" : "theme-bg-dark"
                                        } login_input ${formData.email && "error-border"} `}
                                    name="email"
                                    onChange={(e) => setUserEmail_Phone(e.target.value)}
                                    type="email"
                                />
                                {formData.email && (
                                    <p style={{ color: "red" }}>Please enter valid Email&Phone</p>
                                )}
                                <label className="my-1 mt-3">Password</label>
                                <input
                                    className={`${userTheme ? "theme-bg-light border" : "theme-bg-dark"
                                        } ${formData.password && "error-border"} login_input`}
                                    name="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                />
                                {formData.password && (
                                    <p style={{ color: "red" }}>Please enter correct password</p>
                                )}
                                <p className="login_registerLink pt-2 pb-2 text-center" style={{fontSize:'14px'}}>
                                    Don't have account?<Link to={"/register"}> Register now</Link>
                                </p>
                                <div className="text-center mt-4 mb-5">
                                    <button
                                        className={`register-btn ${!userTheme ? "theme-bg-light border" : "theme-bg-dark"
                                            }`}
                                    >
                                        Login
                                    </button>
                                </div>
                            </form>)
                        }

                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
