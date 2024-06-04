import {createUser,checkUser} from '../models/Users.js'
import { hash } from "bcrypt"
const hashSalt=10
const register = async (req, res) => {
  const User = req?.body;
  User.password = await hash(User?.password, hashSalt);
  const result = await createUser(User);
  res
    .status(result?.statusCode)
    .json({ result: result?.result, message: result?.message,token:result?.token });
};

const login= async (req,res)=>{
const User = req.body;
const result = await checkUser(User);
res
  .status(result?.statusCode)
  .json({ result: result?.result, message: result?.message, token:result?.token });
}



export  {register,login}