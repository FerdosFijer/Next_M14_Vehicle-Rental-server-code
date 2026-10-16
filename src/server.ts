import express, { Request, Response } from "express";
import config from "./config";
import initDB, { pool } from "./config/db";
import logger from "./middleware/logger";
import { userRoutes } from "./modules/users/users.routes";
import { vehicleRouter } from "./modules/vehicles/vehicles.routes";
import { bookingRouter } from "./modules/bookings/bookings.routes";

const app = express();
const port = config.port;

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

//not found
app.use((req, res)=>{
  res.status(404).json({ success: false, message: "Route not found", path: req.path});
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

