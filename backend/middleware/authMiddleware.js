import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';

const authMiddleware = async(req,res,next) =>{
    try{
        const token = req.headers.authorization?.split(" ")[1];
        if(!token)
        {
            return res.status(401).json({
                success:false,
                message :"UnAuth User"
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_KEY);
        const user = await userModel.findById(decoded.id).select("-password");
        if(!user)
        {
            return res.status(401).json(
                {
                    success:false,
                    message:"User not found"
                }
            );
        }

        req.user = user;
        next();

    }
    catch(err)
    {
        return res.status(401).json({
            success:false,
            message:"Auth Failed"
        });
    }
};

export default authMiddleware;