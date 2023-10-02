import React, { useState, useEffect } from 'react';
import './App.css';
import TaskBoard from './components/TaskBoard';
import AddTaskBoard from './components/AddTaskBoard';

function App() {
  // État pour la liste des tâches
  const [taskList, setTaskList] = useState({});

  // Utilisation de useEffect pour charger la liste des tâches depuis le stockage local
  useEffect(() => {
    const savedTaskList = localStorage.getItem('task_board');
    if (savedTaskList) {
      setTaskList(JSON.parse(savedTaskList));
    }
  }, []);

  // Fonction pour mettre à jour la liste des tâches
  const updateTaskList = (newTaskList) => {
    setTaskList(newTaskList);
    localStorage.setItem('task_board', JSON.stringify(newTaskList));
  };

  // Fonction pour ajouter un tableau de tâches
  const addBoard = (boardTitle) => {
    // Créer un nouveau tableau avec une liste de tâches vide
    const newBoardId = `board_${Date.now()}`;
    const newBoard = {
      name: boardTitle,
      task_items: {},
    };
  
    const updatedTaskList = { ...taskList };
    updatedTaskList[newBoardId] = newBoard;
  
    setTaskList(updatedTaskList);
  };
  
  return (
    <div className="App">
      <nav>
        <h2>Tableau Board Mariam Bril</h2>
      </nav>
      <div className="container">
        <div className="board">
          {/* Mapper les clés de la liste des tâches pour afficher les tableaux */}
          {Object.keys(taskList).map((boardId) => (
            <TaskBoard
              key={boardId}
              boardId={boardId}
              board={taskList[boardId]}
              updateTaskList={updateTaskList}
              taskList={taskList}
            />
          ))}
          {/* Composant pour ajouter un tableau de tâches */}
          <AddTaskBoard taskList={taskList} updateTaskList={updateTaskList} />
        </div>
      </div>
    </div>
  );
}

export default App;
