import { useEffect, useState } from "react";
import axios from "axios";
import { UserStore } from "../../../Storage/UserStorage";
import { useParams } from "react-router-dom";
import { Button, Form, Modal } from "react-bootstrap";
import { MdAdd, MdDeleteOutline } from "react-icons/md";
import { toast } from "sonner";
import Spinner from "../../../Components/Spinner";

function Goalprogress() {
  const { userId, userTheme } = UserStore()
  const [goals, setGoals] = useState([])
  const [milestoneId, setMilestoneId] = useState(null)
  const [gardenId, setGardenId] = useState(null)
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [isLoadingRequired, setIsLoadingRequired] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  const {id} = useParams()

  const initialData = {
    name: "",
    description: "",
    dueDate: ""
  }

  const [formData, setFormData] = useState(initialData)
  
  useEffect(() =>{
    (async () => {
      setIsLoading(true)
      try {
        if (id && userId) {
          const res = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/api/garden/goal/${userId}/${id}`
          );
          setGoals(res.data);
          setGardenId(res.data.gardenId)
          setIsLoading(false)
        }
      } catch (error) {
        setIsLoading(false)
        ;
      }
    })();
  },[id, userId, isLoadingRequired])



  const handleCloseDeleteModal = () => setShowDeleteModal(false);
  const handleCloseCreateModal = () => setShowCreateModal(false);

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      const res = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/api/garden/${gardenId}/${id}/milestones/${milestoneId}`
      );
      setIsLoading(false);
      if (res.data) {
        handleCloseDeleteModal();
        setMilestoneId(null)
        setIsLoadingRequired(prev => !prev)
        toast.info("Goal deleted successfully")
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e, mileId) =>{
    e.preventDefault()
    setIsLoading(true)
    try {
      const res = await axios.put(`${process.env.REACT_APP_BASE_URL}/api/garden/${gardenId}/${id}/milestones/${mileId}`, {isCompleted: true})
      if(res.data){
        toast.success("Milestone Status Updated");
        setIsLoading(false)
        setIsLoadingRequired(prev => !prev)
      }
    } catch (error) {
      setIsLoading(false)
    }
  }

  const handleDataChange = (e) =>{
    const {name, value} = e.target;
    setFormData((prev)=>({...prev, [name]: value}))
  }

  const handleCreateMilestone = async (e) =>{
    e.preventDefault();
    setIsLoading(true)
    try {
      if(formData.name === ""){
        setIsLoading(false);
        return toast.error("Please enter the milestone name")
      }else if(formData.description === "" || formData.description.length < 30){
        setIsLoading(false);
        return toast.error("Please enter at least 10 words of description")
      }else if(new Date() >= new Date(formData.dueDate)){
        setIsLoading(false);
        return toast.error("Please select the future date")
      }else{
        try {
          const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/garden/${gardenId}/${id}/milestones`, {name: formData.name, description: formData.description, dueDate: formData.dueDate})
          if(res.data){
            toast.success(res.data.message)
            setIsLoading(false)
            setShowCreateModal(false)
            setIsLoadingRequired(prev => !prev)
            setFormData(initialData)
          }
        } catch (error) {
          setIsLoading(false)
        }
      }
    } catch (error) {
      
      setIsLoading(false)
    }
  }



  return (
    <>
      <h2 className="mt-5">Goal Progress</h2>
      <div className="d-flex left-0 px-3">
        <h3>List of goal progress</h3>
      </div>
      <div  className={`${userTheme ? 'card-light ' : 'card-dark'} p-3 rounded-3 m-3 row`}>
        <div className="d-flex align-items-start ps-2 flex-column col-md-10">
          <h5>Garden Name: {goals?.name}</h5>
            <p><span className="fw-bold">Goal Des: </span>{goals?.description}</p>
        </div>
        <div className="d-flex flex-column col-md-2 align-items-start">
          <p><span className="fw-bold">Goal type: </span>{goals?.goalType}</p>
          <p><span className="fw-bold">Goal frequency: </span>{goals?.frequency}</p>
        </div>
      </div>

      {isLoading && <Spinner />}
      <div>
        {goals?.milestones?.map((elm) => (
        <div className={`${userTheme ? 'card-light' : 'card-dark'} p-2 rounded-2 d-flex justify-content-between align-items-center goals-milestone row`} key={elm._id} >
          <div className="text-start ps-3 col-md-5" >
            <p className="m-0"><span className="fw-bold">Name:</span> {elm.name}</p>
            <p className="m-0"><span className="fw-bold">Description:</span> {elm.description}</p>
            <p className="m-0"><span className="fw-bold">Due Date:</span>  {new Date(elm.dueDate).toDateString()}</p>
          </div>
          <div className="col-md-5" >
            <p className="m-0"><span className="fw-bold">Status:</span> {elm.isCompleted ? "Milestone Completed": "Milestone Pending"}</p>
            {
              !elm.isCompleted && <Button onClick={(e)=>handleSubmit(e, elm._id)} className="cursor-pointer" variant="primary">Submit milestone</Button>
            }
          </div>
          <div className="pe-2 col-md-2" >
            {
              !elm.isCompleted && <Button className="cursor-pointer" variant="outline-danger" onClick={()=>{setShowDeleteModal(true); setMilestoneId(elm?._id)}}><MdDeleteOutline size={20}/></Button>
            }
          </div>
        </div>
         ))}
      </div>

      {goals?.milestones?.length < 4 && <div className={userTheme ? "text-muted": "text-white"} >
        <h4>Add new Milestone</h4>
        <Button
          variant="outline-success rounded-5 ps-3 pe-3"
          onClick={()=>setShowCreateModal(true)}
        >
          <MdAdd size={30} className="pe-2" />
          Create{" "}
        </Button>
      </div>}


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

      <Modal size="md" show={showCreateModal} onHide={handleCloseCreateModal} centered>
        <Modal.Header closeButton>
          <Modal.Title style={{fontSize:"18px"}}>Add a new milestone</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleCreateMilestone}>
            <Form.Group className="mb-2">
              <Form.Label>Milestone Name</Form.Label>
              <Form.Control type="name" name="name" value={formData.name} onChange={handleDataChange} placeholder="Enter email" className={`${userTheme ? "theme-bg-light border" : "theme-bg-dark"}`} />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" name="description" value={formData.description} onChange={handleDataChange} placeholder="description" className={`${userTheme ? "theme-bg-light border" : "theme-bg-dark"}`}  />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Due Date</Form.Label>
              <Form.Control type="date" name="dueDate" value={formData.dueDate} onChange={handleDataChange} className={`${userTheme ? "theme-bg-light border" : "theme-bg-dark"}`}  />
            </Form.Group>
            <Button type="submit">Submit</Button>
            <Button className="ms-2" variant="outline-danger" type="submit" onClick={handleCloseCreateModal}>Cancel</Button>
          </Form>
        </Modal.Body>
      </Modal>


    </>
  );
}

export default Goalprogress;

