import React, { useEffect, useState } from 'react'
import { UserStore } from '../../Storage/UserStorage'
import UserHeader from '../../Components/User/UserHeader/UserHeader'
import UserSidebar from '../../Components/User/Sidebar/UserSidebar'
import { useNavigate } from 'react-router-dom'


function UserLayout({ children }) {
    const { userLightTheme, setUserTheme, userType } = UserStore()

    const navigate = useNavigate()


    // document.body.className='dark-theme'

    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
    const [shortSidebarToggle, setShortSidebarToggle] = useState(true)



    const handleCheckboxChange = () => {
        setUserTheme(!userLightTheme);
    };


    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }

    useEffect(()=>{
       
        if(userType) userType !== "user"  && navigate("/admin")
       
    },[navigate, userType])


    return (
        <>
            <div className={`${userLightTheme ? 'light-theme' : 'dark-theme' } m-0 p-0`}>
                <div className={`container-fluid  p-0`}>
                    <div className={`${userLightTheme ? 'light-theme' : 'dark-theme'}  sticky-top`}>

                        <UserHeader shortSidebarToggle={shortSidebarToggle} setShortSidebarToggle={setShortSidebarToggle} userLightTheme={userLightTheme} OpenSidebar={OpenSidebar} />
                    </div>
                    <div className='grid-container'>
                        <div className={`side ${!shortSidebarToggle && 'shortSideBaar'} `}>
                            <UserSidebar handleCheckboxChange={handleCheckboxChange} userLightTheme={userLightTheme} shortSidebarToggle={shortSidebarToggle} setShortSidebarToggle={setShortSidebarToggle} openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
                        </div>
                        <div className={`  main ${!shortSidebarToggle && 'main-width-full'} position-relative`}>
                            <section id='main-component' className={`container-xxl ${userLightTheme ? 'light-theme' : 'dark-theme'} m-0 p-0`} >{children} </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserLayout