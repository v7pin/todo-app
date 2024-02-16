import TodoItem from "./TodoItem";

let TodoItems=({todoEachItem,onDeleteButtonClicked})=>{

  return(
    <div className="item-container">
      {todoEachItem.map((item)=>(
        <TodoItem key={item.todoName} todoName={item.todoName} todoDate={item.todoDate}
        onDeleteButtonClicked={onDeleteButtonClicked}>{todoEachItem}</TodoItem>


      ))}
    </div>
  )
};


export default TodoItems;