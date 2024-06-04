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
const validateService = [
  check("name").notEmpty().withMessage("Name is required"),
  check("description").notEmpty().withMessage("Description is required"),
  check("price").isNumeric().withMessage("invalid price"),
  check("category_id").isNumeric().withMessage("invalid id"),
  validate,
];
const validateServiceForUpdate = [
  check("name").notEmpty().withMessage("Name is required"),
  check("description").notEmpty().withMessage("Description is required"),
  check("price").isNumeric().withMessage("invalid price"),
  validate,
];


export {
  validateService,
  validateServiceForUpdate
};
