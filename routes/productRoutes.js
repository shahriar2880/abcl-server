import express from "express";
import {
  createProductController, deleteProductController, getProductController, getSingleProductController, productPhotoController, updateProductController, productFilterController,productCountController, productListController, searchProductController} from "../controllers/productController.js";
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

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete a product
router.delete("/delete-product/:pid", deleteProductController);

//filter product
router.post("/filters-product", productFilterController);

//product count
router.get("/product-count", productCountController);

//product base on page page
router.get("/product-list/:page", productListController);

//search product
router.get("/search/:keyword", searchProductController);


export default router;