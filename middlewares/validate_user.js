import { check, validationResult } from 'express-validator'
 const validate=(req,res,next)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(442).json({errors:errors.array()})
    }
    next()
 }
const validateRegisterFields = [
  check("name").notEmpty().withMessage("Name is required"),
  check("email").isEmail().withMessage("invalid Email"),
  check("password")
    .isLength({ min: 8 })
    .withMessage("passowrd is must be at 8 characters long "),
 check('role').notEmpty().withMessage("role is required"),
 validate
];const validateLoginFields = [
   check("email").isEmail().withMessage("invalid Email"),
  check("password")
    .isLength({ min: 8 })
    .withMessage("passowrd is must be at 8 characters long "),
  validate,
];

export   {validateRegisterFields ,validateLoginFields}