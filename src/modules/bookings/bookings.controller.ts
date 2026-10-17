import { Request, Response } from "express"
import { bookingService } from "./booking.service"

const createBooking= async(req:Request, res:Response)=>{
  try {
    const result = await bookingService.createBooking(req.body);
    res.status(201).json({success: true, message: "Booking is done", data: result.rows[0]})
  } catch (err:any) {
    res.status(500).json({success: false, message: err.message})
  }
}
const getBooking = async(req: Request, res:Response)=> {
  try {
    const result = await bookingService.getBooking();
    res.status(200).json({success: true, message: "Booking retrieved successfully", data: result.rows})
  } catch (err: any) {
    res.status(500).json({success: false, message: err.message})
  }
}
const getSingleBooking = async(req: Request, res: Response)=>{
  try {
    const result = await bookingService.getSingleBooking(req.params.bookingId as string);
    if(result.rows.length === 0){
      res.status(404).json({success:false, message: "Booking not found"})
    }else{
      res.status(200).json({success: true, message: "Booking fetched successfully", data: result.rows[0]})
    }
  } catch (err: any) {
    res.status(500).json({success: false, message:err.message})
  }
}
const updateBooking = async (req:Request, res: Response)=> {
 
  try {
    const result = await bookingService.updateBooking(req.body, req.params.bookingId as string);
    if(result.rows.length === 0){
      res.status(404).json({success:false, message: "Booking not found"}) 
    }else{
      res.status(200).json({success: true, message: "Booking updated successfully", data: result.rows[0]})
    }
  } catch (err: any) {
    res.status(500).json({success: false,  message: err.message })
  }
}
const deleteBooking = async (req:Request, res:Response)=>{
  try {
    const result = await bookingService.deleteBooking(req.params.bookingId as string);
    if(result.rowCount === 0){
      res.status(404).json({success:false, message: "Booking not found"})
    }else{
      res.status(200).json({success: true, message: "Booking deleted successfully", data: result.rows})
    }
  } catch (err:any) {
    err.status(500).json({success: false, message: err.message})
  }
}

export const bookingController ={createBooking, getBooking, getSingleBooking, updateBooking, deleteBooking}