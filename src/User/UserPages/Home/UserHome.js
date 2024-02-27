import React from 'react'
import './userhome.css'
import { UserStore } from '../../../Storage/UserStorage'
import LeaderBoardTable from '../../../Components/Admin/Table/LeaderBoardTable'
import Garden from '../Gardens/Garden'
import { useNavigate } from 'react-router-dom'

function UserHome() {
  const { userLightTheme, gardens } = UserStore()

  const navigate = useNavigate()
 

  const leaderboardData = [
    { id: '01', name: "John", rank: "01", totalGoal: '22', goalAchieved: "20", gardensize: "5 sq. ft.", overallActivity: "50%", medal: "gold" },
    { id: '02', name: "John", rank: "02", totalGoal: '22', goalAchieved: "20", gardensize: "5 sq. ft.", overallActivity: "50%", medal: "gold" },
    { id: '03', name: "John", rank: "03", totalGoal: '22', goalAchieved: "20", gardensize: "5 sq. ft.", overallActivity: "50%", medal: "silver" },
    { id: '04', name: "John", rank: "04", totalGoal: '22', goalAchieved: "20", gardensize: "5 sq. ft.", overallActivity: "50%", medal: "silver" },
    { id: '05', name: "John", rank: "05", totalGoal: '22', goalAchieved: "20", gardensize: "5 sq. ft.", overallActivity: "50%", medal: "bronze" },
   ]

  return (
    <>
      <h3 className='mt-3 mx-2'>Featured Gardens</h3>
      <div className="row">
        {
          gardens?.map((item, index)=>(
            index < 3 &&
            <div className="col-12 col-md-4 mt-2" key={item?._id}>
              <div className={`${userLightTheme ? "featured-card-light" : " featured-card-dark "} position-relative row p-2`}>
                <div className="col-12 p-0" onClick={()=>navigate(`/user/view/${item?._id}`)}>
                  <Garden />
                </div>
              </div>
            </div>
          )) 
        }
      </div>
      <div className='d-flex justify-content-center m-3 '>
        <button className='see-all-btn' onClick={()=>navigate("/user/gardens")} >See All</button>
      </div>
      <h3 className='mt-3 mx-2'>Leaderbord </h3>
      <div className={`overflow-auto m-2 ${userLightTheme ? "card-light" : "card-dark"}`}>
 
        <LeaderBoardTable data={leaderboardData} />
      </div>
    </>
  )
}

export default UserHome