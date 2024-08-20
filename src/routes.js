import { Router } from "express";
import multer from "multer";
import multerConfig from "./config/multer"
import UserController from "./App/controllers/UserController";
import SessionController from "./App/controllers/SessionController";
import ProductController from "./App/controllers/ProductController";
import CategoryController from "./App/controllers/CategoryController";
import authMiddlewares from "./App/middlewares/auth";
import OrderController from "./App/controllers/OrderController";

const routes = new Router();

const upload = multer(multerConfig);

routes.post("/users", UserController.store);
routes.post("/session", SessionController.store);

routes.use(authMiddlewares);
routes.post("/products", upload.single("file"), ProductController.store);
routes.get("/products", ProductController.index);
routes.put("/products/:id", upload.single("file"), ProductController.update);

routes.post("/categories", upload.single("file"), CategoryController.store);
routes.get("/categories", CategoryController.index);
routes.put("/categories/:id", upload.single("file"), CategoryController.update);

routes.post("/order", OrderController.store);
routes.get("/order", OrderController.index);
routes.put("/order/:id", OrderController.update);

export default routes;
