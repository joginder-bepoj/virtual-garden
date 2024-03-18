import React from 'react'
import './userhome.css'
import { UserStore } from '../../../Storage/UserStorage'
import LeaderBoardTable from '../../../Components/Admin/Table/LeaderBoardTable'
import Garden from '../Gardens/Garden'
import { useNavigate } from 'react-router-dom'

function UserHome() {
  const { userTheme, gardens, leaderboard } = UserStore()

  const navigate = useNavigate()

  return (
    <>
      <h3 className='mt-3 mx-2'>Featured Gardens</h3>
      <div className="row">
        {gardens?.length > 0 ?
          gardens.map((item, index) => (
            index < 3 &&
            <div className="col-12 col-md-4 mt-2" key={item?._id}>
              <div className={`${userTheme ? "featured-card-light" : " featured-card-dark "} position-relative row p-2`}>
                <div className="col-12 p-0" onClick={() => navigate(`/user/view/${item?._id}`)}>
                  <Garden garden={item} />
                </div>
              </div>
            </div>
          )) : <div className="text-muted">
            <h4>No Garden Available!</h4>
          </div>
        }
      </div>
      {gardens?.length > 0 && (
        <div className='d-flex justify-content-center m-3 '>
          <button className='see-all-btn' onClick={() => navigate("/user/gardens")} >See All</button>
        </div>
      )}
      <h3 className='mt-3 mx-2'>Leaderbord </h3>
      <div className={`overflow-auto m-2 ${userTheme ? "card-light" : "card-dark"}`}>
        <LeaderBoardTable data={leaderboard} />
      </div>
    </>
  )
}

export default UserHome