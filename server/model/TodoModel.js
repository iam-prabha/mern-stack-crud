import mongoose from "mongoose";

const todoScheme = mongoose.Schema({
  todo: {
    type: String,
    required: [true, `please provide vaild field`],
    lowercase: true,
  },
});

const todos = mongoose.model("todos", todoScheme);

export default todos;
