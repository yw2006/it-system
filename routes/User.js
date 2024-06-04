import { login, register } from "../controllers/Users.js";
import { Router } from 'express'
import {
  validateRegisterFields,
  validateLoginFields,
} from "../middlewares/validate_user.js";
const userRouter=Router()
userRouter.post("/register", validateRegisterFields, register);
userRouter.post("/login", validateLoginFields, login);

export default userRouter