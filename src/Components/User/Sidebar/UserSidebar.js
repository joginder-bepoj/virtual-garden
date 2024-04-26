import React from 'react'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { HiHome } from 'react-icons/hi'
import { GoGoal } from 'react-icons/go'
import { GiIsland } from 'react-icons/gi'
import { LuTrophy } from 'react-icons/lu'
import { useLocation } from 'react-router-dom'
import { MdFeedback } from 'react-icons/md'

function UserSidebar({ userTheme, shortSidebarToggle, openSidebarToggle }) {

    const { pathname } = useLocation()

    return (
        <aside style={{
            boxShadow: ` 5px 0 7px -3px rgba(${userTheme ? "0, 0, 0, 0.35" : "255, 255, 255, 0.35"})`
        }} id="sidebar" className={`pt-3 ${!shortSidebarToggle && 'shortSideBaar'}  ${userTheme ? ' light-theme light-scrollbar' : 'dark-theme dark-scrollbar'} ${openSidebarToggle ? "sidebar-responsive" : ""}`} >

            <ul className='sidebar-list  mt-md-0 pt-md-0 '>

                <Link style={{ textDecoration: "none", color: "inherit" }} to="/user">
                    <li style={{ marginRight: !shortSidebarToggle && "2px", fontSize: '14px' }} className={`${pathname === "/user" && "sidebar-active"} ${shortSidebarToggle ? 'sidebar-list-item' : "sidebar-list-item-short"}`}>
                        <HiHome size={!shortSidebarToggle && 25} className='icon' />
                        {'Home'}
                    </li>
                </Link>

                <Link style={{ textDecoration: "none", color: "inherit" }} to="/user/goals">
                    <li style={{ marginRight: !shortSidebarToggle && "2px", fontSize: '14px' }} className={`${pathname === "/user/goals"  && "sidebar-active"} ${shortSidebarToggle ? 'sidebar-list-item' : "sidebar-list-item-short"}`}>
                        <GoGoal size={!shortSidebarToggle && 25} className='icon' />
                        <span className='me-3'>{'Goals'}</span>
                    </li>
                </Link>

                <Link style={{ textDecoration: "none", color: "inherit" }} to="/user/gardens">
                    <li style={{ marginRight: !shortSidebarToggle && "2px", fontSize: '14px' }} className={`${pathname === "/user/gardens" && "sidebar-active"} ${shortSidebarToggle ? 'sidebar-list-item' : "sidebar-list-item-short"}`}>
                        <GiIsland size={!shortSidebarToggle && 25} className='icon' />
                        {'Garden'}
                    </li>
                </Link>

                <Link style={{ textDecoration: "none", color: "inherit" }} to="/user/achievement">
                    <li style={{ marginRight: !shortSidebarToggle && "2px", fontSize: '14px' }} className={`${pathname === "/user/achievement" && "sidebar-active"} ${shortSidebarToggle ? 'sidebar-list-item' : "sidebar-list-item-short"}`}>
                        <LuTrophy size={!shortSidebarToggle && 25} className='icon' />
                        {'Achievement'}
                    </li>
                </Link>
                <Link style={{ textDecoration: "none", color: "inherit" }} to="/user/profile">
                    <li style={{ marginRight: !shortSidebarToggle && "2px", fontSize: '14px' }} className={`${pathname === "/user/profile" && "sidebar-active"} ${shortSidebarToggle ? 'sidebar-list-item' : "sidebar-list-item-short"}`}>
                        <BsFillPersonLinesFill size={!shortSidebarToggle && 25} className='icon' />
                        {'Profile'}
                    </li>
                </Link>
                <Link style={{ textDecoration: "none", color: "inherit" }} to="/user/feedback">
                    <li style={{ marginRight: !shortSidebarToggle && "2px", fontSize: '14px' }} className={`${pathname === "/user/feedback" && "sidebar-active"} ${shortSidebarToggle ? 'sidebar-list-item' : "sidebar-list-item-short"}`}>    
                        <MdFeedback size={!shortSidebarToggle && 25} className='icon' />
                        {"Feedback"}
                    </li>
                </Link>
            </ul>
        </aside>
    )
}

export default UserSidebar