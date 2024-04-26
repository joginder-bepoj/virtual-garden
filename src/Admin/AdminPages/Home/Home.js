import React, { useEffect, useState } from 'react'

import './home.css'
import MonthlyGraph from '../../../Components/Admin/Graphs/DayGraph';
import { RiLineChartLine } from 'react-icons/ri'
import PieChart from '../../../Components/Admin/Graphs/CicleChart';
import UserTable from '../../../Components/Admin/Table/UserTable';
import LeaderBoardTable from '../../../Components/Admin/Table/LeaderBoardTable';
import axios from 'axios';
import { UserStore } from '../../../Storage/UserStorage';
function Home() {
    const { userId, userTheme } = UserStore()
    const [usersData, setUsersData] = useState([])
    const [userDetail, setUserDetail] = useState()
    const [userCountByDate, setUserCountByDate] = useState([]);
    const [monthlyData, setMonthlyData] = useState([])

    const [data, setData] = useState()


    useEffect(()=>{
        const dateMap = new Map();
        usersData.forEach(user => {
            const createdAt = new Date(user.createdAt);
            const dateKey = createdAt.toDateString();

            if (dateMap.has(dateKey)) {
                dateMap.set(dateKey, dateMap.get(dateKey) + 1);
            } else {
                dateMap.set(dateKey, 1);
            }
        });

        const userCountByDate = Array.from(dateMap, ([date, value]) => ({ date, value }));
        setUserCountByDate(userCountByDate)

    },[usersData])


    useEffect(() => {
        (async()=>{
            try {
                const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/leaderboard`)
                if(res.data.length > 0){
                    res.data.sort((a, b) => {
                        return b.garden.length - a.garden.length;
                    });
                    setData(res.data)
                }
            } catch (err) {
                
            }
        })()
    }, [])


    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/user/getAll/weekly`)
                setMonthlyData(res.data)
            } catch (err) {
                
            }
        })()
    }, [])


    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/user/getall`)
                setUsersData(res.data)
            } catch (err) {
                
            }
        })()
    }, [])

    useEffect(() => {
        (async () => {
            try {
                if(userId !== null){
                    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/user/getone/${userId}`)
                    setUserDetail(res.data.user)
                }
            } catch (err) {
                
            }
        })()
    }, [userId])

    return (
        <>
            <div className="header-text-container row pt-4 ">
                <div className='col-12 col-md-6'>
                    <h3 className=' dashboard-text '>Welcome back, {userDetail?.name}</h3>
                    <p className='dashboard-text-small'>Sit hendrerit leo egestas risus proin mi leo laoreet.</p>
                </div>
            </div>
            <div className='row'>
                <div className="col-12 col-md-6 mt-4 ">
                    <div style={{ height: '350px' }} className={`overflow-hidden ${userTheme ? "card-light" : "card-dark"} p-3`}>
                        <div className='d-flex justify-content-between align-self-center m-0'>
                            <div className=''>
                                <small><RiLineChartLine />Total users</small>
                                {/* <div className="d-flex gap-3 align-self-center align-items-center">
                                    <h3>$144.6K</h3>
                                </div> */}
                            </div>
                        </div>
                        <MonthlyGraph title={'Weekly Users'} data={userCountByDate} />
                    </div>
                </div>
                <div className="col-12 col-md-6 mt-4">
                    <div style={{ height: '350px' }} className={userTheme ? "card-light" : "card-dark"}>
                        <PieChart heading={'Monthly User'} data={monthlyData} />
                    </div>
                </div>
                <div className="col-12 ">
                    <div className={`overflow-auto ${userTheme ? "card-light" : "card-dark"}`}>
                        <h5 className='text-center p-3'>Latest Users</h5>
                        <UserTable data={usersData} />
                    </div>
                </div>
                <div className="col-12 "> 
                    <div className={`overflow-auto ${userTheme ? "card-light" : "card-dark"}`}>
                        <h5 className='text-center p-3'>Top 10 Ranks</h5>
                        <LeaderBoardTable data={data} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home