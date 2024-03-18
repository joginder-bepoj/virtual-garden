import React, { useState } from 'react'
import Sidebar from '../../Components/Admin/Sidebar/Sidebar'
import Header from '../../Components/Admin/Header/Header'
import './AdminLayout.css'
import { UserStore } from '../../Storage/UserStorage'


function AdminLayout({ children }) {

    const {userTheme, setUserTheme} = UserStore()



    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
    const [shortSidebarToggle, setShortSidebarToggle] = useState(true)

    const handleCheckboxChange = () => {
        setUserTheme(!userTheme);
    };

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }

    return (
        <>
            <div className={`${userTheme ? 'light-theme' : 'dark-theme'} m-0 p-0`}>
                <div className={`container-fluid  p-0`}>
                    <div className={`${userTheme ? 'light-theme' : 'dark-theme'}  sticky-top`}>
                        <Header shortSidebarToggle={shortSidebarToggle} setShortSidebarToggle={setShortSidebarToggle} OpenSidebar={OpenSidebar} />
                    </div>
                    <div className='grid-container'>
                        <div className={`side ${!shortSidebarToggle && 'shortSideBaar'} `}>
                            <Sidebar handleCheckboxChange={handleCheckboxChange} adminDarkTheme={userTheme} shortSidebarToggle={shortSidebarToggle} setShortSidebarToggle={setShortSidebarToggle} openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
                        </div>
                        <div className={`  main ${!shortSidebarToggle && 'main-width-full'} position-relative`}>
                            <section id='main-component' className={`container-xxl ${userTheme ? 'light-theme' : 'dark-theme'} m-0 p-0`} >{children} </section>
                        </div>
                    </div>
                </div>
            </div>
        </> 
    )
}

export default AdminLayout