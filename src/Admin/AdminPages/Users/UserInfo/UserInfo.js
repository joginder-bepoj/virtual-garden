import React, { useEffect, useState } from 'react'
import './userinfo.css'
import { GiAchievement } from 'react-icons/gi'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { UserStore } from '../../../../Storage/UserStorage'

function UserInfo() {
    const { userTheme } = UserStore()
    const params = useParams()

    const [userDetail, setUserDetail] = useState({})

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/user/getone/${params.id}`)
                setUserDetail(res.data)
            } catch (error) {
                return;
            }
        })()
    }, [params.id])

    return (
        <>
            <div className="row m-0">
                <div className="col-12 pt-4  col-md-6 align-items-center">
                    <div className={` mt-2    ${userTheme ? "card-light" : "card-dark"}`}>
                        <div className="row m-0">
                            <div className="col-12 p-2  d-flex justify-content-center col-md-12 align-items-center">
                                <img style={{ borderRadius: "50%" }} height={'100px'} width={'100px'} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />
                            </div>
                            <div className="col-6 p-2 col-md-6 align-self-center">
                                <h6 className='text-center'>Name</h6>
                                <p className='text-center user-info-text'>{userDetail.user?.name}</p>
                                <h6 className='text-center user-info-text'>Email</h6>
                                <p className='text-center'>{userDetail.user?.email}</p>
                                <h6 className='text-center'>Number</h6>
                                <p className='text-center user-info-text'>{userDetail.user?.number}</p>
                            </div>
                            <div className="col-6 p-2 col-md-6 align-self-center">
                                <h6 className='text-center'>ID</h6>
                                <p className='text-center user-info-text'>{userDetail.user?._id}</p>
                                <h6 className='text-center'>Address</h6>
                                <p className='text-center user-info-text'>{userDetail.user?.street ? userDetail.user?.street + " " + userDetail.user?.city + ", " + userDetail.user?.state : "-NA-"} </p>
                                <h6 className='text-center'>Join in</h6>
                                <p className='text-center user-info-text'>{userDetail.user?.createdAt || "-NA-"}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 pt-md-4  col-md-6 align-items-center">
                    <div className={`mt-2 p-2  ${userTheme ? "card-light" : "card-dark"}`}>
                        <h4 className='text-center m-3'>Garden Details</h4>
                        <div className='d-flex justify-content-around'>
                            <div>
                                <p>Garden : {userDetail?.gardenLength} Gardens</p>
                                <p>Plants level : 3<sup>rd</sup></p>
                            </div>
                            <div>
                                <p>Garden Size : 30 sq</p>
                                <p>Plants: 12 plants</p>
                            </div>
                        </div>
                    </div>
                    <div className={`mt-2 p-2  ${userTheme ? "card-light" : "card-dark"}`}>
                        <h4 className='text-center m-3'>Goals </h4>
                        <div className='d-flex justify-content-around'>
                            <div>
                                <p>Goals : {userDetail?.goalsLength} goals</p>
                                <p>Goals completed : 3</p>
                            </div>
                            <div>
                                <p>Last Goal : 12 days ago </p>
                                <p>Goals pending : 3</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className={` px-2 ${userTheme ? "card-light" : "card-dark"}`}>
                        <h4 className='text-center pt-3'>Milestones</h4>
                        <div className='mt-4 mb-2 d-flex justify-content-around'>
                            <div>
                                <p>Milestones label : 3<sup>rd</sup> tier</p>
                                <p>Milestones completed : 3</p>
                            </div>
                            <div>
                                <p>Last Milestone : 12 days ago </p>
                                <p>Medals : 6 medals </p>
                            </div >
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className={` px-2 ${userTheme ? "card-light" : "card-dark"}`}>
                        <h4 className='text-center pt-3'>Achievements</h4>
                        <div className='d-flex pb-1 pb-5 pt-4 justify-content-center gap-3'>
                            <GiAchievement color='gold' size={30} />
                            <GiAchievement color='silver' size={30} />
                            <GiAchievement color='blue' size={30} />
                            <GiAchievement color='green' size={30} />
                            <GiAchievement color='red' size={30} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserInfo