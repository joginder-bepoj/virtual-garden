import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Garden from "./Garden";
import { FaShareFromSquare } from "react-icons/fa6";
import { toast } from "sonner";
import { UserStore } from "../../../Storage/UserStorage";
import Spinner from "../../../Components/Spinner";

const ViewGarden = () => {
    const {userTheme } =UserStore();
    const params = useParams();
    const [garden, setGarden] = useState(null);
    const [userId, setUserId] = useState(null);
    const [userDetails, setUserDetails] = useState(null);

    const location = useLocation()


    const goalsCount = garden?.squares?.reduce((count, square) => {
        if (square.goal) {
            return count + 1;
        }
        return count;
    }, 0);

    useEffect(() => {
        (async () => {
            const res = await axios.get(
                `${process.env.REACT_APP_BASE_URL}/api/garden/get/${params.id}`
            );
            setGarden(res.data.garden);
            setUserId(res.data.garden.userId);
        })();
    }, [params.id]);

    useEffect(() => {
        if (userId) {
            (async () => {
                const res = await axios.get(
                    `${process.env.REACT_APP_BASE_URL}/api/user/getone/${userId}`
                );
                setUserDetails(res.data.user);
            })();
        }
    }, [userId]);

    const shareGarden = (e) => {
        e.preventDefault();

        const modifiedUrl = window.location.href.replace(
            "/user/view/",
            "/share/garden/"
        );

        const inputElement = document.createElement("input");
        inputElement.value = modifiedUrl;
        document.body.appendChild(inputElement);
        inputElement.select();
        document.execCommand("copy");
        document.body.removeChild(inputElement);

        toast.info("URL copied to clipboard!");
    };

    const allMilestones = [];
    const completedMilestones = []

    garden?.squares?.forEach(square => {
        if (square.goal && square.goal.milestones) {
            allMilestones.push(...square.goal.milestones);
            const squareCompletedMilestones = square.goal.milestones.filter(milestone => milestone.isCompleted);
            completedMilestones.push(...squareCompletedMilestones);
        }
    });


    return (
        <>
            {garden ? (
                <div className={`${userTheme ? "card": "card-dark"} mx-md-5 mt-md-5 mx-3 mt-3 p-3`}>
                    <h3 className="text-center m-3 p-0 fw-bold">Virtual Garden {garden?.name}</h3>
                    <Garden data="54px" garden={garden} />
                    {
                        location.pathname.includes("user/view") && (
                            <div className="mt-2 d-flex align-items-center justify-content-center">
                                <p className="text-start ms-5 m-0">
                                    Share you garden with friends
                                </p>
                                <span className="ms-5" onClick={shareGarden}>
                                    <FaShareFromSquare />
                                </span>
                            </div>
                        )
                    }
                </div>
            ) : (
                <Spinner />
            )}

            {userDetails ? (
                <div className={`${userTheme ? "card": "card-dark"} mx-md-5 mt-md-3 mx-3 mt-2 p-3`}>
                    <div className="row">
                        <h4 className="mb-3 fw-bold">User Detail</h4>
                        <div className="col-md-6">
                            <p className="m-0">
                                User Name: <span className="fw-bold">{userDetails?.name}</span>
                            </p>
                            <p className="m-0">
                                User Verified:{" "}
                                <span className="fw-bold">
                                    {userDetails?.isUserVerified.toString()}
                                </span>
                            </p>
                            <p className="m-0">
                                User City: <span className="fw-bold">{userDetails?.city}</span>
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p className="m-0">Total Goals: <span className="fw-bold">{goalsCount}</span></p>
                            <p className="m-0">Total Milestones: <span className="fw-bold">{allMilestones?.length}</span> </p>
                            <p className="m-0">Completed Milestones: <span className="fw-bold">{completedMilestones.length}</span></p>
                        </div>

                    </div>
                </div>
            ) : (
                <Spinner />
            )}


        </>
    );
};

export default ViewGarden;
