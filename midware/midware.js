const jwt =('jsonwebtoken');
const {JWT_SECRET}=process.env;

const authMiddleware=(req, res, next)=>{
    const token =req.headers.authorization;

    if (!token){
        return res.status(401).json({message:'unauthorized'});
    }
    try{
        //verify token
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user= decoded;
        next();
    }catch (err){
return res.status(401).json({message:'invalid token'})
    }
}
module.exports =authMiddleware;