import { Card } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import { useToDoStore } from "../store";

function TodoList(props) {
  const { formData } = props;

  const { removeSelectedToDo } = useToDoStore();

  const removeSingleTodo = (id) => {
    let userChoice = window.confirm("Are you sure, you want to delete this ?");
    if (userChoice) removeSelectedToDo(id);
  };

  return (
    <>
      {formData.map((item, index) => {
        return (
          <Card key={item.id} className="mb-3">
            <Card.Header>
              <div className="d-flex justify-content-between">
                <span>{item.taskTitle}</span>
                <span className="d-flex align-items-center gap-2">
                  {item.createdAt}{" "}
                  <FaTrashAlt
                    onClick={() => removeSingleTodo(item.id)}
                    style={{ color: "red", cursor: "pointer" }}
                  />
                </span>
              </div>
            </Card.Header>
            <Card.Body>{item.taskDetails}</Card.Body>
          </Card>
        );
      })}
    </>
  );
}

export default TodoList;
