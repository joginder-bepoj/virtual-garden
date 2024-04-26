import React, {useState} from 'react'
import { UserStore } from '../../../Storage/UserStorage'
import axios from 'axios'
import { toast } from 'sonner'
import Spinner from '../../../Components/Spinner'


const Feedback = () => {
    const { userTheme } = UserStore()
    let initialData = {
        name:"",
        email:"",
        query:"",
        subject:""
    }


   


    const [feedbackData, setFeedbackData] = useState(initialData)
    const [isLoading, setIsLoading] = useState(false);


    const handleChange = (e) => {
        setFeedbackData({ ...feedbackData, [e.target.name]: e.target.value })
    }





    const handleSubmit = (e) =>{
        e.preventDefault();
       
        setIsLoading(true)
        const options = {
            method: 'POST',
            url: `${process.env.REACT_APP_BASE_URL}/api/feedback/create`,
            headers: {
              Accept: '*/*',
              'Content-Type': 'application/json'
            },
            data: {...feedbackData, status: "pending"}
        };
        const {name, email, query, subject} = feedbackData
        if(name ===""){
            setIsLoading(true)
            return toast.error("Please enter your name")
        }else if(email === "" || !email.includes("@")){
            setIsLoading(true)
            return toast.error("Please enter correct email")
        }else if(subject === ""){
            setIsLoading(true)
            return toast.error("Please enter the subject")
        }else if(query === ""){
            setIsLoading(true)
            return toast.error("Please enter the details of the feedback or issue")
        }else{  
            axios.request(options).then(function (response) {
                toast.success("Feedback submited successfully")
                setFeedbackData(initialData)
            }).catch(function (error) {
                console.error(error);
                toast.error("Something went wrong please try again later")
            }).finally(()=> setIsLoading(true));
        }
    }



  return (
    <>
      <div className="row gutters ">
        <div className="col-xl-12 mt-4 col-lg-9 col-md-12 col-sm-12 col-12">
          <div className={`${userTheme ? 'card-light' : ' card-dark'} h-100 `}>
            <form className=" card-body text-start">
              <div className="row gutters">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <h6 className="my-3 text-primary heading-profile">Feedback or Report issue</h6>
                </div>
                <div className="col-xl-6  col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="fullName" className='my-2'>Full Name</label>
                    <input
                      type="text"
                      className={`${userTheme ? "theme-bg-light border" : "theme-bg-dark"} login_input`}
                      id="fullName"
                      name="name"
                      value={feedbackData?.name}
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
                      name="email"
                      value={feedbackData?.email}
                      placeholder="Enter email ID"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="subject" className='my-2 mt-3'>Subject</label>
                    <input
                      type="text"
                      className={`${userTheme ? "theme-bg-light border" : "theme-bg-dark"} login_input`}
                      id="subject"
                      name="subject"
                      value={feedbackData?.subject}
                      placeholder="Enter phone number"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                {isLoading && <Spinner />}
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="query" className='my-2 mt-3'>Details</label>
                    <input
                      type="text"
                      className={`${userTheme ? "theme-bg-light border" : "theme-bg-dark"} login_input`}
                      id="query"
                      name="query"
                      value={feedbackData?.query}
                      placeholder="Details"
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
                      Submit
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


export default Feedback