import express, { Router } from "express";
import dotenv from "dotenv"
import bodyParser from "body-parser";
import cors from "cors"
import helmet from "helmet";
import morgan from "morgan";
import  projectRoutes from "./Routes/projectRoutes";
import taskRoutes from "./Routes/taskRoutes"
import { search } from "./controllers/searchControllers";
import searchRoutes from "./Routes/searchRoutes"
// CONFIG
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors());


// ROUTE


app.get('/', (req, res) => {
    res.send("This home route bro");

});
app.use("/projects", projectRoutes);
app.use("/tasks", taskRoutes)
app.use("/search", searchRoutes)

// SERVER 
const port =  process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
