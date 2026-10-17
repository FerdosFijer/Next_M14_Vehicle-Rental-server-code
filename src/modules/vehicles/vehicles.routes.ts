import express from "express";
import { vehiclesController } from "./vehicles.controller";

const router = express.Router();

router.post('/vehicles', vehiclesController.createVehicle );
router.get('/vehicles', vehiclesController.getVehicle);
router.get('/vehicles/:vehicleId', vehiclesController.getSingleVehicle);
router.put('/vehicles/:vehicleId', vehiclesController.updateVehicle);
router.delete('/vehicles/:vehicleId', vehiclesController.deleteVehicle);


export const vehicleRouter = router;