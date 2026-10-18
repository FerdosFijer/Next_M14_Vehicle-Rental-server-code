import express, { Request, Response } from "express";
import initDB, { pool } from "./config/db";
import logger from "./middleware/logger";
import { userRoutes } from "./modules/users/users.routes";
import { vehicleRouter } from "./modules/vehicles/vehicles.routes";
import { bookingRouter } from "./modules/bookings/bookings.routes";
import { authRoutes } from "./modules/auth/auth.routes";

const app = express();
//parser
app.use(express.json());

initDB();

app.get('/', logger, (req: Request, res:Response) => {
  res.send('Hello World!');
});
// users
app.use("/api/v1/auth/signup", userRoutes)
app.use("/api/v1/users", userRoutes)

//vehicles
app.use("/api/v1/vehicles", vehicleRouter)

//Bookings
app.use('/api/v1/bookings', bookingRouter)

//auth routes
app.use("/api/v1/auth", authRoutes)

//not found
app.use((req, res)=>{
  res.status(404).json({ success: false, message: "Route not found", path: req.path});
})
export default app;