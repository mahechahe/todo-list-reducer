import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useNavigate, useParams } from "react-router-dom";

export const TaskForm = () => {
  const navigate = useNavigate();
  let params = useParams();

  const { addTask, state, updateTask } = useContext(GlobalContext);

  const [task, setTask] = useState({
    id: "",
    title: "",
    description: "",
  });

  useEffect(() => {
    const taskFound = state.tasks.find((task) => task.id === Number(params.id));

    if (taskFound) {
      setTask({
        id: taskFound.id,
        title: taskFound.title,
        description: taskFound.description,
      });
    }

  }, [params.id, state.tasks]);

  const handleChangeInput = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(task.id){
      updateTask(task)
      navigate("/");
    }else{
      addTask(task);
      navigate("/");
    }
  };

  return (
    <div className="flex justify-center items-center h-3/4">
      <form className="bg-gray-900 p-10" onSubmit={handleSubmit}>
        <h2 className="mb-7 text-2xl">
          {task.id ? "Editing a Task" : "Add Task"}
        </h2>
        <div className="mb-5">
          <input
            type="text"
            value={task.title}
            name="title"
            placeholder="Write a title"
            onChange={handleChangeInput}
            className="py-3 px-4 focus:text-gray-100  bg-gray-700 w-full focus:outline-none"
          ></input>
        </div>

        <div className="mb-5">
          <textarea
            value={task.description}
            name="description"
            rows="2"
            onChange={handleChangeInput}
            placeholder="Write a description"
            className="py-3 px-4 focus:text-gray-100  bg-gray-700 w-full focus:outline-none"
          ></textarea>
        </div>

        <button className="bg-green-600 w-full hover:bg-green-500 py-2 px-4 mt-5">
          {task.id ? "Edit Task" : "Create Task"}
        </button>
      </form>
    </div>
  );
};
