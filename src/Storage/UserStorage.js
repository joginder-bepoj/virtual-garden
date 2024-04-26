import axios from 'axios'
import React, { useState, createContext, useContext } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Context = createContext()
function UserStorage({ children }) {
  const navigate = useNavigate()

  const [userTheme, setUserTheme] = useState(true)
  const [userId, setUserId] = useState(null)
  const [userType, setUserType] = useState(null)
  const [gardens, setGardens] = useState([])
  const [goals, setGoals] = useState([])
  const [leaderboard, setLeaderboard] = useState([])
  const [isGardenCreated, setIsGardenCreated] = useState(false)
  const [isGardenDeleted, setIsGardenDeleted] = useState(false)
  const [userDetails, setUserDetails] = useState();
  const [profileUpdated, setProfileUpdated] = useState(false)


  const [profileFormData, setProfileFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    website: "",
    street: "",
    city: "",
    state: "",
    zip: ""
  })

  let totalCompletedMilestones = 0;
  let totalMileStones = 0

  goals?.forEach(goal => {
    goal.milestones.forEach(milestone => {
      if (milestone.isCompleted) {
        totalCompletedMilestones++;
      }
      totalMileStones++
    });
  });

  useEffect(() => {
    let getUser = async () => {
      try {
        let userId = await localStorage.getItem('userID');
        let userType = await localStorage.getItem("userType")
        setUserId(JSON.parse(userId))
        setUserType(JSON.parse(userType))
      } catch (error) {
        
      }
    }
    getUser()
  }, [navigate])



  const handleLogout = async () => {
    try {
      await localStorage.clear()
      navigate("/")
    } catch (error) {
      
    }
  }

  useEffect(() => {
    (async () => {
      try {
        if (userId) {
          const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/garden/getall/${userId}`);
          setGardens(res.data.activeGardens)
        }
      } catch (error) {
        
      }
    })()
  }, [userId, isGardenCreated, navigate, isGardenDeleted])

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
  }, [userId, totalCompletedMilestones, navigate])


  useEffect(() => {
    (async()=>{
        try {
            const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/leaderboard`)
            if(res.data.length > 0){
                res.data.sort((a, b) => {
                    return b.garden.length - a.garden.length;
                });
                setLeaderboard(res.data)
            }
        } catch (err) {
            
        }
    })()
  }, [])


  useEffect(() => {
    (async () => {
      try {
        if (userId) {
          const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/user/getone/${userId}`)
          if (res.data.user) {
            setUserDetails(res.data.user);
            setProfileFormData({
              fullName: res.data.user.name,
              email: res.data.user.email,
              phone: res.data.user.number,
              website: res.data.user.website,
              street: res.data.user.street,
              city: res.data.user.city,
              state: res.data.user.state,
              zip: res.data.user.zipcode
            })
          }
        }
      } catch (error) {
        
      }
    })()
  }, [userId, profileUpdated])

  return (
    <Context.Provider value={{ userTheme, setUserTheme, userId, handleLogout, gardens, setIsGardenCreated, userType, setUserType, setIsGardenDeleted, goals, setGoals, totalCompletedMilestones, totalMileStones, leaderboard, userDetails, profileFormData, setProfileFormData, setProfileUpdated }}>
      {children}
    </Context.Provider>
  )
}
export const UserStore = () => useContext(Context)
export default UserStorage