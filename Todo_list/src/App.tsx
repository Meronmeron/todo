import React, { useState, ChangeEvent, FormEvent } from 'react';
import Task from './components/Task';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  const handleTaskChange = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleNewTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = (event: FormEvent) => {
    event.preventDefault();
    if (newTask.trim() !== '') {
      const updatedTasks = [...tasks, { name: newTask, completed: false }];
      setTasks(updatedTasks);
      setNewTask('');
    }
  };

  return (
    <div className="bg-black w-full h-screen flex items-center">
    <div className="w-[500px] mx-auto rounded-lg text-center bg-white p-5 ">
    <h1 className="text-5xl font-bold mb-8">Todo List</h1>

      <form onSubmit={handleAddTask} className="mb-4">
        <input
          type="text"
          value={newTask}
          onChange={handleNewTaskChange}
          className="border-2 placeholder:text-gray-500 rounded-lg border-black w-full p-5 mb-5 text-black"     placeholder="Add a new task..."
        />
        <button type="submit" className="bg-red-600 text-white py-3 px-8 rounded-lg mb-8">
          Add Task
        </button>
      </form>

      <ul>
        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            onTaskChange={() => handleTaskChange(index)}
            onDeleteTask={() => handleDeleteTask(index)}
          />
        ))}
      </ul>
    </div>
  </div>
  );
};

export default App;