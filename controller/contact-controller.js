import { contactModel } from "../models/contact-model.js"

export const contactForm=async(req,res,next)=>{
    try {
        const response=req.body;

        await contactModel.create(response)

        res.status(200).json({message:"Form Submitted Successfully"})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Form Cannot be send"})
    }
}