import React, { useState } from "react";
import { UserStore } from "../../../../Storage/UserStorage";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { InfinitySpin  } from 'react-loader-spinner'
import { toast } from "sonner";

function CreateGoal() {
  const { userLightTheme, gardens, userId } = UserStore();
  
  const intitialState = {
    userInputDays: '',
    name: '',
    garden: '',
    description: '',
    frequency: '',
    goalType: ""
  }
  
  const navigate = useNavigate()
  
  
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState(intitialState)


  const handleChange = (e) => {
    setFormData((preState) => ({ ...preState, [e.target.name]: e.target.value }))
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
      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/garden/goals/create`, data)
      if (res.data) {
        setIsLoading(false)
        toast.success("Goal is created to garden")
        navigate("/user/goals")
      }
    } catch (error) {
      console.log(error)
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
        className={`overflow-auto ${userLightTheme ? "card-light" : "card-dark"
          } p-3 m-2`}
      >
        <h2>Create Goal</h2>
        {
          isLoading &&
          <div style={{position: "absolute", top: "30%", left: "40%"}}>
          <InfinitySpin 
          width='200'
          color="#4fa94d"
          />
          </div> 
        }
        <form onSubmit={handleCreate}>
          <div className="row text-start">
            <div className="col-12 col-md-6">
              <div className="form-group mt-2">
                <label htmlFor="goal-type">Type of Goal:</label>
                <select

                  name='goalType'
                  onChange={(e) => handleChange(e)}
                  className={`${userLightTheme ? "theme-bg-light border" : "theme-bg-dark"
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
                <select
                  name="garden"
                  onChange={(e) => handleChange(e)}
                  className={`${userLightTheme ? "theme-bg-light border" : "theme-bg-dark"
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
                    userLightTheme ? "theme-bg-light border" : "theme-bg-dark"
                  } login_input`}
                />
              </div> */}
              <div className="form-group mt-2">
                <label htmlFor="goal-name">Goal Name:</label>
                <input
                  type="text"
                  name="name"
                  onChange={(e) => handleChange(e)}
                  className={`${userLightTheme ? "theme-bg-light border" : "theme-bg-dark"
                    } login_input`}
                />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="goal-name">Goal frequency:</label>
                <select
                  name="frequency"
                  onChange={(e) => handleChange(e)}
                  className={`${userLightTheme ? "theme-bg-light border" : "theme-bg-dark"
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
                <input
                  type="date"
                  name='userInputDays'
                  onChange={(e) => handleChange(e)}

                  className={`${userLightTheme ? "theme-bg-light border" : "theme-bg-dark"
                    } login_input`}
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="goal-description">Goal Description:</label>
                <textarea
                  name="description"
                  rows={6}
                  onChange={(e) => handleChange(e)}
                  className={`${userLightTheme ? "theme-bg-light border" : "theme-bg-dark"
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
