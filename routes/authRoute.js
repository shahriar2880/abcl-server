import express from "express";
import { forgotPasswordController, loginController, registerController, testController } from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//Forgot password
router.post("/forgot-password", forgotPasswordController);

//test routes
router.get('/test',requireSignIn, isAdmin, testController)

//protected user route
router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ok: true})
} )
//protected Admin route
router.get("/admin-auth", requireSignIn,isAdmin, (req, res) => {
    res.status(200).send({ok: true})
} )


export default router;
