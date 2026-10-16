import express from "express";
import { vehiclesController } from "./vehicles.controller";

const router = express.Router();

router.post('/', vehiclesController.createVehicle );
router.get('/', vehiclesController.getVehicle);
router.get('/:id', vehiclesController.getSingleVehicle);
router.put('/:id', vehiclesController.updateVehicle);
router.delete('/:id', vehiclesController.deleteVehicle);


export const vehicleRouter = router;