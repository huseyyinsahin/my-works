import { useState } from "react";
import TaskCreate from "./taskCreate";

import TasksContext from "../context/task";
import {useContext } from "react";

function TaskShow({ task }) {
  const{editTaskById,deleteTaskById}=useContext(TasksContext);

  const [showEdit, setShowEdit] = useState(false);
  function handleDeleteClick() {
    // onDelete(task.id);
    deleteTaskById(task.id);
  }
  function handleEditClick() {
    setShowEdit(!showEdit);
  }
  function handleSubmit(id,updatedTitle,updatedTaskDesc) {
    setShowEdit(false);
    // onUpdate(id,updatedTitle,updatedTaskDesc);
    editTaskById(id,updatedTitle,updatedTaskDesc);
  }
  
  console.log(task);
  return (

    <div className="task-show">
      {showEdit ? (
        <TaskCreate task={task} taskformUpdate={true} onUpdate={handleSubmit} />
      ) : (
        <div>
          <h3 className="task-title">Göreviniz</h3>
          <p>{task.title}</p>
          <h3 className="task-title">Yapılacaklar</h3>
          <p>{task.taskDesc}</p>
          <div>
            <button className="task-delete" onClick={handleDeleteClick}>
              Sil
            </button>
            <button className="task-edit" onClick={handleEditClick}>
              Güncelle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
