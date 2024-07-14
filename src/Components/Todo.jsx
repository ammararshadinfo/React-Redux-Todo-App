import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/Todo/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  const dispatch = useDispatch();
  const clickHandler = (id) => {
    console.log("Delete", id);
    dispatch(deleteTodo(id));
  };
  return (
    <>
      <AddForm />
      <h1>Task List App</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task}
            <button onClick={() => clickHandler(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
