import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

// genrate the token

const createToken = (id)=>{
    return jwt.sign({id},process.env.JWT_KEY)

}

// Login Route
const userLogin = async (req,res)=>
{
    try {
        const {email , password} = req.body;

        const user = await userModel.findOne({email});

        if(!user)
        {
            res.json({success:false,message:"Please Signup"})
        }

        const isMatch = await bcrypt.compare(password , user.password);
        const token = createToken(user._id);
        if(isMatch)
        {
            return res.json({success:true,message:"Login Done"
                ,token,
                user:{
                    id: user._id,
                    name:user.name,
                    email:user.email,
                    username:user.username,
                }
            })
        }
        else
        {
            return res.json({success:false,message:"Invalid User"})
        }
    } catch (error) {
        console.log(error);
        return res.json({success:false,message:error.message})
    }
}
// Register Route

const userRegister = async (req,res)=>
{
    try {
        const {name , username , email , password} = req.body;
        // check email and username
        const exist_email = await userModel.findOne({email});
        const exist_username = await userModel.findOne({username});
        if (exist_email) {
            return res.json({ success: false, message: "Email already registered" });
        }
        if (exist_username) {
            return res.json({ success: false, message: "Username already taken" });
        }
        if (!name || !username || !email || !password) {
            return res.json({ success: false, message: "All fields are required" });
        }
        

        // validate email , username and strong password
        if(!validator.isEmail(email))
        {
            return res.json({success:false,message:"Enter Valid E-mail"})
        }
        if(password.length<8)
        {
            return res.json({success:false,message:"Enter strong password"})
        }

        // hashing the password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password,salt);

        // adding to db

        const newUser = new userModel({
            name,
            username,
            email,
            password:hashPassword
        })

        const user = await newUser.save();

        // get the token 
        const token = createToken(user._id)

        res.status(201).json({
            success: true,
            message: "Signup Successful",
            token,
            user: {
                id: user._id,
                name: user.name,
                username: user.username,
                email: user.email
            }
        });
        



    } catch (error) {
        console.log(error);
        res.status(500).json({success:false,message:error.message})
    }
}


// adminLogin Route

const adminLogin = async (req,res)=>
{

}

export { userLogin,userRegister,adminLogin };
