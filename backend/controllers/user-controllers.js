import User from "../model/User";
import bcrypt from 'bcryptjs';
const cors = require("cors");
app.use(cors());

export const getAllUser = async (req, res, next) => {
    let users;
    try {
        users = await User.find();
    } catch (err) {
        console.log(err);
    }
    if(!users){
        return res.status(404).json({ message: "No User Found"});
    }
    return res.status(200).json({ users });
};