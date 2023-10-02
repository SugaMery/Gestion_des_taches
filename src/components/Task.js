import React, { useState } from 'react';

const Task = ({ taskId, boardId, task, updateTaskList, taskList }) => {
  // État pour le mode d'édition
  const [isEditing, setIsEditing] = useState(false);
  // État pour la tâche éditée
  const [editedTask, setEditedTask] = useState({ ...task });

  // Gérer le clic sur le bouton "Modifier"
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // Gérer le clic sur le bouton "Enregistrer"
  const handleSaveClick = () => {
    // Assurez-vous que taskList et boardId existent avant la mise à jour
    if (taskList && boardId) {
      const updatedTaskList = { ...taskList };
      const updatedBoard = { ...updatedTaskList[boardId] };

      // Assurez-vous que le tableau et taskId existent avant la mise à jour
      if (updatedBoard && updatedBoard.task_items && updatedBoard.task_items[taskId]) {
        updatedBoard.task_items[taskId] = editedTask;
        updatedTaskList[boardId] = updatedBoard;
        updateTaskList(updatedTaskList);
        setIsEditing(false);
      }
    }
  };

  // Gérer le clic sur le bouton "Annuler"
  const handleCancelClick = () => {
    setIsEditing(false);
    // Réinitialiser l'état de la tâche éditée
    setEditedTask({ ...task });
  };

  // Gérer le clic sur le bouton "Supprimer"
  const handleDeleteClick = () => {
    // Assurez-vous que taskList et boardId existent avant la suppression
    if (taskList && boardId) {
      const updatedTaskList = { ...taskList };
      const updatedBoard = { ...updatedTaskList[boardId] };

      // Assurez-vous que le tableau et taskId existent avant la suppression
      if (updatedBoard && updatedBoard.task_items && updatedBoard.task_items[taskId]) {
        delete updatedBoard.task_items[taskId];
        updatedTaskList[boardId] = updatedBoard;
        updateTaskList(updatedTaskList);
      }
    }
  };

  // Gérer les changements dans les champs de saisie
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  return (
    <li className={`task ${isEditing ? 'editing' : ''} task-item`}>
      <div className="task-details ">
        {isEditing ? (
          <>
            <input
              type="text"
              name="name"
              value={editedTask.name}
              onChange={handleInputChange}
            />
            <textarea
              name="desc"
              value={editedTask.desc}
              onChange={handleInputChange}
            ></textarea>
          </>
        ) : (
          <>
            <h4>{task.name}</h4>
            <p>{task.desc}</p>
          </>
        )}
        <div className="task-actions">
          {isEditing ? (
            <button className="buttonS" onClick={handleSaveClick}>Enregistrer</button>
          ) : (
            <button className="buttonS" onClick={handleEditClick}>Modifier</button>
          )}
          {isEditing ? (
            <button className="buttonD" onClick={handleCancelClick}>Annuler</button>
          ) : (
            <button className="buttonD" onClick={handleDeleteClick}>Supprimer</button>
          )}
        </div>
      </div>
    </li>
  );
};

export default Task;
