const Errorhandling=require('../util/errorhandling');

module.exports=(err,req,res,next)=>{
    err.statuscode=statuscode || 500;
    err.message=message || "Internal Server Error";

    res.status(err.statuscode).json({
        success:true,
        error:err
    });
};