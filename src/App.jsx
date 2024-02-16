import TodoHeading from "./components/TodoHeading";
import TodoInput from "./components/TodoInput";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessgae from "./components/WelcomeMessage";

function App() {

  const [todoList, setTodoList] = useState([]);

  const handleTodoList = (todoTask, todoDueDate) => {

    let newItemAdded = [
      ...todoList,
      {
        todoName: todoTask,
        todoDate: todoDueDate,
      }
    ];
    setTodoList(newItemAdded);
  };

  const handleDeleteButtonClicked=(deleteTodoItem)=>{

    const newTodoList = todoList.filter((item) => item.todoName !== deleteTodoItem);
    setTodoList(newTodoList);
  }



  return (
    <center className="todo-container">
      <TodoHeading></TodoHeading>
      <TodoInput onAddButton={handleTodoList}></TodoInput>
      {todoList.length===0 && <WelcomeMessgae></WelcomeMessgae>}
      <div className="item-container">
        <TodoItems todoEachItem={todoList}
        onDeleteButtonClicked={handleDeleteButtonClicked}></TodoItems>
      </div>
    </center>
  );
}

export default App;
