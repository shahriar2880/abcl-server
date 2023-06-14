import express from "express";
import {
  createProductController, deleteProductController, getProductController, getSingleProductController, getProductQuantityById, updateProductController, productPhotoController, productFilterController, updateProductQuantityController, productCountController, productListController, searchProductController, relatedProductController, productCategoryController, braintreeTokenController, brainTreePaymentController} from "../controllers/productController.js";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

//creating routes
router.post("/create-product",requireSignIn,isAdmin,formidable(),createProductController);
//routes for update
router.put("/update-product/:pid", requireSignIn,isAdmin,formidable(),updateProductController);

//get products
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

router.get("/get-product-quantity/:pid", getProductQuantityById)

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete a product
router.delete("/delete-product/:pid", deleteProductController);

//filter product
router.post("/filters-product", productFilterController);


router.post("/update-product-quantity/:pid", updateProductQuantityController);

//product count
router.get("/product-count", productCountController);

//product base on page page
router.get("/product-list/:page", productListController);

//search product
router.get("/search/:keyword", searchProductController);

//similar product
router.get("/related-product/:pid/:cid", relatedProductController);

//category wise product
router.get("/product-category/:slug", productCategoryController);


//payments routes
//token
router.get("/braintree/token", braintreeTokenController);

//payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);


export default router;