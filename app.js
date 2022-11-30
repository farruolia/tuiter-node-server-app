import express from 'express';
import cors from 'cors';
import HelloController from "./controllers/helloController.js";
import UserController from "./controllers/users/userController.js";
import TuitsController from "./controllers/tuits/tuitController.js"
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express()
// configure cors right after instantiating express
app.use(cors())
// parse JSON from HTTP request body
app.use(express.json());

//mongoose.connect('mongodb://localhost:27017/tuiter');

dotenv.config();

// build the connection string
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/tuiter';
mongoose.connect(`${CONNECTION_STRING}`);

HelloController(app)
UserController(app)
TuitsController(app);
app.listen(process.env.PORT || 4000)