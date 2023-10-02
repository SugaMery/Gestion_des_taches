import React, { useState } from 'react';

const AddTaskBoard = ({ taskList, updateTaskList }) => {
  // État pour le titre du tableau
  const [boardTitle, setBoardTitle] = useState('');

  // Fonction pour gérer l'ajout d'un nouveau tableau de tâches
  const handleAddTaskBoard = () => {
    if (boardTitle.trim() === '') return;

    // Générer un nouvel identifiant de tableau
    const newBoardId = `task_${Date.now()}`;
    
    // Créer une nouvelle copie de la liste de tâches
    const newTaskList = { ...taskList };
    
    // Ajouter le nouveau tableau à la liste de tâches
    newTaskList[newBoardId] = {
      name: boardTitle,
      task_items: {},
    };

    // Mettre à jour la liste de tâches et réinitialiser le titre du tableau
    updateTaskList(newTaskList);
    setBoardTitle('');
  };

  return (
    <div className="task-listEnd">
      {/* Champ de saisie pour le titre du tableau */}
      <input
        type="text"
        placeholder="Titre du tableau"
        value={boardTitle}
        onChange={(e) => setBoardTitle(e.target.value)}
      />

      {/* Bouton pour ajouter un nouveau tableau de tâches */}
      <button className="primary buttonS" onClick={handleAddTaskBoard}>
        Ajouter un nouveau tableau de tâches
      </button>
    </div>
  );
};

export default AddTaskBoard;
