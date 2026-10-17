import { Request, Response } from "express";
import { userServices } from "./users.service";

const createUser = async(req: Request, res:Response)=>{
  try {
    const result = await userServices.createUser(req.body);
    res.status(201).json({ success: true, message: "Data inserted successfully", data: result.rows[0] });
  } catch (err:any) {
    res.status(500).json({success: false, message: err.message})
  }
}
const getUser = async(req: Request, res:Response)=>{
  try {
    const result = await userServices.getUser();
    res.status(200).json({ success: true, message: "Users retrieved  111 successfully", data: result.rows });
  } catch (err:any) {
    res.status(500).json({success: false, message: err.message})
  }
}
const getSingleUser = async (req: Request, res: Response) => {
  try{
    const result = await userServices.getSingleUser(req.params.userId as string);

    if(result.rows.length === 0){
      res.status(404).json({success:false, message: "user not found"})
    }else{
      res.status(200).json({success: true, message: "User retrieved successfully", data: result.rows[0]})
    }
  }catch(err: any){
    res.status(500).json({success:false, message: err.message})
  }
}
const updateUser = async (req: Request, res: Response) => {
  try{
    const result = await userServices.updateUser(req.body, req.params.userId as string);
    if(result.rows.length === 0){
      res.status(404).json({success:false, message: "user not found"})
    }else{
      res.status(200).json({success: true, message: "User updated successfully", data: result.rows[0]})
    }
  }catch(err: any){
    res.status(500).json({success:false, message: err.message})
  }
}
const deleteUser = async (req: Request, res: Response) => {
  try{
    const result = await userServices.deleteUser(req.params.userId as string);
    if(result.rowCount === 0){
      res.status(404).json({success:false, message: "user not found"})
    }else{
      res.status(200).json({success: true, message: "User deleted successfully", data: result.rows})
    }
  }catch(err: any){
    res.status(500).json({success:false, message: err.message})
  }
}

export const userController= {createUser, getUser, getSingleUser, updateUser, deleteUser}