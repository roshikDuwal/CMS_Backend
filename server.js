import express from "express";
import UserRouter from "./router/auth-router.js";
import ContactRouter from "./router/contact-router.js"
import ServiceRouter from "./router/service-router.js"
import AdminRouter from "./router/admin-router.js"
import { connectDb } from "./utils/db.js";
import { config } from "dotenv";
import { errorMiddleware } from "./middleware/error-middleware.js";
import cors from "cors"

const app = express();

config();

const corsOptions={
  origin:process.env.FrontendURL,
  method:"GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials:true
}

app.use(cors(corsOptions))
app.use(express.json());

app.use("/api/v1", UserRouter,ContactRouter,ServiceRouter);
app.use("/api/v1/admin",AdminRouter)

app.use(errorMiddleware)

connectDb();

app.listen(4000, () => {
  console.log(`Connected to Port : http://localhost:4000/`);
});
