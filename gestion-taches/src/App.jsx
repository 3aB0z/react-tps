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
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
          <h1 className="text-3xl text-sky-800 font-bold mb-12 text-center">
            Gestion des Tâches
          </h1>
          <div className="flex gap-2 mb-4">
            <input
              className="flex-1 px-4 py-2 border rounded-md"
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Nouvelle tâche..."
            />
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
              onClick={addTask}
            >
              Ajouter
            </button>
          </div>
          <ul className="space-y-2">
            {tasks.map((item, index) => (
              <li
                key={index}
                className={`flex items-center justify-between p-2 border rounded-md hover:bg-slate-200 ${
                  item.completed ? "bg-green-200 line-through" : "bg-gray-50"
                }`}
              >
                <p className="cursor-pointer" onClick={() => toggleTask(index)}>
                  {item.text}
                </p>
                <button
                  onClick={() => deleteTask(index)}
                  className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
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
