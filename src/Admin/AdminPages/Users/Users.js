import React, { useEffect, useState } from 'react'
import './user.css'

// import { MdRemoveRedEye } from 'react-icons/md'
import { AdminStore } from '../../../Storage/AdminStorage';
// import { GiAchievement } from 'react-icons/gi';
import UserTable from '../../../Components/Admin/Table/UserTable';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';
import { toast } from 'sonner';

function Users() {
    const { adminDarkTheme } = AdminStore()
    const [usersData, setUsersData] = useState([])
    const [intialData, setIntialData] = useState(null)
    const [selectedUser, setSelectedUser] = useState(null)
    const [searchTerm, setSearchTerm] = useState('');
    const [show, setShow] = useState(false);
    const [deactivateShow, setDeactivateShow] = useState(false);
    const [userDeActive, setUserDeActive] = useState();

    const handleClose = () => setShow(false);
    const handleShow = (id) => {
        setShow(true)
        setSelectedUser(id)
    };

    const handleDeactivateClose = () =>setDeactivateShow(false)
    const handleDeactivateShow = (id, actv) =>{
        setDeactivateShow(true);
        setUserDeActive(actv)
        setSelectedUser(id)
    }

    const handleDeactivate = async() =>{
        try {
            const res = await axios.put(`${process.env.REACT_APP_BASE_URL}/api/user/deactive/${selectedUser}`)
            if (res) {
                setSelectedUser(null)
                handleDeactivateClose()
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleActivate = async() =>{
        try {
            const res = await axios.put(`${process.env.REACT_APP_BASE_URL}/api/user/active/${selectedUser}`)
            if(res){
                setSelectedUser(null)
                handleDeactivateClose()
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleDelete = async () => {
        try {
            const res = await axios.delete(`${process.env.REACT_APP_BASE_URL}/api/user/delete/${selectedUser}`)
            if (res) {
                setSelectedUser(null)
                handleClose()
            }
        } catch (error) {
            toast.error("Something went wrong! Please try again later")
            console.log(error)
            handleClose()
        }
    }

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);

        const filtered = usersData.filter(user =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setUsersData(filtered);

        if (e.target.value === "") {
            setUsersData(intialData)
        }
    }

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/user/getall`)
                setUsersData(res.data)
                setIntialData(res.data)
            } catch (err) {
                console.log(err)
            }
        })()
    }, [selectedUser])

    return (
        <>
            <div className="py-1">
                <div className={`m-2  p-2 ${adminDarkTheme ? "card-dark" : "card-light"} `}>
                    <div className="d-flex justify-content-between">
                        <h3 className='text-center p-3'>Users</h3>
                        <div className='d-flex  m-3 gap-4'>
                            <input placeholder='Name' type="text" onChange={handleSearchChange} className={`${!adminDarkTheme && "theme-light "} form-control`} />
                        </div >
                    </div>
                    <UserTable data={usersData} handleShow={handleShow} handleDeactivateShow={handleDeactivateShow} />
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Do you Really want to delete this user</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={deactivateShow} onHide={handleDeactivateClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Activate or Deactivate user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Do you really want to deactivate this user</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleDeactivateClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={ userDeActive ? handleActivate :  handleDeactivate}>
                       {userDeActive ? "Activate" : "Deactivate"}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Users