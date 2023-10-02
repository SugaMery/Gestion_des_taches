import React from 'react';
import Task from './Task';

const TaskList = ({ list }) => {
  return (
    <div className="task-list">
      {/* Afficher le nom de la liste */}
      <h2>{list.name}</h2>

      {/* Afficher la liste des tâches */}
      <ul>
        {list.items.map((item) => (
          <Task key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
