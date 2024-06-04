import {
  postcategory,
  putCategory,
  gettingOneCategory,
  gettingCategories,
  removeCategory,
} from "../controllers/categories.js";
import {Router} from 'express'
import { validateCategory } from '../middlewares/validate_category.js'
import authenticateToken from "../middlewares/vertifyJWT.js";
import isAdmin from "../middlewares/AdminValidation.js";

const categoryRouter= Router()
categoryRouter.get('/categories',authenticateToken,gettingCategories)
categoryRouter.get("/categories/:id",authenticateToken,isAdmin, gettingOneCategory);
categoryRouter.post(
  "/categories",
  validateCategory,
  authenticateToken,
  isAdmin,
  postcategory
);
categoryRouter.put("/categories/:id", validateCategory,authenticateToken,isAdmin, putCategory);
categoryRouter.delete("/categories/:id", authenticateToken,isAdmin, removeCategory);
export default categoryRouter;