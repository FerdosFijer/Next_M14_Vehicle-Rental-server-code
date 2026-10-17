import express  from "express";
import { userController } from "./users.controller";
import logger from "../../middleware/logger";
import auth from "../../middleware/auth";

const router= express.Router()

router.post('/', userController.createUser);
router.get('/',logger, auth("admin","customer"), userController.getUser);
router.get('/:id', userController.getSingleUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);


 export const userRoutes = router;