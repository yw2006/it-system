import { check, validationResult } from "express-validator";

// Validation middleware function
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
};

// Validation rules for registering a category
const validateCategory = [
  check("name").notEmpty().withMessage("Name is required"),
  check("description").notEmpty().withMessage("Description is required"),
  validate,
];


export {
  validateCategory,
};
