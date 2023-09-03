import { Container, Row, Col } from "react-bootstrap";

import { useToDoStore } from "./store";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/ToDoList";

function App() {
  const { toDoItems } = useToDoStore();

  return (
    <Container className="py-4">
      <Row>
        <Col md={6}>
          {/* Todo Form */}
          <TodoForm />
        </Col>
        <Col md={6}>
          {/* Todo List */}
          <TodoList formData={toDoItems} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
