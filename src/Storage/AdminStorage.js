import React,{useState,createContext,useContext} from 'react'
import { useNavigate } from 'react-router-dom'

const Context = createContext()
function AdminStorage({children}) {
    const navigate = useNavigate()
  
  // this state use for  user theme 
   const [adminDarkTheme,setAdminDarkTheme] = useState(false)


   const handleLogout = async() =>{
    try {
      await localStorage.clear()
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <Context.Provider value={{adminDarkTheme,setAdminDarkTheme, handleLogout}}>
        {children}
   </Context.Provider>
  )
}

export const AdminStore = () => useContext(Context)

export default AdminStorage