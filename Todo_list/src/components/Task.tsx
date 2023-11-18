import React from 'react';

interface TaskProps {
  task: Task;
  onTaskChange: () => void;
  onDeleteTask: () => void;
}

interface Task {
  name: string;
  completed: boolean;
}

const Task: React.FC<TaskProps> = ({ task, onTaskChange, onDeleteTask }) => {
  return (
    <div className='todo-show-area'>
      <li className={`bg-black mb-5 text-white flex justify-between text-2xl  py-5 rounded-lg px-5" ${task.completed ? 'line-through text-gray-500' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={onTaskChange}
        className="ml-5"
      />
      {task.name}
      <span
        onClick={onDeleteTask}
        className="mr-5 text-red-600 cursor-pointer"
      >
      🗑
      </span>
    </li>

    </div>
    
  );
};

export default Task;
