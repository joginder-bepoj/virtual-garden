import React from 'react'
import Gold from '../../Assets/golds.png'
import Silver from '../../Assets/silvers.png'
import Bronze from '../../Assets/bronze.png'
function LeaderBoardHomeTable({userLightTheme}) {
  return (
    <section className={`${!userLightTheme && 'theme-bg-dark'} tablesSec py-5`}>
    <div className="container">
      <h2 className="about-heading fw700 pb-4 font24">
        Prize <span className="text-color">Winners </span>{" "}
      </h2>
      <div className="table-responsive p-2">
        <table className="table attendance-tab border">
          <tbody>
            <tr style={{background:'#0C5113'}} className="theader">
              <td className="text-white fw400 font15 ps-3 theader border-end">ID</td>
              <td className="text-white fw400 font15 ps-3 theader border-end">Name</td>
              <td className="text-white fw400 font15 ps-3  theader border-end"> Score </td>
              <td className="text-white fw400 font15 ps-3  theader border-end"> Plants</td>
              <td className="text-white fw400 font15 ps-3  theader border-end">Garden</td>
              <td className="text-white fw400 font15 ps-3  theader border-end" />
            </tr>
            <tr className="border-bottom">
              <td className="fw400 font15 img-fix-seller">1</td>
              <td className="ps-3 fw400 font15 pt-3 img-fix-seller-1">
                Anupam Pandey
              </td>
              <td className="ps-3 fw400 font15 pt-3">0.88697</td>
              <td className="ps-3 fw400 font15 pt-3">1</td>
              <td className="ps-3 fw400 font15">1</td>
              <td className="ps-3 fw400 font15">
              <img src={Gold} alt="Gold" />
              </td>
            </tr>
            <tr className="border-bottom">
              <td className="fw400 font15 img-fix-seller">2</td>
              <td className="ps-3 fw400 font15 pt-3 img-fix-seller-1">
                Anupam Pandey
              </td>
              <td className="ps-3 fw400 font15 pt-3">0.88697</td>
              <td className="ps-3 fw400 font15 pt-3">10</td>
              <td className="ps-3 fw400 font15">3</td>
              <td className="ps-3 fw400 font15">
                <img src={Gold} alt="Gold" />
              </td>
            </tr>
            <tr className="border-bottom">
              <td className="fw400 font15 img-fix-seller">3</td>
              <td className="ps-3 fw400 font15 pt-3 img-fix-seller-1">
                Anupam Pandey
              </td>
              <td className="ps-3 fw400 font15 pt-3">0.88697</td>
              <td className="ps-3 fw400 font15 pt-3">15</td>
              <td className="ps-3 fw400 font15">10</td>
              <td className="ps-3 fw400 font15">
                <img src={Silver} alt="Silver" />
              </td>
            </tr>
            <tr className="border-bottom">
              <td className="fw400 font15 img-fix-seller">4</td>
              <td className="ps-3 fw400 font15 pt-3 img-fix-seller-1">
                Anupam Pandey
              </td>
              <td className="ps-3 fw400 font15 pt-3">0.88697</td>
              <td className="ps-3 fw400 font15 pt-3">20</td>
              <td className="ps-3 fw400 font15">11</td>
              <td className="ps-3 fw400 font15">
                <img src={Silver} alt="Silver" />
              </td>
            </tr>
            <tr className="border-bottom">
              <td className="fw400 font15 img-fix-seller">5</td>
              <td className="ps-3 fw400 font15 pt-3 img-fix-seller-1">
                Anupam Pandey
              </td>
              <td className="ps-3 fw400 font15 pt-3">0.88697</td>
              <td className="ps-3 fw400 font15 pt-3">30</td>
              <td className="ps-3 fw400 font15">11</td>
              <td className="ps-3 fw400 font15">
                <img src={Bronze} alt="Bronze" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
  
  )
}

export default LeaderBoardHomeTable