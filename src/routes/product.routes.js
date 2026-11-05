import { Router } from "express";
import productsController from "../controllers/products.controller.js";
import {
    createProdactsSchema,
    updateProdactsSchema,
} from "../validation/products.validate.js";
import { validate } from "../middleware/validate.middleware.js";

const routerProducts = new Router();

routerProducts
    .get("/", productsController.getAll)
    .get("/:id", productsController.getId)
    .post("/", validate(createProdactsSchema), productsController.create)
    .put("/:id", validate(updateProdactsSchema), productsController.update)
    .delete("/:id", productsController.delete);

export { routerProducts };
