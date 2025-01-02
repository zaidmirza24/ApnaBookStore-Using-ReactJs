import user from '../model/user.model.js';
import bcryptjs from 'bcryptjs'

export const signup = async(req,res)=>{
    try {
        const {Fullname,email,password} = req.body;
        const User = await user.findOne({email})
        if(User){
            return res.status(400).json({message:"User already exists"})
        }
        const hashpassword = await bcryptjs.hash(password,10)
        const createdUser = new user({
            Fullname, 
            email,
            password:hashpassword,

        }) 
        await createdUser.save()
        res.status(201).json({message:"User Created successfully !"})
    } catch (error) {
        console.log("Error",error)
        
    }

}
export const login = async (req,res)=>{
    try {
        const {email,password} = req.body;
        const User = await user.findOne({email})
        const isMatch = await bcryptjs.compare(password,User.password)
        if(!user || !isMatch){
            return res.status(400).json({message:"Invalid username or password"})
        }
        else{
            res.status(200).json({message:"Login successfully",user:{
                _id:User._id,
                Fullname:User.Fullname,
                email:User.email,
            }})
        }
    } catch (error) {
        console.log("Error",error)
        
    }
}