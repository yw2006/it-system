import express from "express";
import { configDotenv } from "dotenv";
import userRouter from "./routes/User.js";
import categoryRouter from "./routes/Category.js";
import serviceRouter from "./routes/Service.js";
import cors from "cors"
configDotenv();
const app = express();
const port = process.env.app_port || 5000

const handleUnexpectedError = (err, req, res, next) => {
  console.error("Unhandled error:", err);

  res.status(500).json({ error: "An unexpected error occurred" });
};
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(handleUnexpectedError)
app.use(express.json());
app.use(userRouter)
app.use(categoryRouter);
app.use(serviceRouter);
app.listen(port,()=>{
    console.log(`server is runnig on port ${port}`)
})
