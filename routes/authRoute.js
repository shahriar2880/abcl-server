import express from "express";
import { forgotPasswordController, getAllOrdersController, getOrdersController, loginController, registerController, testController, updateProfileController,orderStatusController, getTransactionsController, getAllUsersController, deleteUserByIdController, makeUserAdminByIdController } from "../controllers/authController.js";
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
router.put("/order-status/:orderId", requireSignIn, isAdmin, orderStatusController);

//all users
router.get("/users", requireSignIn, isAdmin, getAllUsersController);

// user status update
router.delete("/users/:userId", requireSignIn, isAdmin, deleteUserByIdController);

// user status update
router.put("/users/:userId/make-admin", requireSignIn, isAdmin, makeUserAdminByIdController);

//order chart
router.get("/transactions/:transId", requireSignIn, isAdmin, getTransactionsController);

export default router;
