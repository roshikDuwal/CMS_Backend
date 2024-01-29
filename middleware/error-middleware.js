export const errorMiddleware=(err,req,res,next)=>{
    const status=err.status  || 500;
    const message=err.message || "Backend error";
    const success=err.success ;

    return res.status(status).json({
        success,
        message,
    })
};