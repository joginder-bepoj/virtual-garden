import React from 'react';
import { MdDelete, MdModeEditOutline } from 'react-icons/md';
import { AiFillEye } from 'react-icons/ai';
import './table.css'
import { Link, useLocation } from 'react-router-dom';


const UserTable = ({ data, handleShow, handleDeactivateShow }) => {
    const location = useLocation()
    return (
        <table className="responsive-table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Number</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((elm, ind) =>
                        <tr key={ind}>
                            <td style={{ background: "transparent" }}>{ind+1}</td>
                            <td>{elm.name}</td>
                            <td>{elm.email}</td>
                            <td>{elm.number}</td>
                            <td>{elm.isUserDeactivated ? "Deactive": "Active" }</td>
                            <td className='d-flex align-items-center gap-2 justify-content-center'>
                                {location.pathname !== "/admin" && <MdModeEditOutline color='#1797BB' size={25} onClick={()=>handleDeactivateShow(elm._id,elm.isUserDeactivated)} /> }
                                <Link to={`/admin/user/${elm._id}`}><AiFillEye color='#47ad86' size={25} /></Link>
                                {location.pathname !== "/admin" &&  <MdDelete color='#e36262' size={25} onClick={()=>handleShow(elm._id)} />}
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default UserTable;
