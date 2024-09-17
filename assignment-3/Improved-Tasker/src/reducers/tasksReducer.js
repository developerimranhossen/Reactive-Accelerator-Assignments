const initialTasks = [
  {
    id: crypto.randomUUID(),
    title: "Learn React",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, excepturi?",
    tags: ["web", "react", "js"],
    priority: "High",
    isFav: true,
  },
];

const tasksReducer = (tasks, action) => {
  switch (action.type) {
    case "Add":
      return [...tasks, action.newTask];

    case "Edit":
      return tasks.map((task) => {
        if (task.id === action.newTask.id) {
          return action.newTask;
        }
        return task;
      });
    case "Delete":
      return tasks.filter((task) => task.id !== action.taskId);
    case "Delete-All":
      tasks.length = 0;
      return [...tasks];

    case "Fav":
      return action.newTasks;
    case "Search":
       return [...action.filtered];
  }
};

export { initialTasks, tasksReducer };
