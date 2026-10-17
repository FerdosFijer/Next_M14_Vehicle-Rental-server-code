import express from "express";
import { vehiclesController } from "./vehicles.controller";
import auth from "../../middleware/auth";

const router = express.Router();

router.post('/', vehiclesController.createVehicle );
router.get('/', vehiclesController.getVehicle);
router.get('/:vehicleId', vehiclesController.getSingleVehicle);
router.put('/:vehicleId',auth("admin"), vehiclesController.updateVehicle);
router.delete('/:vehicleId',auth("admin"), vehiclesController.deleteVehicle);


export const vehicleRouter = router;
