import todos from "../model/TodoModel.js";

// @route  localhost:3000/add
// @desc   save task
// @acces
const addInput = async (req, res, next) => {
  const { todo } = req.body;
  if (!todo.length <= 0) {
    const add = await todos.create({ todo });

    res.status(200).json(add);
    console.log(add);
  } else {
    res.status(400).json({ msg: "please provide vaild fields" });
  }
  next();
};

// @route   localhost:3000/getall
// @desc     display task
// @access   public
const getInput = async (req, res, next) => {
  const result = await todos
    .find({})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
    });
  console.log(result);
  next();
};

// @route   localhost:3000/get/:id
// @desc     get task by id to update
// @access   public
const getInputById = async (req, res, next) => {
  const { id } = req.params;

  const result = await todos.findById({
    _id: id,
  });
  res.status(200).json(result);
  next();
};

// @route   localhost:3000/update/:id
// @desc     update task
// @access   public
const updateInput = async (req, res, next) => {
  const { id } = req.params;

  const result = await todos.findByIdAndUpdate(
    {
      _id: id,
    },
    {
      todo: req.body.newTodo,
    }
  );
  res.status(200).json(result);
  next();
};
// @route   localhost:3000/delete/:id
// @desc     delete task
// @access   public
const deleteByIdInput = async (req, res, next) => {
  const { id } = req.params;

  const deleteTask = await todos.deleteOne({ _id: id });

  res.json(deleteTask);

  next();
};

export { addInput, getInput, getInputById, updateInput, deleteByIdInput };
