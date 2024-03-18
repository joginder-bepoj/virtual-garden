import React from 'react'
import './viewFeedback.css'
import { BsFillSendFill } from 'react-icons/bs'
import { UserStore } from '../../../../Storage/UserStorage'
function ViewFeedback() {
    const {userTheme} = UserStore()
    return (
        <div>
            <div className="row">
                <div className="col-12 col-md-6 mt-4">
                    <div className={`${userTheme ? "card-light" : "card-dark"} p-2 pt-3`}>
                        <img className="user-profile" src="https://app.uizard.io/placeholders/avatars/avatar-9.png" alt="profile" /> Ryan Smith
                        <h5 className='mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat atque, voluptatem provident tempore repudiandae doloremque porro nostrum optio dolorum laudantium voluptatum, placeat vero, doloribus autem. Enim obcaecati alias dolorem molestias!</p>
                    </div>
                </div>
                <div className="col-12 col-md-6 mt-4">
                    <div className={`${userTheme ? "card-light" : "card-dark"}  chat-box-container `}>
                        <div className='chat-box'>
                            <div className="chat-head">
                                <h4 className='text-center'>Chat With Ryan Smith</h4>
                            </div>
                            <div className="message-box p-2">


                                <div className=" d-flex justify-content-start  gap-3  align-items-top">
                                    <img className="user-profile" src="https://app.uizard.io/placeholders/avatars/avatar-9.png" alt="profile" />
                                    <div>
                                        <div className=' w-75  d-flex gap-5'> <p className="m-0">Ryan Smith</p><p className="m-0">22/02/2023</p></div>
                                        <div className=' w-75 user-msg mt-2 p-3 '>
                                            Jam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
                                        </div>
                                    </div>

                                </div>

                                <div className=" d-flex justify-content-end flex-column  align-items-end">
                                    <div className=' w-75 admin-msg mt-2 p-3 me-3'>
                                        Jam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
                                    </div>
                                    22/02/2023
                                </div>

                                <div className=" d-flex justify-content-start  gap-3  align-items-top">
                                    <img className="user-profile" src="https://app.uizard.io/placeholders/avatars/avatar-9.png" alt="profile" />
                                    <div>
                                        <div className=' w-75  d-flex gap-5'> <p className="m-0">Ryan Smith</p><p className="m-0">22/02/2023</p></div>
                                        <div className=' w-75 user-msg mt-2 p-3 '>
                                            Jam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
                                        </div>
                                    </div>

                                </div>

                                <div className=" d-flex justify-content-end flex-column  align-items-end">
                                    <div className=' w-75 admin-msg mt-2 p-3 me-3'>
                                        Jam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
                                    </div>
                                    22/02/2023
                                </div>
                                
                                <div className=" d-flex justify-content-start  gap-3  align-items-top">
                                    <img className="user-profile" src="https://app.uizard.io/placeholders/avatars/avatar-9.png" alt="profile" />
                                    <div>
                                        <div className=' w-75  d-flex gap-5'> <p className="m-0">Ryan Smith</p><p className="m-0">22/02/2023</p></div>
                                        <div className=' w-75 user-msg mt-2 p-3 '>
                                            Jam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
                                        </div>
                                    </div>

                                </div>

                                <div className=" d-flex justify-content-end flex-column  align-items-end">
                                    <div className=' w-75 admin-msg mt-2 p-3 me-3'>
                                        Jam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
                                    </div>
                                    22/02/2023
                                </div>

                                <div className=" d-flex justify-content-start  gap-3  align-items-top">
                                    <img className="user-profile" src="https://app.uizard.io/placeholders/avatars/avatar-9.png" alt="profile" />
                                    <div>
                                        <div className=' w-75  d-flex gap-5'> <p className="m-0">Ryan Smith</p><p className="m-0">22/02/2023</p></div>
                                        <div className=' w-75 user-msg mt-2 p-3 '>
                                            Jam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
                                        </div>
                                    </div>

                                </div>

                                <div className=" d-flex justify-content-end flex-column  align-items-end">
                                    <div className=' w-75 admin-msg mt-2 p-3 me-3'>
                                        Jam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
                                    </div>
                                    22/02/2023
                                </div>
                                
                                <div className=" d-flex justify-content-start  gap-3  align-items-top">
                                    <img className="user-profile" src="https://app.uizard.io/placeholders/avatars/avatar-9.png" alt="profile" />
                                    <div>
                                        <div className=' w-75  d-flex gap-5'> <p className="m-0">Ryan Smith</p><p className="m-0">22/02/2023</p></div>
                                        <div className=' w-75 user-msg mt-2 p-3 '>
                                            Jam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
                                        </div>
                                    </div>

                                </div>

                                <div className=" d-flex justify-content-end flex-column  align-items-end">
                                    <div className=' w-75 admin-msg mt-2 p-3 me-3'>
                                        Jam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
                                    </div>
                                    22/02/2023
                                </div>

                                <div className=" d-flex justify-content-start  gap-3  align-items-top">
                                    <img className="user-profile" src="https://app.uizard.io/placeholders/avatars/avatar-9.png" alt="profile" />
                                    <div>
                                        <div className=' w-75  d-flex gap-5'> <p className="m-0">Ryan Smith</p><p className="m-0">22/02/2023</p></div>
                                        <div className=' w-75 user-msg mt-2 p-3 '>
                                            Jam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
                                        </div>
                                    </div>

                                </div>

                                <div className=" d-flex justify-content-end flex-column  align-items-end">
                                    <div className=' w-75 admin-msg mt-2 p-3 me-3'>
                                        Jam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
                                    </div>
                                    22/02/2023
                                </div>
                                

                            </div>
                            <div className='chat-bottom'>
                                <input className='chat-input ps-3' placeholder='Type your message ' type="text" />
                                <button className='chat-send-btn'><BsFillSendFill className='send-icon' /></button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewFeedback