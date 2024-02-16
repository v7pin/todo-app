import { RiDeleteBin7Fill } from "react-icons/ri";
import styles from "./TodoItem.module.css";
let TodoItem=({todoName,todoDate,onDeleteButtonClicked})=>{



  return (
    <div className="container">
      <div className="row todo-row">
        <div className="col-sm-6">{todoName}</div>
        <div className="col-sm-4">{todoDate}</div>
        <div className="col-sm-2">
          <button type="button" className={`${styles.button} btn btn-danger`}
          onClick={()=>onDeleteButtonClicked(todoName)}>
          <RiDeleteBin7Fill />
          </button>
        </div>
      </div>
    </div>  
    
  );




}


export default TodoItem;