import express from "express";
import { services } from "../controller/service-controller.js";
import {  getSingleService} from "../controller/admin-controller.js"

const router=express.Router();

router.route("/service").get(services)
router.route("/service/:id").get(getSingleService)

export default router