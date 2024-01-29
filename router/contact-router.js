import express from "express"
import { contactForm } from "../controller/contact-controller.js";
import { validate } from "../middleware/validate-middleware.js";
import { contactSchema } from "../validator/contact-validator.js";

const router=express.Router();

router.route("/contactform").post(validate(contactSchema),  contactForm)

export default router;