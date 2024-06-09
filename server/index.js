import express from "express";
import { config } from "dotenv";
import mongoose from "mongoose";
import TodoRoute from "./routes/TodoRoute.js";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
config({
  path: "./.env",
});
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

// *cors configuration

app.use(cors(
  {
    origin: ["https://mern-stack-crud-client.vercel.app/"],
    methods: ["GET","POST","PUT","DELETE","OPTIONS"],
    credentials: true
}
));
//allow to encoded req.body data
app.use(express.urlencoded({ extended: true }));
// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//production build
app.use(express.static(path.join(__dirname, "build")));
app.get("/" ,(req,res) => {
  res.send("Api running")
})
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.use("/", TodoRoute);
mongoose
  .connect(process.env.MONGO_URL)
  .then(
    app.listen(PORT, () => {
      console.log(`server runs in ${PORT}`);
    })
  )
  .catch((err) => {
    console.error(err.message);
  });
