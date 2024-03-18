import React, { useEffect, useState } from 'react'
import './leaderboard.css'
import LeaderBoardTable from '../../../Components/Admin/Table/LeaderBoardTable'
import axios from 'axios'
import { UserStore } from '../../../Storage/UserStorage'
function Leaderboard() {
    const {userTheme} = UserStore()
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
                
            }
        })()
    }, [])
    


    return (
        <>

            <div className='p-2'>

               
                <div className={`m-1 mx-0 ${userTheme ? "card-light" : "card-dark"} p-2`}>
                    <div className="d-flex justify-content-between">
                        <h3 className='text-center p-3'>Leaderboard</h3>
                    </div>
                    <LeaderBoardTable data={data} />
                </div>
            </div>
        </>
    )
}

export default Leaderboard