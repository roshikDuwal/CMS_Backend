import express from "express";
import {
  addservice,
  deleteService,
  deleteUser,
  getAllContact,
  getAllUser,
  getSingleService,
  getSingleUser,
  serviceEdit,
  updateSingleUser,
} from "../controller/admin-controller.js";
import { authMiddleware } from "../middleware/auth-middleware.js";
import { adminMiddleware } from "../middleware/admin-middleware.js";
import {  services } from "../controller/service-controller.js";

const router = express.Router();


router.route("/contacts").get(authMiddleware,adminMiddleware, adminMiddleware,getAllContact);

router.route("/users").get(authMiddleware,adminMiddleware, getAllUser);
router.route("/users/:id").delete(authMiddleware,adminMiddleware, deleteUser);
router.route("/user/:id").get(authMiddleware,adminMiddleware, getSingleUser);
router.route("/users/update/:id").patch(authMiddleware,adminMiddleware, updateSingleUser);

router.route("/service").get(authMiddleware,adminMiddleware,services);
router.route("/add/service").post(authMiddleware,adminMiddleware,addservice);
router.route("/service/:id").get(authMiddleware,adminMiddleware,getSingleService)
router.route("/services/:id").delete(authMiddleware,adminMiddleware, deleteService );
router.route("/service/edit/:id").patch(authMiddleware,adminMiddleware,serviceEdit)

export default router;
