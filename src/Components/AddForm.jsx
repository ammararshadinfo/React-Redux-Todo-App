import { useState } from "react";
import { useDispatch } from "react-redux";
import { addtodo } from "../features/Todo/todoSlice";
export default function AddForm() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(task);
    dispatch(addtodo(task));
    setTask("");
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={(e) => setTask(e.target.value)}></input>
        <button>Add Task</button>
      </form>
    </>
  );
}
