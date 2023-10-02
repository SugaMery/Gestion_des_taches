import React, { useState } from 'react';
import Task from './Task';

const TaskBoard = ({ boardId, board, updateTaskList, taskList, addTask }) => {
  // État pour le nom de la nouvelle tâche
  const [newTaskName, setNewTaskName] = useState('');
  // État pour gérer la visibilité de l'interface utilisateur (UI)
  const [showAddTaskUI, setShowAddTaskUI] = useState(false);

  // Gérer la suppression du tableau de tâches
  const handleDeleteBoard = () => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce tableau ?')) {
      const updatedTaskList = { ...taskList };
      delete updatedTaskList[boardId];
      updateTaskList(updatedTaskList);
    }
  };

  // Gérer le clic pour ajouter une nouvelle tâche
  const handleAddTaskClick = () => {
    // Afficher l'élément UI pour ajouter une nouvelle tâche
    setShowAddTaskUI(true);
  };

  // Gérer l'ajout d'une nouvelle tâche
  const handleAddTask = (taskName) => {
    if (taskName.trim() === '') return;

    const updatedBoard = { ...board };
    const taskId = `items_${Date.now()}`;
    updatedBoard.task_items[taskId] = {
      name: taskName,
      desc: '',
      priority: 'low',
    };

    const updatedTaskList = { ...taskList };
    updatedTaskList[boardId] = updatedBoard;

    updateTaskList(updatedTaskList);
    setNewTaskName(''); // Effacer le champ de saisie après avoir ajouté une tâche
    setShowAddTaskUI(false); // Masquer l'élément UI après avoir ajouté une tâche
  };

  return (
    <div className="task-list">
      <div className="header">
        <h2>{board.name}</h2>
        <div className="d-flex">
          <button
            className="add-task-button"
            onClick={handleAddTaskClick} // Afficher l'élément UI pour ajouter une nouvelle tâche
          >
            Ajouter une nouvelle tâche
          </button>
          <button className="task-close" onClick={handleDeleteBoard}>
            Supprimer le tableau
          </button>
        </div>
      </div>
      {showAddTaskUI ? ( // Rendre conditionnellement l'élément UI
        <div className="add-task-ui form">
          <input
            type="text"
            placeholder="Nom de la tâche"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
          />
          <button className="buttonS" onClick={() => handleAddTask(newTaskName)}>Ajouter la tâche</button>
          <button className="buttonD"  onClick={() => setShowAddTaskUI(false)}>Annuler</button>
        </div>
      ) : null}
      <ul task-board={boardId} className="list">
        {Object.keys(board.task_items).map((taskId) => (
          <Task
            key={taskId}
            taskId={taskId}
            boardId={boardId}
            task={board.task_items[taskId]}
            updateTaskList={updateTaskList}
            taskList={taskList}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskBoard;
