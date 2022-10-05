
import { Router } from "express";

import { methods as productControllers } from "./../controllers/product.controllers"

const router = Router();

router.get("/", productController.getProducts);
router.get("/:sku", productController.getProduct);
router.post("/", productController.createProduct);
router.put("/:sku", productController.updateProduct);
router.delete("/:sku", productController.deleteProduct);

export default router();