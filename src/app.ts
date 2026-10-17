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
app.use("/users", userRoutes)

//vehicles
app.use("/vehicles", vehicleRouter)

//Bookings
app.use('/bookings', bookingRouter)

//auth routes
app.use("/auth", authRoutes)

//not found
app.use((req, res)=>{
  res.status(404).json({ success: false, message: "Route not found", path: req.path});
})
export default app;