import express from "express";
import { bookingController } from "./bookings.controller";
import auth from "../../middleware/auth";

const router = express.Router();

router.post('/', bookingController.createBooking);
router.get('/',auth("admin","customer"), bookingController.getBooking);
router.get('/:bookingId',auth("admin","customer"), bookingController.getSingleBooking);
router.put('/:bookingId',auth("admin","customer"), bookingController.updateBooking);
router.delete('/:bookingId',auth("admin","customer"), bookingController.deleteBooking)

export const bookingRouter = router;

