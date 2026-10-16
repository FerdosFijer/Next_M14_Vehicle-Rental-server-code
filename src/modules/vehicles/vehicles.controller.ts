import { Request, Response } from "express";
import { vehicleServices } from "./vehicles.service";

const createVehicle = async(req:Request, res:Response)=>{
  const{ vehicle_name, type, registration_number, daily_rent_price, availability_status}= req.body
  try {
    const result = await vehicleServices.createVehicle(vehicle_name, type, registration_number, daily_rent_price, availability_status) ;
    res.status(201).json({ success: true, message: "vehicle Data inserted successfully", data: result.rows[0] });
  } catch (err:any) {
    res.status(500).json({success: false, message: err.message})
  }
}
const getVehicle =  async(req: Request, res: Response) =>{
    try {
        const result = await vehicleServices.getVehicle();
        res.status(200).json({success: true, message: "vehicle retrieved successfully", data: result.rows[0]})
      } catch (err: any) {
        res.status(500).json({success: false, message: err.message})
      }
}
const getSingleVehicle = async(req: Request, res: Response)=>{
  try {
    const result = await vehicleServices.getSingleVehicle(req.params.id as string);
    if(result.rows.length === 0){
      res.status(404).json({success:false, message: "vehicle not found"})
    }else{
      res.status(200).json({success: true, message: "vehicle fetched successfully", data: result.rows[0]})
    }
  } catch (err: any) {
    res.status(500).json({success: false, message:err.message})
  }
}
const updateVehicle = async (req:Request, res: Response)=> {
  const{ vehicle_name, type, registration_number, daily_rent_price, availability_status}= req.body
  try {
    const result = await vehicleServices.updateVehicle(vehicle_name, type, registration_number, daily_rent_price, availability_status,req.params.id as string);
    if(result.rows.length === 0){
      res.status(404).json({success:false, message: "vehicle not found"}) 
    }else{
      res.status(200).json({success: true, message: "vehicle updated successfully", data: result.rows[0]})
    }
  } catch (err: any) {
    res.status(500).json({success: false,  message: err.message })
  }
}
const deleteVehicle = async (req:Request, res:Response)=>{
  try {
    const result = await vehicleServices.deleteVehicle( req.params.id as string);
    if(result.rowCount === 0){
      res.status(404).json({success:false, message: "vehicle not found"})
    }else{
      res.status(200).json({success: true, message: "vehicles deleted successfully", data: result.rows})
    }
  } catch (err:any) {
    err.status(500).json({success: false, message: err.message})
  }
}

export const vehiclesController = {createVehicle, getVehicle, getSingleVehicle, updateVehicle, deleteVehicle};