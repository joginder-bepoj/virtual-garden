import React, { useState } from "react";
import Garden from "./Garden";
import "./maingarden.css";
import { UserStore } from "../../../Storage/UserStorage";
import { useNavigate } from "react-router-dom";
import { Button, Modal, Form } from "react-bootstrap";
import axios from "axios";
import { toast } from "sonner";
import { MdAdd, MdDeleteOutline } from "react-icons/md";
import Spinner from "../../../Components/Spinner";

const MainGarden = () => {
  // const {  } = UserStore();
  const {userTheme, gardens, userId, setIsGardenCreated, setIsGardenDeleted } =
    UserStore();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [gardenName, setGardenName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [gardenId, setGardenId] = useState(null);

  const handleCloseDeleteModal = () => setShowDeleteModal(false);

  const handleCreateGarden = () => {
    try {
      if (gardens?.length > 3) {
        toast.error("Garden reached at limits delete a garden first");
      } else {
        setShowModal(true);
      }
    } catch (error) {
      ;
    }
  };

  const handleCloseModal = () => setShowModal(false);

  const handleCreate = async () => {
    setIsLoading(true);
    try {
      if(gardenName?.length === 0 ){
        return toast.error("Please enter garden name")
      }
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/garden/create`,
        { userId, gardenName }
      );
      if (res.data) {
        setIsLoading(false);
        setIsGardenCreated((prev) => !prev);
        handleCloseModal();
        toast.success("Garden created successfully");
        setGardenName('')
      }
    } catch (error) {
      ;
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      // /api/garden/delete/:id
      const res = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/api/garden/delete/${gardenId}`
      );
      setIsLoading(false);
      if (res.data) {
        setIsGardenDeleted((prev)=>!prev);
        handleCloseDeleteModal();
        toast.info("Garden deleted successfully")
      }
    } catch (error) {
      setIsLoading(false);
    }
  };



  return (
    <>
      <div className="d-flex justify-content-between align-items-center mt-2">
        <h3 className="text-center m-3 p-0">Virtual Garden</h3>
        <div className="me-3">
          <Button variant={"outline-success"} onClick={handleCreateGarden} >
            Create New Garden
          </Button>
        </div>
      </div>

      <div className="row">
        {gardens?.length > 0 ? (
          gardens?.map((item) => (
            <div key={item?._id} className="col-md-6 text-center position-relative ext">
              <Button className="position-absolute z-2 end-0 me-4 mt-2 cursor-pointer nxt" variant="outline-danger" onClick={()=>{setShowDeleteModal(true); setGardenId(item?._id)}}><MdDeleteOutline size={20}/></Button>
              <div className=" text-center" onClick={() => navigate(`/user/view/${item?._id}`)}>
              <Garden data="24px" garden={item} />
              {item.name}
              </div>
            </div>
          ))
        ) : (
          <div className="text-muted" style={{ marginTop: "22vh" }}>
            <h1>No Garden Available!</h1>
            <h1>Please Create a Garden</h1>
            <Button
              variant="outline-success rounded-5 ps-3 pe-3"
              onClick={handleCreateGarden}
            >
              <MdAdd size={30} className="pe-2" />
              Create{" "}
            </Button>
          </div>
        )}
      </div>
      {isLoading && (<Spinner />)}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Lets create a garden</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            className={` ${userTheme ? "theme-bg-light border" : "theme-bg-dark"}`}
            type="text"
            placeholder="garden name"
            value={gardenName}
            onChange={(e) => setGardenName(e.target.value)}
          />
          <Button className="mt-3" onClick={handleCreate}>Create garden</Button>
        </Modal.Body>
      </Modal>

      <Modal size="sm" show={showDeleteModal} onHide={handleCloseDeleteModal} centered>
        <Modal.Header closeButton>
          <Modal.Title style={{fontSize:"18px"}}>Are you sure to delete garden</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-evenly">
            <Button variant="primary" onClick={handleDelete}>
              Yes
            </Button>
            <Button variant="danger" onClick={handleCloseDeleteModal}>
              No
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MainGarden;
