import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLayout from '../AdminLayout/AdminLayout'
import Home from '../AdminPages/Home/Home'
import Users from '../AdminPages/Users/Users'
import Leaderboard from '../AdminPages/Leaderboard/Leaderboard'
import Feedback from '../AdminPages/Feedback/Feedback'
import ViewFeedback from '../AdminPages/Feedback/ViewFeedback/ViewFeedback'
import UserInfo from '../AdminPages/Users/UserInfo/UserInfo'

function AdminRoutes() {
    return (
        <AdminLayout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/users' element={<Users />} />
                <Route path='/user/:id' element={<UserInfo />} />
                <Route path='/leaderboard' element={<Leaderboard />} />
                <Route path='/feedback' element={<Feedback />} />
                <Route path='/feedback/:id' element={<ViewFeedback />} />
            </Routes>
        </AdminLayout>
    )
}

export default AdminRoutes