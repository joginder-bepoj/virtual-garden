import axios from 'axios'
import React,{useState,createContext,useContext} from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Context = createContext()
function UserStorage({children}) {
  const navigate = useNavigate()

  // this state use for  user theme
   const [userLightTheme,setUserTheme] = useState(true)
   const [userId, setUserId] = useState(null)
   const [userType, setUserType] = useState(null)
   const [gardens, setGardens] = useState(null)
   const [isGardenCreated, setIsGardenCreated] = useState(false)
   const [isGardenDeleted, setIsGardenDeleted] = useState(false)

   useEffect(()=>{
    let getUser = async()=>{
        try {
        let userId = await localStorage.getItem('userID');
        let userType = await localStorage.getItem("userType")
            setUserId(JSON.parse(userId))
            setUserType(JSON.parse(userType))
        } catch (error) {
            console.log(error)
        }
    }
    getUser()  
  },[navigate])



  const handleLogout = async() =>{
    try {
      await localStorage.clear()
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    (async()=>{
      try {

        if(userId){
          const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/garden/getall/${userId}`);
          setGardens(res.data.activeGardens)
        }
      } catch (error) {
        console.log(error)
      }
    })()
  }, [userId, isGardenCreated, navigate, isGardenDeleted])


  return (
    <Context.Provider value={{userLightTheme,setUserTheme, userId, handleLogout, gardens, setIsGardenCreated, userType, setUserType, setIsGardenDeleted}}>
        {children}
   </Context.Provider>
  )
}

export const UserStore = () => useContext(Context)

export default UserStorage