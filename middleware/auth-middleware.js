import jwt from "jsonwebtoken"
import { UserModal } from "../models/user-model.js";

export const authMiddleware=async(req,res,next)=>{
    const token = req.header('Authorization');
    if(!token){
        return res.status(401).json({
            message:"Token not Provided"
        });
    }

    const jwtToken=token.replace("Bearer","").trim();

    try {

        const isVerified=jwt.verify(jwtToken,process.env.JWT_SECRET_KEY)

        const userData=await UserModal.findOne({email:isVerified.email}).select({password:0})

        req.user=userData;
        req.token=token;
        req.userID=userData._id;
        
        next();
    } catch (error) {
        return res.status(401).json({
            message:"Invalid Token"
        });
    }


}