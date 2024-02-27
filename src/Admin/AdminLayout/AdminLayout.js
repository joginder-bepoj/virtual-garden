import React, { useState } from 'react'
import Sidebar from '../../Components/Admin/Sidebar/Sidebar'
import Header from '../../Components/Admin/Header/Header'
import './AdminLayout.css'
import { AdminStore } from '../../Storage/AdminStorage'


function AdminLayout({ children }) {
    const { adminDarkTheme, setAdminDarkTheme } = AdminStore()



    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
    const [shortSidebarToggle, setShortSidebarToggle] = useState(true)

    const handleCheckboxChange = () => {
        setAdminDarkTheme(!adminDarkTheme);
    };

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }

    return (
        <>
            <div className={`${adminDarkTheme ? 'dark-theme' : 'light-theme'} m-0 p-0`}>
                <div className={`container-fluid  p-0`}>
                    <div className={`${adminDarkTheme ? 'dark-theme' : 'light-theme'}  sticky-top`}>
                        <Header shortSidebarToggle={shortSidebarToggle} setShortSidebarToggle={setShortSidebarToggle} adminDarkTheme={adminDarkTheme} OpenSidebar={OpenSidebar} />
                    </div>
                    <div className='grid-container'>
                        <div className={`side ${!shortSidebarToggle && 'shortSideBaar'} `}>
                            <Sidebar handleCheckboxChange={handleCheckboxChange} adminDarkTheme={adminDarkTheme} shortSidebarToggle={shortSidebarToggle} setShortSidebarToggle={setShortSidebarToggle} openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
                        </div>
                        <div className={`  main ${!shortSidebarToggle && 'main-width-full'} position-relative`}>
                            <section id='main-component' className={`container-xxl ${adminDarkTheme ? 'dark-theme' : 'light-theme'} m-0 p-0`} >{children} </section>
                        </div>
                    </div>
                </div>
            </div>
        </> 
    )
}

export default AdminLayout