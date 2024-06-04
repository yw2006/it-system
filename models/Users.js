import db from "./config/index.js";
import { compare } from "bcrypt";
import jwt from 'jsonwebtoken'

const createUser = async (user) => {
  try {
    const { name, email, password, role } = user;
    const query ="INSERT INTO `users` (`name`,  `email`, `password`, `role`) VALUES (?, ?, ?, ?)";
    const [result] = await db.execute(query, [
      name,
      email,
      password,
      role,
    ]);
    if (result.affectedRows === 1) {
      const token = jwt.sign(
        { email: email, role: role },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
      );
      return {
        message: "User created successfully.",
        id: result.insertId,
        statusCode: 201,
        token
      };
    }
      return { message: "Failed to create user.", statusCode: 400 };
  } catch (error) {
    return {
      message: `Error creating user: ${error.message}`,
      statusCode: 500,
    };
  }
};

const checkUser=async (User)=>{
  try{
const {email , password}=User
const query ="SELECT `id`, `name`, `role`, `password` FROM `users` WHERE email = ? ";

const [result]=await db.execute(query,[email])
if(result[0] == null || ! await compare(password,result[0].password)){
  return { message: "user not found", statusCode:404};
}
const token = jwt.sign(
  { email: email, role: result[0].role },
  process.env.JWT_SECRET,
  { expiresIn: "24h" }
);
return {  message: "is valid user", statusCode:200,token,result:result[0]};


  }catch(e){
    return{message:`Error creating user: ${e.message}`,statusCode:500};
  }

}
export { createUser, checkUser };
