import Gold from '../../../Assets/golds.png'
import Silver from '../../../Assets/silvers.png'
import Bronze from '../../../Assets/bronze.png'
import { useLocation } from 'react-router-dom';
const LeaderBoardTable = ({ data }) => {
    const location = useLocation()

    return (
        <table className={ location.pathname ==="/" ? "responsive-table border" : "responsive-table"}>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Milestones</th>
                    <th>Gardens </th>
                    <th>Medal</th>
                </tr>
            </thead>
            <tbody>
                {data ? 
                    data.map((elm, ind) =>
                        <tr key={ind} >
                            <td>{ind + 1}</td>
                            <td>{elm?.user?.name}</td>
                            <td className='fw-bold'> {elm?.totalCompletedMilestones} / {elm?.totalMilestones} </td>
                            <td>{elm?.garden?.length}</td>
                            <td><img height={25} src={ind < 3 ? Gold : ind >=3 && ind < 6 ? Silver : Bronze} alt='medals' /></td>
                        </tr>
                    ) : <p>Loading...</p>
                }
            </tbody>

        </table>
    );
};

export default LeaderBoardTable;
