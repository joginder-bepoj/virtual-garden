import React, { useEffect, useState } from 'react'
import './profile.css'
import { UserStore } from '../../../Storage/UserStorage'
import axios from 'axios'
function Profile() {
  const {userLightTheme, userId} = UserStore()
  const [userDetails, setUserDetails] = useState();

  const [formData, setFormData] = useState({
    fullName:"",
    eMail:"",
    phone:"",
    website:"",
    Street:"",
    ciTy:"",
    sTate:"",
    zIp:""
  })

  useEffect(() =>{ 
    
    (async() =>{
      try {
        if(userId){

          const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/user/getone/${userId}`)
          if (res.data) {
            setUserDetails(res.data.user);
          }
        }
      } catch (error) {
        console.log(error)
      }
    })()
    
  },[userId])

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]:e.target.value})
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      const res = await axios.put(`${process.env.REACT_APP_BASE_URL}/api/user/update/${userId}`, {street:formData.Street, city:formData.ciTy, zipcode:formData.zIp, state:formData.sTate})
          if (res.data) {
            setUserDetails(res.data.user);
          }
    } catch (error) {
      
    }
  }

  return (
    <>
      <div className="row gutters ">
        <div className="col-xl-3 mt-4 col-lg-3 col-md-12 col-sm-12 col-12">
          <div className={`${userLightTheme ? 'card-light ': ' card-dark'} h-100 p-3`}>
            <div className="profile-side-container d-flex p-5">
              <img className='profile-side-pic' src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Maxwell Admin"></img>
            </div>
            <h5 className="user-name text-center">{userDetails?.name}</h5>
            <h6 className="user-email text-center">{userDetails?.email}</h6>
            <div className="text-center mt-3">
              <h5 className="mb-2 text-primary heading-profile">About</h5>
              <p>I'm Yuki. Full Stack Designer I enjoy creating user-centric, delightful and human experiences.</p>
            </div>
          </div>
        </div>
        <div className="col-xl-9 mt-4 col-lg-9 col-md-12 col-sm-12 col-12">
          <div className={`${userLightTheme ?' card-light':' card-dark'} h-100 `}>
            <form className=" card-body text-start">
              <div className="row gutters">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <h6 className="my-3 text-primary  heading-profile">Personal Details</h6>
                </div>
                <div className="col-xl-6  col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="fullName" className='my-2'>Full Name</label>
                    <input
                      type="text"
                      className={`${userLightTheme ? "theme-bg-light border" : "theme-bg-dark"} login_input`}
                      id="fullName"
                      value={userDetails?.name}
                      placeholder="Enter full name"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="eMail"  className='my-2'>Email</label>
                    <input
                      type="email"
                      className={`${userLightTheme ? "theme-bg-light border" : "theme-bg-dark"} login_input`}
                      id="eMail"
                      value={userDetails?.email}
                      placeholder="Enter email ID"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="phone" className='my-2 mt-3'>Phone</label>
                    <input
                      type="number"
                     className={`${userLightTheme ? "theme-bg-light border" : "theme-bg-dark"} login_input`}
                      id="phone"
                      value={userDetails?.number}
                      placeholder="Enter phone number"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="website" className='my-2 mt-3'>Website URL</label>
                    <input
                      type="url"
                      className={`${userLightTheme ? "theme-bg-light border" : "theme-bg-dark"} login_input`}
                      id="website"
                      // value={userDetails?.website || ""}
                      placeholder="Website url"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row gutters">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <h6 className=" text-primary  heading-profile mt-4">Address</h6>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="Street" className='my-2 '>Street</label>
                    <input
                      type="name"
                     className={`${userLightTheme ? "theme-bg-light border" : "theme-bg-dark"} login_input`}
                      id="Street"
                      value={userDetails?.street}
                      placeholder="Enter Street"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="ciTy" className='my-2 '>City</label>
                    <input
                      type="name"
                     className={`${userLightTheme ? "theme-bg-light border" : "theme-bg-dark"} login_input`}
                      id="ciTy"
                      value={userDetails?.city}
                      placeholder="Enter City"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="sTate" className='my-2 mt-3'>State</label>
                    <input
                      type="text"
                     className={`${userLightTheme ? "theme-bg-light border" : "theme-bg-dark"} login_input`}
                      id="sTate"
                      value={userDetails?.state}
                      placeholder="Enter State"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="zIp" className='my-2 mt-3'>Zip Code</label>
                    <input
                      type="number"
                      className={`${userLightTheme ? "theme-bg-light border" : "theme-bg-dark"} login_input`}
                      id="zIp"
                      value={userDetails?.zipcode}
                      placeholder="Zip Code"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row gutters">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="d-flex justify-content-end">
                    
                    <button
                      type="button"
                      id="submit"
                      name="submit"
                      className="btn btn-primary m-4 me-0  "
                      onClick={handleSubmit}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>

  )
}

export default Profile