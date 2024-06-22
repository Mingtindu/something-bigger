import User from "../models/user.model.js";
const generateAcessAndRefreshToken = async(userId)=>{
    try{
        const user = await User.findOne(userId)
        const accessToken = user.generateAcessToken()
        const refreshToken = user.generateRefreshToken()
        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        return { accessToken, refreshToken }

    }catch(err){
        throw new ApiError(500, "Something went wrong while generating referesh and access token")

    }

}
const createUser = async(req,res)=>{
    const {firstName,lastName,email,password}= req.body;
    if(!firstName || !lastName || !email || ! password){
        res.status(402).json({
            message:"ALl fields are required"
        })
    }
    const createdUser = await User.create({
        firstName,
        lastName,
        email,
        password
    })
    if(!createdUser){
        return res.status(500).json({
            message:"Something went wrong while creating user"
        })
    }
    return res.status(200).json({
        message:"User created success"
    })
       
}

export {createUser}