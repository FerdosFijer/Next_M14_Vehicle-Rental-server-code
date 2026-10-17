import express  from "express";
import { userController } from "./users.controller";
import logger from "../../middleware/logger";
import auth from "../../middleware/auth";

const router= express.Router()

router.post('/signup', userController.createUser);
router.get('/users',logger, auth("admin"), userController.getUser);
router.get('/users/:userId', userController.getSingleUser);
router.put('/users/:userId', userController.updateUser);
router.delete('/users/:userId', userController.deleteUser);


 export const userRoutes = router;