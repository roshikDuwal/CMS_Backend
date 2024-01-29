import { UserModal } from "../models/user-model.js";



export const register = async (req, res, next) => {
  try {

    const { username, email, phone, password } = req.body;
    const userExist = await UserModal.findOne({ email });

    if (userExist) {
      return res.status(400).json({ message: "Email already exists" });
    }

    await UserModal.create({
      username,
      password,
      email,
      phone,
    });

    res.status(201).json({
      message: "User registerd successfuly",
    });
  } catch (error) {
    res.status(400).send({ msg: "Register failed" });
    next(error);
  }
};

export const login = async (req, res, next) => {
  
  try {
    const { email, password } = req.body;
    
    const userExist = await UserModal.findOne({ email });

    if (!userExist) {
      return res.status(400).json({ message: "Email does not Exist" });
    }

    const isPasswordValid=await userExist.comparePassword(password)

    if (isPasswordValid) {
      const user={
        _id:userExist._id.toString(),
        username:userExist.username,
        isAdmin:userExist.isAdmin,
        email:userExist.email
      }

      res.status(200).json({
        message: "User Login successfuly",
        access_token: await userExist.generateAccessToken(),
        refresh_token: await userExist.generateRefreshToken(),
        user,
      });
    } else {
      return res.status(401).json({ message: "Password donot Match" });
    }

  } catch (error) {
    res.status(400).send({ msg: "Email failed" });
    next(error);
  }
};

export const user=async(req,res,next)=>{
  try {
    const userData=req.user;
    return res.status(200).json({user:userData})
  } catch (error) {
    res.status(400).send({ msg: "User error failed" });
    next(error);
  }
}
