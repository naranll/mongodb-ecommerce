import express from "express";
import cors from "cors";
import "./config/mongoose-config.js";
import productsRouter from "./routes/products-route.js";
import userRouter from "./routes/user-route.js";
// import bodyParser from "body-parser";

const port = 5500;
const app = express();
app.use(express.json());
// app.use(bodyParser.json())
app.use(cors());
app.use(productsRouter);
app.use(userRouter);


app.listen(port, () => console.log(`listening on port ${port}`))