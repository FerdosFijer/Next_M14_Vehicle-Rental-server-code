import express from "express";
import { bookingController } from "./bookings.controller";

const router = express.Router();

router.post('/bookings', bookingController.createBooking);
router.get('/bookings', bookingController.getBooking);
router.get('/bookings/:bookingId', bookingController.getSingleBooking);
router.put('/bookings/:bookingId', bookingController.updateBooking);
router.delete('/bookings/:bookingId', bookingController.deleteBooking)

export const bookingRouter = router;