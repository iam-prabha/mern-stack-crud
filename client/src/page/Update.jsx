import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const Update = () => {
  const navigate = useNavigate();
  const [newTodo, setNewTodo] = useState("");
  const [isLoading, setLoading] = useState(false);
  const { id } = useParams();


  //update
  const handleUpdate = () => {
    axios
      .put(`https://mern-stack-crud-api.vercel.app/updated/${id}`, { newTodo })
      .then((result) => {
        console.log(result.data);
        setNewTodo(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
    navigate("/");
    setLoading(true);
    setLoading(false);
  };


  return (
    <div className="h-screen w-screen pt-2 bg-orange-400">
      <div className="flex justify-center items-center shadow  max-w-xl m-auto p-2">
        <form>
          <div className="text-center text-xl text-white p-2">
            <h1>Update Task!</h1>
          </div>
          <div className="outline-none bg-white rounded">
            <input
              type="text"
              onChange={(e) => setNewTodo(e.target.value)}
              value={newTodo}
              autoFocus={true}
              className="outline-none p-2"
              placeholder="Enter the tody's task?"
            />
            <button
              type="button"
              className="bg-blue-300 rounded p-[6.8px] text-xs"
              onClick={handleUpdate}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
