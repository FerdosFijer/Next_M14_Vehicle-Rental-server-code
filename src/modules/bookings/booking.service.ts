import { pool } from "../../config/db"

const createBooking = async (payload: Record<string, unknown>)=>{
    const{user_id,vehicle_id,rent_start_date,rent_end_date,total_price,status}= payload;
    const result = await pool.query(`INSERT INTO bookings (user_id,vehicle_id,rent_start_date,rent_end_date,total_price,status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,[user_id,vehicle_id,rent_start_date,rent_end_date,total_price,status]);
    return result;
}
const getBooking = async()=>{
    const result = await pool.query(`SELECT * FROM bookings`);
    return result;
}
const getSingleBooking = async(id: string) =>{
    const result = await pool.query(`SELECT * FROM bookings WHERE id= $1`,[id]);
    return result;
}
const updateBooking = async (payload: Record<string, unknown>, id:string)=> {
    const {user_id,vehicle_id,rent_start_date,rent_end_date,total_price,status} = payload;
    const result = await pool.query(`UPDATE bookings SET user_id =$1, vehicle_id =$2, rent_start_date =$3, rent_end_date =$4, total_price =$5, status=$6 WHERE id=$7 RETURNING *`, [user_id,vehicle_id,rent_start_date,rent_end_date,total_price,status, id]);
    return result;

}
const deleteBooking = async(id: string)=>{
    const result = await pool.query(`DELETE FROM bookings WHERE id = $1`, [id]);
    return result;
}
export const bookingService ={createBooking, getBooking, getSingleBooking, updateBooking,deleteBooking};