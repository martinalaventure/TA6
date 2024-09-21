import './App.css';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if(task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  }

  return (
    <div className="App">
      <form onSubmit={addTask}>
        <input type="text" placeholder="Agregar tarea" value={task} onChange={(e) => setTask(e.target.value)} />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
