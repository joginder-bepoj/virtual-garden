import React from 'react'
import { BsPeopleFill, } from 'react-icons/bs'
import { RiDashboardFill, RiFeedbackFill, } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { MdLeaderboard } from 'react-icons/md'
import { useLocation } from 'react-router-dom'

function Sidebar({ adminDarkTheme, shortSidebarToggle, openSidebarToggle }) {
   
    const { pathname } = useLocation()

    return (
        <aside style={{
            boxShadow: ` 5px 0 7px -3px rgba(${!adminDarkTheme ? "0, 0, 0, 0.35" : "255, 255, 255, 0.35"})`
        }} id="sidebar" className={`pt-3 ${!shortSidebarToggle && 'shortSideBaar'}  ${adminDarkTheme ? 'light-theme dark-scrollbar': 'dark-theme light-scrollbar'} ${openSidebarToggle ? "sidebar-responsive" : ""}`} >
          
            <ul className='sidebar-list  mt-md-0 pt-md-0 '>

                <Link style={{ textDecoration: "none", color: "inherit" }} to="/admin">
                    <li style={{ marginRight: !shortSidebarToggle && "2px", fontSize: '14px' }} className={`${pathname === "/admin" && "sidebar-active"} ${shortSidebarToggle ? 'sidebar-list-item' : "sidebar-list-item-short"}`}>
                        <RiDashboardFill size={!shortSidebarToggle && 25} className='icon' />
                        {'Dashboard'}
                    </li>
                </Link>

                <Link style={{ textDecoration: "none", color: "inherit" }} to="/admin/users">
                    <li style={{ marginRight: !shortSidebarToggle && "2px", fontSize: '14px' }} className={`${pathname === "/admin/users" && "sidebar-active"} ${shortSidebarToggle ? 'sidebar-list-item' : "sidebar-list-item-short"}`}>
                        <BsPeopleFill size={!shortSidebarToggle && 25} className='icon' />
                        <span className='me-3'>{'Users'}</span>
                    </li>
                </Link>

                <Link style={{ textDecoration: "none", color: "inherit" }} to="/admin/leaderboard">
                    <li style={{ marginRight: !shortSidebarToggle && "2px", fontSize: '14px' }} className={`${pathname === "/admin/leaderboard" && "sidebar-active"} ${shortSidebarToggle ? 'sidebar-list-item' : "sidebar-list-item-short"}`}>
                        <MdLeaderboard size={!shortSidebarToggle && 25} className='icon' />
                        {'Leaderboard'}
                    </li>
                </Link>

                <Link style={{ textDecoration: "none", color: "inherit" }} to="/admin/feedback">
                    <li style={{ marginRight: !shortSidebarToggle && "2px", fontSize: '14px' }} className={`${pathname === "/admin/feedback" && "sidebar-active"} ${shortSidebarToggle ? 'sidebar-list-item' : "sidebar-list-item-short"}`}>
                        <RiFeedbackFill size={!shortSidebarToggle && 25} className='icon' />
                        {'Feedback'}
                    </li>
                </Link>
            </ul>
        </aside>
    )
}

export default Sidebar