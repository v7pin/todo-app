import { useRef } from "react";
import styles from "./TodoInput.module.css";
import { MdAddCircle } from "react-icons/md";

let TodoInput = ({ onAddButton }) => {
  const todoTaskValue = useRef();
  const todoDateValue = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoTask = todoTaskValue.current.value;
    const todoDate = todoDateValue.current.value;

    if (todoTask === "" || todoDate === "") {
      alert("Please Enter Task and Due Date");
    } else {
      onAddButton(todoTask, todoDate);
    }

    todoTaskValue.current.value=''
    todoDateValue.current.value='';


  };

  return (
    <div className="container text-center">
      <form className="row todo-row" onSubmit={handleAddButtonClicked}>
        <div className="col-sm-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            ref={todoTaskValue}
            className={styles.input}
          />
        </div>
        <div className="col-sm-4">
          <input
            type="date"
            name=""
            id=""
            ref={todoDateValue}
            className={styles.input}
          />
        </div>
        <div className="col-sm-2">
          <button type="submit" className={` ${styles.button} btn btn-success`}>
            <MdAddCircle />
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoInput;
