import { AiFillEye } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import './table.css'
function FeedbackTable( {setShow, userFeedback, setView}) {
    
    return (
        <table className="responsive-table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Subject</th>
                    <th>Reported</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    userFeedback?.map((elm, ind) =>
                        <tr key={ind}>
                            <td style={{ background: "transparent" }}>{ind+1}</td>
                            <td>{elm.name}</td>
                            <td>{elm.email}</td>
                            <td>{elm.subject}</td>
                            <td>{elm.createdAt.substr(0,10)}</td>
                            <td ><span className='m-auto status-text'>{elm.status}</span></td>
                            <td className='d-flex align-items-center gap-2 justify-content-center'>
                                <AiFillEye color='#47ad86' size={25} onClick={() => setView(elm._id)} style={{cursor:'pointer'}}/>
                                <MdDelete color='#e36262' onClick={() => setShow(elm._id)} size={25} style={{cursor:'pointer'}}/>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}

export default FeedbackTable