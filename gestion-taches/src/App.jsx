import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  function addTask() {
    if (task !== "") {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  }

  function toggleTask(index) {
    const updatedTasks = tasks.map((item, i) => {
      return i === index ? { ...item, completed: !item.completed } : item;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  return (
    <>
      <div className="min-h-screen bg-white flex items-center justify-center p-5">
        <div className="bg-slate-100 shadow-lg rounded-lg p-8 max-w-md w-full">
          <h1 className="text-3xl text-sky-800 font-bold mb-10 text-center">
            Gestion des Tâches
          </h1>
          <div className="flex items-center mb-8">
            <input
              className="w-full p-3 mr-2 border rounded"
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Nouvelle tâche..."
            />
            <button
              className="px-4 py-3 bg-blue-500 text-white rounded"
              onClick={addTask}
            >
              Ajouter
            </button>
          </div>
          <ul className="w-full flex flex-col items-center space-y-2">
            {tasks.map((item, index) => (
              <li
                className={`relative w-full flex items-center justify-between border rounded ${
                  item.completed
                    ? "bg-red-50 line-through text-gray-500"
                    : "bg-white"
                }`}
                key={index}
              >
                <p
                  className="w-full h-full px-2 py-3 cursor-pointer hover:bg-slate-200"
                  onClick={() => toggleTask(index)}
                >
                  {item.text}
                </p>
                <button
                  className={`absolute right-0 px-2 py-1 mr-2 bg-red-500 text-white rounded ${
                    item.completed && "bg-red-400 line-through"
                  }`}
                  onClick={() => deleteTask(index)}
                >
                  Supprimer
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
