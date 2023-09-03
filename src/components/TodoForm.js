import { useState } from "react";
import moment from "moment";
import { Row, Col } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { useToDoStore } from "../store";

function TodoForm(props) {
  const { addToDoItem, removeAllToDo } = useToDoStore();

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDetails, setTaskDetails] = useState("");

  return (
    <>
      <Row>
        <Col md={12} className="mb-3">
          <div className="form-group">
            <label
              style={{
                fontSize: "18px",
                lineHeight: "24px",
                fontFamily: "sans-serif",
                marginBottom: "10px"
              }}
            >
              Add Task Title
            </label>
            <input
              type="text"
              placeholder="Enter Title Here ...."
              style={{
                padding: "5px 15px",
                fontSize: "18px",
                lineHeight: "24px",
                fontFamily: "sans-serif",
                width: "100%"
              }}
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
          </div>
        </Col>
        <Col md={12} className="mb-3">
          <div className="form-group">
            <label
              style={{
                fontSize: "18px",
                lineHeight: "24px",
                fontFamily: "sans-serif",
                marginBottom: "10px"
              }}
            >
              Add Task Details
            </label>
            <textarea
              type="text"
              placeholder="Enter task details ...."
              value={taskDetails}
              style={{
                padding: "5px 15px",
                fontSize: "18px",
                lineHeight: "24px",
                fontFamily: "sans-serif",
                minHeight: "200px",
                resize: "none",
                width: "100%"
              }}
              onChange={(e) => setTaskDetails(e.target.value)}
            />
          </div>
        </Col>
        <Col className="mb-3">
          <div className="form-group">
            <button
              className="btn btn-primary"
              onClick={(e) => {
                addToDoItem({
                  id: uuidv4(),
                  taskTitle,
                  taskDetails,
                  createdAt: moment().format("MMM Do YYYY")
                });
                setTaskTitle("");
                setTaskDetails("");
              }}
            >
              Add To Do Item
            </button>
            <button
              className="mx-2 btn btn-danger"
              onClick={() => {
                removeAllToDo();
                window.location.reload();
              }}
            >
              Remove All ToDo's
            </button>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default TodoForm;
