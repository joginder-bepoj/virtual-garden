import React, { useState } from 'react'
import Garden from './Garden'
import "./maingarden.css"
import { UserStore } from '../../../Storage/UserStorage'
import { useNavigate} from "react-router-dom"  
import {  Button, Modal, NavDropdown, Form } from 'react-bootstrap'
import axios from 'axios'
import { InfinitySpin } from 'react-loader-spinner'
import { toast } from 'sonner'

const MainGarden = () => {
  const {gardens, userId, setIsGardenCreated, setIsGardenDeleted} = UserStore()
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)
  const [gardenName, setGardenName] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [gardenId, setGardenId] = useState(null)
  
  const handleCloseDeleteModal = () => setShowDeleteModal(false)


  const handleCreateGarden = () => {
    try {
      if(gardens?.length >3){
        toast.error("Garden reached at limits delete a garden first")
      }else{
        setShowModal(true)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleCloseModal = () => setShowModal(false)

  const handleCreate = async() =>{
    setIsLoading(true)
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/garden/create`,
        { userId, gardenName }
      )
      if(res.data){
        setIsLoading(false)
        setIsGardenCreated(true)
        handleCloseModal()
      }
    } catch (error) {
      console.log(error)
      isLoading(false)
    }
  }

  const handleDelete = async() =>{
    setIsLoading(true)
    try {
      // /api/garden/delete/:id
      const res = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/api/garden/delete/${gardenId}`
      )
      setIsLoading(false)
      if(res.data){
        setIsGardenDeleted(true)
        handleCloseDeleteModal()
      }
      
    } catch (error) {
      setIsLoading(false)
    }
  }




  return (
    <>
    <div className='d-flex justify-content-between align-items-center mt-2'>
      <h3 className='text-center m-3 p-0'>Virtual Garden</h3>
      <div className='me-3'>
        <NavDropdown title="Menu" id="basic-nav-dropdown" >
              <NavDropdown.Item onClick={handleCreateGarden}>Create Garden</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={()=>setShowDeleteModal(true)}>Delete garden</NavDropdown.Item>
        </NavDropdown>
      </div>
    </div>
    <div className="row">
      {
        gardens?.map((item)=>(
          <div className="col-md-6 text-center" key={item?._id} onClick={()=> navigate(`/user/view/${item?._id}`) } ><Garden data="24px" />{item.name}</div>
        ))
      }
    </div>  
    { isLoading &&  <div style={{position: "absolute", top: "30%", left: "40%", zIndex: 99}}>
      <InfinitySpin 
      width='200'
      color="#4fa94d"
      />
      </div>
    }  
    <Modal show={showModal} onHide={handleCloseModal} centered >
        <Modal.Header closeButton>
          <Modal.Title>Lets create a garden</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Control  type="text" placeholder="garden name" value={gardenName} onChange={(e)=>setGardenName(e.target.value)} />
        <Button onClick={handleCreate} >Create garden</Button>
        </Modal.Body>
      </Modal>

    <Modal show={showDeleteModal} onHide={handleCloseDeleteModal} centered>
      <Modal.Header closeButton>
      <Modal.Title>Please select garden to delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form.Select onChange={(e)=>setGardenId(e.target.value)}>
      <option value="" >select a garden</option>
        {gardens?.map((item)=>(
          <option value={item._id} key={item._id}>{item.name}</option>
        ))}
    </Form.Select>
          <div className='d-flex justify-content-around m-3'>
          <Button variant="primary" onClick={handleDelete}>Yes</Button>
          <Button variant="danger" onClick={handleCloseDeleteModal}>No</Button>
          </div>
      </Modal.Body>
    </Modal>

    </>
  )
}

export default MainGarden
