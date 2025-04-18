import exprees from "express";
import cors from "cors";
import 'dotenv/config';
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoute.js";
import dashboardRouter from "./routes/dashboardRoute.js";
import userUpdateRouter from "./routes/userUpdateRoute.js";

//App config

const app = exprees();
const port = process.env.PORT || 4000;
connectDB()

//  Middleware

app.use(exprees.json());
app.use(cors());

//API endpoints
app.use('/api/user',userRouter)
app.use('/api/user',dashboardRouter)
app.use('/api/user',userUpdateRouter)
app.get('/',(req,res)=>
{
    res.send("API working");

})


// start the exprees 

app.listen(port,()=>console.log("server start" , port));
