import { Router } from "express";
import multer from "multer";
import multerConfig from "./config/multer"
import UserController from "./App/controllers/UserController";
import SessionController from "./App/controllers/SessionController";
import ProductController from "./App/controllers/ProductController";

const routes = new Router();

const upload = multer(multerConfig);

routes.post("/users", UserController.store);
routes.post("/session", SessionController.store);
routes.post("/products", upload.single("file"), ProductController.store);
routes.get("/products", ProductController.index);


export default routes;
