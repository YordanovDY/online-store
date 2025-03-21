import { Router } from "express";
import authController from "./controllers/auth-controller.js";
import productController from "./controllers/product-controller.js";
import subcategoryController from "./controllers/subcategory-controller.js";
import userController from "./controllers/user-controller.js";
import orderController from "./controllers/order-controller.js";
import categoryController from "./controllers/category-controller.js";

const routes = Router();

routes.use('/auth', authController);
routes.use('/user', userController);
routes.use('/subcategories', subcategoryController);
routes.use('/categories', categoryController);
routes.use('/products', productController);
routes.use('/orders', orderController);

export default routes;