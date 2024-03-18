import React, { useState } from "react";
import { UserStore } from "../../../../Storage/UserStorage";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import Spinner from "../../../../Components/Spinner";

function CreateGoal() {
  const { userTheme, gardens, userId } = UserStore();
  
  const intitialState = {
    userInputDays: '',
    name: '',
    garden: '',
    description: '',
    frequency: 'daily',
    goalType: "Personal"
  }
  
  const navigate = useNavigate()
  
  const [error, setError] = useState({
    name: false,
    garden: false,
    userInputDays: false,
    description: false
  })

  const textError = {
    name: "*Please enter goal name",
    garden: "*Please Choose your garden",
    userInputDays: "Select your goal achived date",
    describe: "*Please describe about your goal"
  }

  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState(intitialState)


  const handleChange = (e) => {
    setFormData((preState) => ({ ...preState, [e.target.name]: e.target.value }))
  }

  const handleFocus = (e) => {
    setError((prev) => ({...prev, [e.target.name]: false}))
  }

  let data = {
    name: formData.name,
    description: formData.description,
    goalType: formData.goalType,
    frequency: formData.frequency,
    endDate: formData.userInputDays,
    gardenId: formData.garden,
    userId: userId
  }

  const handleCreate = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {

      if(formData.name?.length < 3){
        setError((prev) => ({...prev, "name":true}))
      }
      if(formData.garden === ""){
        setError((prev) => ({...prev, "garden":true}))
      }
      if(formData.userInputDays === ""){
        setError((prev) => ({...prev, "userInputDays":true}))
      }
      if(formData.description.length < 10){
        setError((prev) => ({...prev, "description":true}))
      }
      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/garden/goals/create`, data)
      if (res.data) {
        setIsLoading(false)
        toast.success("Goal is created to the selected garden")
        navigate("/user/goals")
      }
    } catch (error) {
      
      setIsLoading(false)
    }
  }
  return gardens?.length === 0 ? (
    <>
      <div className="mt-5">
        <h2>There no gardens available please create a garden first</h2>
        <Link to="/user/gardens">Create garden</Link>
      </div>
    </>
  ) : (
    <>
      <div
        className={`overflow-auto ${userTheme ? "card-light" : "card-dark"
          } p-3 m-2`}
      >
        <h2>Create Goal</h2>
        {
          isLoading && <Spinner />
        }
        <form onSubmit={handleCreate} className="needs-validation">
          <div className="row text-start">
            <div className="col-12 col-md-6">
              <div className="form-group mt-2">
                <label htmlFor="goal-type">Type of Goal:</label>
                <select
                  value={formData.goalType}
                  name='goalType'
                  onChange={(e) => handleChange(e)}
                  className={`${userTheme ? "theme-bg-light border" : "theme-bg-dark"
                    } login_input`}
                >
                  <option value="Personal">Personal</option>
                  <option value="Professional">Professional</option>
                  <option value="Health">Health</option>
                  <option value="Financial">Financial</option>
                  <option value="Educational">Educational</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group mt-2">
                <label htmlFor="goal-type">Choose a Garden:</label>
                {error.garden && <small style={{color:"red"}}>{textError.garden}</small>}
                <select
                  value={formData.garden}
                  onFocus={handleFocus}
                  name="garden"
                  onChange={(e) => handleChange(e)}
                  className={`${userTheme ? "theme-bg-light border" : "theme-bg-dark"
                    } login_input`}
                >
                  <option value="">Select garden</option>
                  {
                    gardens?.map(item => (
                      <option value={item._id} key={item._id}>{item.name}</option>
                    ))
                  }
                </select>
              </div>
              {/* <div className="form-group mt-2">
                <label htmlFor="goal-name">Garden Name:</label>
                <input
                  type="text"
                  name="goal-name"
                  className={`${
                    userTheme ? "theme-bg-light border" : "theme-bg-dark"
                  } login_input`}
                />
              </div> */}
              <div className="form-group mt-2">
                <label htmlFor="goal-name">Goal Name:</label>
                {error.name && <small style={{color:"red"}}>{textError.name}</small>}
                <input
                  value={formData.name}
                  type="text"
                  name="name"
                  onFocus={handleFocus}
                  onChange={(e) => handleChange(e)}
                  className={`${userTheme ? "theme-bg-light border" : "theme-bg-dark"
                    } login_input form-invalid`}
                />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="goal-name">Goal frequency:</label>
                <select
                  value={formData.frequency}
                  name="frequency"
                  onChange={(e) => handleChange(e)}
                  className={`${userTheme ? "theme-bg-light border" : "theme-bg-dark"
                    } login_input`}
                >
                  <option value="">Select frequency</option>
                  <option value="daily">daily</option>
                  <option value="weekly">weekly</option>
                  <option value="monthly">monthly</option>

                </select>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-group mt-2">
                <label htmlFor="completion-date">Target Completion Date:</label>
                {error.userInputDays && <small style={{color:"red"}}>{textError.userInputDays}</small>}
                <input
                  value={formData.userInputDays}
                  type="date"
                  name='userInputDays'
                  onChange={(e) => handleChange(e)}
                  onFocus={handleFocus}
                  className={`${userTheme ? "theme-bg-light border" : "theme-bg-dark"
                    } login_input`}
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="goal-description">Goal Description:</label>
                {error.description && <small style={{color:"red"}}>{textError.describe}</small>}
                <textarea
                  name="description"
                  onFocus={handleFocus}
                  rows={6}
                  onChange={(e) => handleChange(e)}
                  className={`${userTheme ? "theme-bg-light border" : "theme-bg-dark"
                    } login_input`}
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <button
            style={{ marginLeft: "10px" }}
            type="submit"
            className="btn btn-primary m-2 text-center"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateGoal;
