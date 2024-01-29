import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});


//secure password
userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) {
    next();
  }

  try {
    const saltRound = await bcryptjs.genSalt(10);
    const hash_password = await bcryptjs.hash(user.password, saltRound);
    user.password = hash_password;
  } catch (error) {
    next(error);
  }
});


userSchema.methods.comparePassword=async function(password){
  const user=this;
  return bcryptjs.compare(
    password,
    user.password
  );

}

userSchema.methods.generateAccessToken = async function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        isAdmin:this.isAdmin
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "10d",
      }
    );
  } catch (error) {
    console.error(error);
  }
};


userSchema.methods.generateRefreshToken = async function(){
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "10d",
      }
    );
  } catch (error) {
    console.error(error);
  }
};

export const UserModal = new mongoose.model("User", userSchema);
