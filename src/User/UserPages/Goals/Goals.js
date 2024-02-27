import React, { useEffect, useState } from 'react'
import './goals.css'
import { IoMdTime } from 'react-icons/io'
import { AiFillStar } from 'react-icons/ai'
import { UserStore } from '../../../Storage/UserStorage'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import axios from 'axios'
import { Modal } from 'react-bootstrap'

function Goals() {
    const { userLightTheme, userId } = UserStore()
    const [goals, setGoals] = useState([])
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        (async () => {
            try {
                if (userId) {
                    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/garden/goals/get/${userId}`)
                    setGoals(res.data)
                }
            } catch (error) {

            }
        })()
    }, [userId])

    const handleCloseModal = () => setShowModal(false)

    const handleModal = async() =>{
        try {
            
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <>
            <div className="row m-0  ">
                <div className={`col-md-6 col-12 ${userLightTheme ? 'milestone-light-bg-1' : 'milestone-dark-bg-1'} pe-3 py-4`}>
                    <img className='garden-milestone' src="https://assets.api.uizard.io/api/cdn/stream/d74fe8af-ad97-41ca-ac83-e3f7b1c1d175.png" alt="" />
                    <h3 className='mt-3'>Building Your Garden</h3>
                    <div className=' d-flex gap-3 my-3 flex-wrap align-items-center'>
                        <div className='milestone-user-pic'>
                            <img className='user-profile' src="https://app.uizard.io/placeholders/avatars/avatar-8.png" alt="" />
                            <span>Garden</span>
                        </div>
                        <div><IoMdTime /> 1h 13m</div>
                        <div ><AiFillStar /> 5.0/5.0</div>
                    </div>
                    <h4>Goal Description</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, officiis velit! Quos harum esse velit qui, corporis vero tempora vel a eius deserunt voluptatibus provident, error omnis illum, iste voluptas!</p>
                </div>

                <div className={`col-md-6 col-12 py-4 px-4 position-relative text-start`}>
                    <div className='d-flex align-items-center justify-content-between'>
                        <h5 className='font-30'>List of goals</h5>
                        <Link to='/user/goal/create-goal' className='text-decoration-none'><div className='startnow-btn '>Create Goals <BsArrowRight className='child' size={25} /></div></Link>
                    </div>
                    <div className='overflow-y-scroll' style={{height: "500px"}}>
                        {
                            goals.length > 0 ? goals.map((item) => (
                                <div className={userLightTheme ? 'acordian-bg-light' : 'acordian-bg-dark'} key={item.id} onClick={()=>handleModal(item.id)} >
                                    <h5 className="m-0 font-32 text-capitalize"> <span className='fw-bold'>Goal Name :</span> {item.name}</h5>
                                    <p className="text-capitalize"> <span className='fw-bold'>Goal Desc:</span> {item.description}</p>
                                    <p className='d-flex justify-content-between'><span>Goal type: {item.goalType}</span> <span>Goal freq: {item.frequency}</span> </p>
                                </div>
                            )) : <div className=' mt-5 text-center'> <h3 className='mt-4'>No Goals found</h3> <h5 className='m-0 font-32 '>Please Create Goals</h5> </div>
                        }
                    </div>
                    <Modal show={showModal} onHide={handleCloseModal} centered >
                        <Modal.Header closeButton>
                        <Modal.Title>View Goal</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                        </Modal.Body>
                    </Modal>

                </div>
            </div>

        </>
    )
}

export default Goals