import { useReducer, useState } from "react";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";
import { tasksReducer, initialTasks } from "../../reducers/tasksReducer";
import { TasksContext } from "../../context/tasksContext";
import AddTaskModal from "./AddTaskModal";
import NoTaskFound from "./NoTaskFound";

export default function TaskBord() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  const [showModal, setShowModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);
  function handleEditTask(task) {
    setTaskToUpdate(task);
    setShowModal(true);
  }
  function handleAdd() {
    setShowModal(true)
    setTaskToUpdate(null)
  }
  function handleClose() {
    setShowModal(false);
    setTaskToUpdate(null);
  }
  function handleDelete(taskId) {
    dispatch({
      type: "Delete",
      taskId,
    })
  }
  function handleAllDelete() {
    dispatch({
      type: 'Delete-All'
    })
  }
  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      <section className="mb-20" id="tasks">
        {showModal && (
          <AddTaskModal
            setShowModal={setShowModal}
            taskToUpdate={taskToUpdate}
            onClose={handleClose}
          />
        )}
        <div className="container">
          {/* <!-- Search Box Ends --> */}
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskActions onAdd={handleAdd} onAllDelete={handleAllDelete} />
            {
              tasks.length > 0 ? (<TaskList onEdit={handleEditTask} onDelete={handleDelete} />) : <NoTaskFound />
            }
          </div>
        </div>
      </section>
    </TasksContext.Provider>
  );
}
