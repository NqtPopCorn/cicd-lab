let tasks = [
  {
    id: 1,
    title: 'Learn CI/CD',
    completed: false,
  },
];

const getTasks = (req, res) => {
  res.status(200).json({
    success: true,
    data: tasks,
    message: 'Tasks fetched successfully',
  });
};

const getTaskById = (req, res) => {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));
  if (!task) {
    return res.status(404).json({
      success: false,
      message: 'Task not found',
    });
  }
  res.status(200).json({
    success: true,
    data: task,
    message: 'Task fetched successfully',
  });
};

const createTask = (req, res) => {
  const { title, completed } = req.body;
  if (!title) {
    return res.status(400).json({
      success: false,
      message: 'Title is required',
    });
  }

  const newTask = {
    id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
    title,
    completed: completed || false,
  };

  tasks.push(newTask);
  res.status(201).json({
    success: true,
    data: newTask,
    message: 'Task created successfully',
  });
};

const updateTask = (req, res) => {
  const { title, completed } = req.body;
  const taskIndex = tasks.findIndex((t) => t.id === parseInt(req.params.id));

  if (taskIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'Task not found',
    });
  }

  tasks[taskIndex] = {
    ...tasks[taskIndex],
    title: title !== undefined ? title : tasks[taskIndex].title,
    completed: completed !== undefined ? completed : tasks[taskIndex].completed,
  };

  res.status(200).json({
    success: true,
    data: tasks[taskIndex],
    message: 'Task updated successfully',
  });
};

const deleteTask = (req, res) => {
  const taskIndex = tasks.findIndex((t) => t.id === parseInt(req.params.id));

  if (taskIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'Task not found',
    });
  }

  const deletedTask = tasks.splice(taskIndex, 1);
  res.status(200).json({
    success: true,
    data: deletedTask[0],
    message: 'Task deleted successfully',
  });
};

module.exports = {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
