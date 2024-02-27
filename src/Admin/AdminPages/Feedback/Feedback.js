import React, { useEffect, useState } from "react";
import "./feedback.css";
import { AdminStore } from "../../../Storage/AdminStorage";
import FeedbackTable from "../../../Components/Admin/Table/FeedbackTable";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";
import { toast } from "sonner";


function Feedback() {
  const { adminDarkTheme } = AdminStore();
  const [userFeedback, setUserFeedback] = useState([]);
  const [initalfeedback, setInitalFeedback] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [view, setView] = useState(false);
  const [viewOneFeedback, setViewOneFeedback] = useState(null);
  const [search, setSearch] = useState("");
  const [action, setAction] = useState("");
  const [reply, setReply] = useState("");

  useEffect(() => {
    setUserFeedback((item) =>
      item.filter((item) =>
        item.subject.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      )
    );
    if (search === "") {
      return setUserFeedback(initalfeedback);
    }
  }, [initalfeedback, search]);

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    setSelectedUser(id);
  };

  const handleViewClose = () => setView(false);
  const handleViewShow = async (id) => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/feedback/get-one/${id}`
      );
      setView(true);
      setSelectedUser(id);
      setViewOneFeedback(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/api/feedback/get`
        );
        setUserFeedback(res.data);
        setInitalFeedback(res.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [selectedUser]);

  const deleteFeedback = async () => {
    try {
      const res = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/api/feedback/del/${selectedUser}`
      );
      if (res) {
        setSelectedUser(null);
        handleClose();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleActionQuery = async () => {
    try {
      if(action === "" || reply === ""){
        toast.error("hello")
      }else{
      await axios.put(
        `${process.env.REACT_APP_BASE_URL}/api/feedback/update/${selectedUser}`,
        {status: action , reply:reply}
      );
      toast.success("Query Status Updated");
      setSelectedUser(null);
      handleViewClose();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-12 col-md-3 mt-4">
          <div
            className={`${
              adminDarkTheme ? "card-dark" : "card-light"
            } p-2 pt-3`}
          >
            <h3 className="text-center">Total Query </h3>
            <div className="d-flex gap-3 align-items-center justify-content-center">
              <div title="Active" className="status-total mb-2"></div>
              <h1 className="text-center">{initalfeedback.length}</h1>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 mt-4">
          <div
            className={`${
              adminDarkTheme ? "card-dark" : "card-light"
            } p-2 pt-3`}
          >
            <h3 className="text-center">Active Query </h3>
            <div className="d-flex gap-3 align-items-center justify-content-center">
              <div title="Active" className="status-active mb-2"></div>
              <h1 className="text-center">
                {
                  initalfeedback.filter((item) => item.status === "active")
                    .length
                }
              </h1>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 mt-4 ">
          <div
            className={`${
              adminDarkTheme ? "card-dark" : "card-light"
            } p-2 pt-3`}
          >
            <h3 className="text-center">Resolved Query </h3>
            <div className="d-flex gap-3 align-items-center justify-content-center">
              <div title="Active" className="status-resolve mb-2"></div>
              <h1 className="text-center">
                {
                  initalfeedback.filter((item) => item.status === "resolve")
                    .length
                }
              </h1>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 mt-4 ">
          <div
            className={`${
              adminDarkTheme ? "card-dark" : "card-light"
            } p-2 pt-3`}
          >
            <h3 className="text-center">Rejected Query </h3>
            <div className="d-flex gap-3 align-items-center justify-content-center">
              <div title="Reject" className="status-reject mb-2"></div>
              <h1 className="text-center">
                {
                  initalfeedback.filter((item) => item.status === "reject")
                    .length
                }
              </h1>
            </div>
          </div>
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
          <Button variant="primary" onClick={deleteFeedback}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={view} onHide={handleViewClose}>
        <Modal.Header>
          <Modal.Title>{viewOneFeedback?.subject}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{viewOneFeedback?.query}</p>

          <form style={{marginBottom:"1rem"}}>
            <input
              style={{width:"25vw"}} 
              type="text" 
              name="reply"
              placeholder="Reply"
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              />
          </form>

          <select
            onChange={(e) => setAction(e.target.value)}
            value={action}
            style={{ border: "none", outline: "none", cursor: "pointer"}}
          >
            <option value={""}>Please Select</option>
            <option value={"solve"}>Solve</option>
            <option value={"reject"}>Reject</option>
            <option value={"active"}>Active</option>
          </select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleActionQuery}>
            Action
          </Button>
        </Modal.Footer>
      </Modal>

      <div
        className={`m-2  p-2 ${adminDarkTheme ? "card-dark" : "card-light"} `}
      >
        <div className="d-flex justify-content-between">
          <h3 className="text-center p-3">Feedback</h3>
          <div className="d-flex  m-3 gap-4">
            <input
              placeholder="Name/Number/Email"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              className={`${!adminDarkTheme && "theme-light "} form-control`}
            />
          </div>
        </div>
        <FeedbackTable
          setShow={handleShow}
          userFeedback={userFeedback}
          setView={handleViewShow}
        />
      </div>
    </>
  );
}

export default Feedback;
