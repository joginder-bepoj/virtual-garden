import React, { useEffect, useState } from 'react'

import './home.css'
import MonthlyGraph from '../../../Components/Admin/Graphs/DayGraph';
import { AdminStore } from '../../../Storage/AdminStorage';
import { BsArrowDown, BsArrowUpRight, BsDot, BsFillCalendar2Fill } from 'react-icons/bs'
import { RiLineChartLine } from 'react-icons/ri'
import PieChart from '../../../Components/Admin/Graphs/CicleChart';
import UserTable from '../../../Components/Admin/Table/UserTable';
import LeaderBoardTable from '../../../Components/Admin/Table/LeaderBoardTable';
import axios from 'axios';
import { UserStore } from '../../../Storage/UserStorage';
function Home() {
    const { adminDarkTheme } = AdminStore()
    const { userId } = UserStore()
    const [usersData, setUsersData] = useState([])
    const [userDetail, setUserDetail] = useState()

    const [data, setData] = useState()


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
                console.log(err)
            }
        })()
    }, [])


    const weeklydata = [
        { day: '01', users: 5, color: "#00CADC" },
        { day: '02', users: 9, color: "#628DDE" },
        { day: '03', users: 11, color: "#008ED4" },
        { day: '04', users: 5, color: "#008ED4" },
        { day: '05', users: 25, color: "#00ADDD" },
        { day: '06', users: 50, color: "#00CADC" },
        { day: '07', users: 39, color: "#37E5D4" },
    ];


    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/user/getall`)
                setUsersData(res.data)
            } catch (err) {
                console.log(err)
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
                console.log(err)
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
                <div className='col-12 col-md-6 mt-3 d-md-flex justify-content-end gap-3 align-items-center'>
                    <button className='export-btn me-3 '>Export Data <BsArrowDown /></button>
                    <button className='create-btn'>Create report</button>
                </div>
            </div>
            <div className='row'>
                <div className="col-12 col-md-6 mt-4 ">
                    <div style={{ height: '350px' }} className={`overflow-hidden ${adminDarkTheme ? "card-dark" : "card-light"} p-3`}>
                        <div className='d-flex justify-content-between align-self-center m-0'>
                            <div className=''>
                                <small><RiLineChartLine />Total profit</small>
                                <div className="d-flex gap-3 align-self-center align-items-center">
                                    <h3>$144.6K</h3> <span className='percent-box mb-2'> <BsDot />
                                        28.5% <BsArrowUpRight />
                                    </span>
                                </div>
                            </div>
                            <div className=' align-self-center select-box-barchart'>
                                <BsFillCalendar2Fill className='position-relative' />
                                <select className='select-box-inner'>
                                    <option value=""> Jan 2024</option>
                                    <option value="">Jan 2023</option>
                                    <option value="">Jan 2022</option>
                                </select>
                            </div>
                        </div>
                        <MonthlyGraph title={'Weekly Users'} data={weeklydata} />
                    </div>
                </div>
                <div className="col-12 col-md-6 mt-4">
                    <div style={{ height: '350px' }} className={adminDarkTheme ? "card-dark" : "card-light"}>
                        <PieChart heading={'Monthly User'} />
                    </div>
                </div>
                <div className="col-12 ">
                    <div className={`overflow-auto ${adminDarkTheme ? "card-dark" : "card-light"}`}>
                        <h5 className='text-center p-3'>Latest Users</h5>
                        <UserTable data={usersData} />
                    </div>
                </div>
                <div className="col-12 "> 
                    <div className={`overflow-auto ${adminDarkTheme ? "card-dark" : "card-light"}`}>
                        <h5 className='text-center p-3'>Top 10 Ranks</h5>
                        <LeaderBoardTable data={data} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home