import React, { useEffect, useState } from "react";
import { Trash2, PenLine } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";
const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isLoading, setLoading] = useState(false);
  // get data (fetch)
  useEffect(() => {
    const fetchTodo = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://mern-stack-crud-api.vercel.app/getall");
        setTodos(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchTodo();
  }, []);
  //handlesubmit for
  const handleSubmit = async () => {
    await axios
      .post("https://mern-stack-crud-api.vercel.app/add", { todo })
      .then((result) => {
        setTodos([...todos, result.data]);
      })
      .catch((err) => {
        console.error(err.message);
      });
    setTodo("");
  };

  //delete task
  const handleDelete = async (id) => {
    await axios
      .delete(`hhttps://mern-stack-crud-api.vercel.app/delete/${id}`)
      .then((response) => {
        setTodos(todos.filter((todo) => todo._id !== id));
        setLoading(true);
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
    setLoading(false);
  };

  return (
    <div className="h-screen w-screen pt-2 bg-orange-400">
      <div className="flex justify-center items-center shadow max-w-xs m-auto p-2">
        <form>
          <div className="text-center text-xl text-white p-2">
            <h1>Get Things done!</h1>
          </div>
          <div className="outline-none bg-white rounded">
            <input
              type="text"
              onChange={(e) => setTodo(e.target.value)}
              value={todo}
              autoFocus={true}
              className="outline-none p-2"
              placeholder="Enter the tody's task?"
            />
            <button
              type="button"
              className="bg-blue-300 rounded p-[6.8px]"
              onClick={handleSubmit}
            >
              ADD
            </button>
          </div>
        </form>
      </div>

      {/* card */}
      {!todos.length == 0 ? (
        todos.map((todo) => {
          return (
            <div
              key={todo._id}
              className="bg-white flex justify-between items-center shadow max-w-xs m-auto p-2 mt-2 rounded"
            >
              <p className="text-xl w-full">{todo.todo}</p>
              <div className="flex gap-x-2">
                <Link to={`/update/${todo._id}`}>
                  <button>
                    <PenLine />
                  </button>
                </Link>
                <button onClick={() => handleDelete(todo._id)}>
                  <Trash2 />
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <div className="text-center">No task available</div>
      )}
      {/* end */}
    </div>
  );
};

export default App;
