import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import "./config/mongoose-config.js";

const port = 5500;
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => console.log(`listening on port ${port}`))