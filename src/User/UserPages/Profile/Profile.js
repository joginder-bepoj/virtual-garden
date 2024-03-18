import React from 'react'
import './profile.css'
import { UserStore } from '../../../Storage/UserStorage'
import axios from 'axios'

function Profile() {
  const { userTheme, userId, userDetails, profileFormData, setProfileFormData, setProfileUpdated } = UserStore()

  const handleChange = (e) => {
    setProfileFormData({ ...profileFormData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.put(`${process.env.REACT_APP_BASE_URL}/api/user/update/${userId}`, { street: profileFormData.street, city: profileFormData.city, zipcode: profileFormData.zip, state: profileFormData.state,})
      if (res.data) {
        setProfileUpdated(prev => !prev)
      }
    } catch (error) {

    }
  }


  return (
    <>
      <div className="row gutters ">
        <div className="col-xl-3 mt-4 col-lg-3 col-md-12 col-sm-12 col-12">
          <div className={`${userTheme ? 'card-light ' : ' card-dark'} h-100 p-3`}>
            <div className="profile-side-container d-flex p-5 flex-column gap-2">
              <img className='profile-side-pic' src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Maxwell Admin"></img>
              {userDetails?.userName}
            </div>
            <h5 className="user-name text-center">{userDetails?.name}</h5>
            <h6 className='text-center'>{new Date(userDetails?.dob).toLocaleDateString() || ""}</h6>
            {/* <h6 className="text-center"><a href={userDetails?.website} target='_blank' rel='noreferrer'>{userDetails?.website}</a></h6> */}
            <h6 className="user-email text-center">{userDetails?.email}</h6>
            <h6 className="text-center">{userDetails?.number}</h6>
            <div className="text-center mt-3">
              <h5 className="mb-2 text-primary heading-profile">Address</h5>
              <div>
                <p className='mb-0'>{userDetails?.street} {userDetails?.city}</p>
                <p>{userDetails?.state} {userDetails?.zipcode}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-9 mt-4 col-lg-9 col-md-12 col-sm-12 col-12">
          <div className={`${userTheme ? 'card-light' : ' card-dark'} h-100 `}>
            <form className=" card-body text-start">
              <div className="row gutters">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <h6 className="my-3 text-primary heading-profile">Personal Details</h6>
                </div>
                <div className="col-xl-6  col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="fullName" className='my-2'>Full Name</label>
                    <input
                      type="text"
                      className={`${userTheme ? "theme-bg-light border" : "theme-bg-dark"} login_input`}
                      id="fullName"
                      value={profileFormData?.fullName}
                      placeholder="Enter full name"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="email" className='my-2'>Email</label>
                    <input
                      type="email"
                      className={`${userTheme ? "theme-bg-light border" : "theme-bg-dark"} login_input`}
                      id="email"
                      value={profileFormData?.email}
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
                      className={`${userTheme ? "theme-bg-light border" : "theme-bg-dark"} login_input`}
                      id="phone"
                      value={profileFormData?.phone}
                      placeholder="Enter phone number"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="website" className='my-2 mt-3'>Website URL</label>
                    <input
                      type="website"
                      className={`${userTheme ? "theme-bg-light border" : "theme-bg-dark"} login_input`}
                      id="website"
                      value={profileFormData?.website}
                      placeholder="Website url"
                      onChange={handleChange}
                    />
                  </div>
                </div> */}
              </div>
              <div className="row gutters">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <h6 className=" text-primary  heading-profile mt-4">Address</h6>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="street" className='my-2 '>Street</label>
                    <input
                      type="name"
                      className={`${userTheme ? "theme-bg-light border" : "theme-bg-dark"} login_input`}
                      id="street"
                      value={profileFormData?.street}
                      placeholder="Enter Street"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="city" className='my-2 '>City</label>
                    <input
                      type="name"
                      className={`${userTheme ? "theme-bg-light border" : "theme-bg-dark"} login_input`}
                      id="city"
                      value={profileFormData?.city}
                      placeholder="Enter City"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="state" className='my-2 mt-3'>State</label>
                    <input
                      type="text"
                      className={`${userTheme ? "theme-bg-light border" : "theme-bg-dark"} login_input`}
                      id="state"
                      value={profileFormData?.state}
                      placeholder="Enter State"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="zip" className='my-2 mt-3'>Zip Code</label>
                    <input
                      type="number"
                      className={`${userTheme ? "theme-bg-light border" : "theme-bg-dark"} login_input`}
                      id="zip"
                      value={profileFormData?.zip}
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