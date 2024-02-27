import Gold from '../../../Assets/golds.png'
import Silver from '../../../Assets/silvers.png'
import Bronze from '../../../Assets/bronze.png'
const LeaderBoardTable = ({ data }) => {

    return (
        <table className="responsive-table">

            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Goals Achieved</th>
                    <th>Gardens </th>
                    <th>Overall Activity</th>
                    <th>Medal</th>
                </tr>
            </thead>
            <tbody>
                {data ? 
                    data.map((elm, ind) =>
                        <tr key={ind} >
                            <td>{ind + 1}</td>
                            <td>{elm?.user?.name}</td>
                            <td >-N/A-</td>
                            <td>{elm?.garden?.length}</td>
                            <td>-N/A-</td>
                            <td><img height={25} src={ind < 3 ? Gold : ind >=3 && ind < 6 ? Silver : Bronze} alt='medals' /></td>
                        </tr>
                    ) : <p>Loading...</p>
                }
            </tbody>

        </table>
    );
};

export default LeaderBoardTable;
