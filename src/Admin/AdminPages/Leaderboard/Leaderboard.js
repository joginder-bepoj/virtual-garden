import React, { useEffect, useState } from 'react'
import './leaderboard.css'
import { AdminStore } from '../../../Storage/AdminStorage'
import LeaderBoardTable from '../../../Components/Admin/Table/LeaderBoardTable'
import axios from 'axios'
function Leaderboard() {
    const { adminDarkTheme } = AdminStore()
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
    


    return (
        <>

            <div className='p-2'>

               
                <div className={`m-1 mx-0 ${adminDarkTheme ? "card-dark" : "card-light"} p-2`}>
                    <div className="d-flex justify-content-between">
                        <h3 className='text-center p-3'>Leaderboard</h3>
                        <div className='d-flex  m-3 gap-4'>
                            {/* <input placeholder='Name/Number/Email' type="text" className={`${!adminDarkTheme && "theme-light "} form-control`} /> */}
                            {/* <select className='form-select'>
                                <option value="">All Time</option>
                                <option value="">This week</option>
                                <option value="">This Month</option>
                            </select> */}

                        </div >
                    </div>
                    <LeaderBoardTable data={data} />
                </div>
            </div>
        </>
    )
}

export default Leaderboard