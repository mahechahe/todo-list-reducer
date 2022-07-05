import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";


export const TaskList = () => {
  const { state, deleteTask, toggleTaskDone } = useContext(GlobalContext);

  return (
    <div className="flex justify-center">
      <div className="w-6/12">
        {state.tasks.map((task) => (
          <div
            key={task.id}
            className="w-full bg-gray-900 px-20 py-5 text-white shadow-2xl mb-4 flex justify-between"
          >
            <div>
              <h1>{task.title}</h1>
              <p>{task.description}</p>
              <button onClick={() => toggleTaskDone(task.id)} className="bg-purple-600 hover:bg-purple-500 py-1 px-3 mt-2">{task.done ? 'Undone' : 'Done'}</button>
            </div>
            <div>
              <Link to={`/edit/${task.id}`}>
                <button className="bg-gray-600 hover:bg-gray-500 py-2 px-4 mr-2">
                  Edit
                </button>
              </Link>
              <button
                className="bg-red-600 hover:bg-red-500 py-2 px-4 mr-2"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
