import { serviceModal } from "../models/service-modal.js";

export const services=async(req,res)=>{
    try {
        const response=await serviceModal.find();

        if(!response){
            return res.status(404).json({message:"No data found"})
        }
        res.status(200).json({data:response})
    } catch (error) {
        console.error(error);
    }

}

