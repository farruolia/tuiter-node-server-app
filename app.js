import express from 'express';
import cors from 'cors';
import HelloController from "./controllers/helloController.js";
import UserController from "./controllers/users/userController.js";
import TuitsController from "./controllers/tuits/tuitController.js"

const app = express()
// configure cors right after instantiating express
app.use(cors())
// parse JSON from HTTP request body
app.use(express.json());

HelloController(app)
UserController(app)
TuitsController(app);
app.listen(process.env.PORT || 4000)