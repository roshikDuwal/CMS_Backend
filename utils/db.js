import mongoose from "mongoose";

// const URI="mongodb://127.0.0.1:27017/mern_admin"

export const connectDb = () => {
    mongoose.connect(process.env.MONGODB_URI, {
        dbName: "mern_admin"
    }).then((c) => console.log(`Database Connected with ${c.connection.host}`)).catch((err) => console.log(err))
}