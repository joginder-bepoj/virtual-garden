import React from 'react'
import LeaderBoardTable from '../Admin/Table/LeaderBoardTable'
function LeaderBoardHomeTable({userTheme, leaderboard}) {
  return (
    <section className={`${!userTheme && 'theme-bg-dark'} tablesSec py-5`}>
    <div className="container">
      <h2 className="about-heading fw700 pb-4 font24">
        Prize <span className="text-color">Winners </span>{" "}
      </h2>
      <LeaderBoardTable data={leaderboard} />
    </div>
  </section>
  
  )
}

export default LeaderBoardHomeTable