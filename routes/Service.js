import {
  postService,
  putservice,
  gettingOneService,
  gettingServices,
  removeService,
  gettingOneServiceByCategory,
} from "../controllers/Services.js";
import {Router} from 'express'
import { validateService,validateServiceForUpdate } from '../middlewares/validate_service.js'
import authenticateToken from '../middlewares/vertifyJWT.js'
import isAdmin from '../middlewares/AdminValidation.js'
const serviceRouter= Router()
serviceRouter.get("/services", authenticateToken, gettingServices);
serviceRouter.get("/services/:id", authenticateToken,isAdmin,gettingOneService);
serviceRouter.get(
  "/services/category/:id",
  authenticateToken,
  gettingOneServiceByCategory
);

serviceRouter.post('/services',validateService,authenticateToken,isAdmin,postService)
serviceRouter.put("/services/:id", validateServiceForUpdate,authenticateToken,isAdmin, putservice);
serviceRouter.delete("/services/:id", authenticateToken,isAdmin, removeService);
export default serviceRouter