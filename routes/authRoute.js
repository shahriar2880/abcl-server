import express from "express";
import { forgotPasswordController, getAllOrdersController, getOrdersController, loginController, registerController, testController, updateProfileController,orderStatusController } from "../controllers/authController.js";
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

//update profile
router.put("/profile", requireSignIn, updateProfileController);

//order
router.get('/orders', requireSignIn, getOrdersController)

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put("/order-status/:orderId",requireSignIn,isAdmin,orderStatusController);
export default router;
