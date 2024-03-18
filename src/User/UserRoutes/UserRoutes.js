import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserHome from '../UserPages/Home/UserHome'
import Search from '../UserPages/Search/Search'
import Saved from '../UserPages/Saved/Saved'
import Profile from '../UserPages/Profile/Profile'
import Goals from '../UserPages/Goals/Goals'
import Achievement from '../UserPages/Achievement/Achievement'
import UserLayout from '../UserLayout/UserLayout'
import CreateGoal from '../UserPages/Goals/CreateGoal/CreateGoal'
import MainGarden from '../UserPages/Gardens/MainGarden'
import ViewGarden from '../UserPages/Gardens/ViewGarden'
import Goalprogress from '../UserPages/Goals/Goalprogress'


function UserRoutes() {
    return (
        <UserLayout>
        <Routes>
            <Route path='/' element={<UserHome/>} />
            <Route path='/search' element={<Search/>} />
            <Route path='/gardens' element={<MainGarden />} />
            <Route path='/view/:id' element={<ViewGarden />}  />
            <Route path='/saved' element={<Saved/>} />
            <Route path='/goals' element={<Goals/>} />
            <Route path='/goal/create-goal' element={<CreateGoal/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/achievement' element={<Achievement/>} />
            <Route path='/viewgoal/:id' element={<Goalprogress/>} />
        </Routes>
        </UserLayout>
    )
}

export default UserRoutes